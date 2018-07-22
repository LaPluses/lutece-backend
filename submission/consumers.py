from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Submission, Judgeinfo
from graphql_jwt.shortcuts import get_user_by_token
from django.contrib.auth.models import AnonymousUser
from utils.language import Language
from json import dumps

class StatusDetailConsumer( AsyncWebsocketConsumer ):

    async def connect( self ):
        self.submission = Submission.objects.get( pk = self.scope['url_route']['kwargs']['pk'] )
        self.group_name = 'StatusDetail_%d' % self.submission.pk
        try:
            self.user = get_user_by_token( token = self.scope['query_string'] )
        except:
            self.user = AnonymousUser()
        '''
            Auth
        '''
        if not self.user.has_perm( 'problem.view_all' ) and not self.submission.problem.visible:
            raise RuntimeError( 'Permission Denied' )
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        await self.accept()
        await self.init()
        if self.submission.completed:
            await self.close()

    '''
        Send the judge_result that has been created before
    '''

    async def init( self ):
        s = Judgeinfo.objects.filter( submission = self.submission )
        lang = Language.get_language( self.submission.language )
        await self.update_result( event = { 'data':{
            'result' : self.submission.judge_status ,
            'judge' :  [ each.get_websocket_field() for each in s ] ,
            'compileerror_msg' : self.submission.compileerror_msg,
            'judgererror_msg' : self.submission.judgererror_msg,
            'casenumber' : self.submission.case_number ,
            'code' : self.submission.code ,
            'codehighlight' : lang.value.codemirror }} )
    
    async def disconnect( self , close_code ):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def update_result( self , event ):
        data = event['data']
        perm = self.submission.user == self.user
        privilege = self.user.has_perm( 'submission.view_all' )
        if 'compileerror_msg' in data and not ( perm or privilege ):
            data.pop( 'compileerror_msg' )
        if 'judgererror_msg' in data and not privilege:
            data.pop( 'judgererror_msg' )
        if 'code' in data and not ( perm or privilege ):
            data.pop( 'code' )
        await self.send( text_data = dumps( data ) )
