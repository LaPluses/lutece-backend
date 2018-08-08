import graphene
from graphene_django.types import DjangoObjectType
from annoying.functions import get_object_or_None
from .models import Blog, BlogDiscussion, BlogVoteUser
from user.schema import UserType
from user.models import User
from graphql_jwt.decorators import login_required
from .form import BasicBlogForm
from utils.schema import paginatorList
from discussion.schema import DiscussionType

class BlogType( DjangoObjectType ):
    class Meta:
        model = Blog
        only_fields = ( 'id' , 'title' , 'content' , 'create_time' , 'slug' , 'view' , 'vote' , 'disable' )
    
    user = graphene.Field( UserType )

    def resolve_user( self , info , * args , ** kwargs ):
        return self.user

class BlogDiscussionType( graphene.ObjectType , DiscussionType ):
    pass

class BlogDiscussionListType( graphene.ObjectType ):
    class Meta:
        interfaces = ( paginatorList , )
    discussionList = graphene.List( BlogDiscussionType )

class BlogListType( graphene.ObjectType ):
    class Meta:
        interfaces = (paginatorList, )

    blogList = graphene.List(BlogType)


class CreateBlog( graphene.Mutation ):
    class Arguments:
        title = graphene.String( required = True )
        content = graphene.String( required = True )
    
    state = graphene.Boolean()

    @login_required
    def mutate( self , info , * args , ** kwargs ):
        BlogForm = BasicBlogForm( kwargs )
        if BlogForm.is_valid():
            values = BlogForm.cleaned_data
            Blog(
                title = values['title'],
                content = values['content'],
                user = info.context.user,
            ).save()
            return CreateBlog( state = True )
        else:
            raise RuntimeError(BlogForm.errors.as_json())


class Query(object):
    blog = graphene.Field( BlogType , slug = graphene.String() )
    blogList = graphene.Field( BlogListType, page = graphene.Int() )
    blogDiscussionList = graphene.Field( BlogDiscussionListType , slug = graphene.String() , page = graphene.Int() , time = graphene.Int( required = False ) )

    def resolve_blog( self , info , slug ):
        s = Blog.objects.get( slug = slug )
        if s.disable and not info.context.user.has_perm('blog.view_all'):
            return None
        return s

    def resolve_blogList( self , info , page ):
        from django.core.paginator import Paginator
        from lutece.config import PER_PAGE_COUNT
        blog_list = Blog.objects.all()
        if not info.context.user.has_perm('blog.view_all'):
            blog_list = blog_list.filter( disable = False )
        paginator = Paginator( blog_list, PER_PAGE_COUNT )
        return BlogListType( maxpage = paginator.num_pages , blogList = paginator.get_page( page ) )
    
    def resolve_blogDiscussionList( self , info , slug , page , * args , ** kwargs ):
        from django.core.paginator import Paginator
        discussion_list = BlogDiscussion.objects.filter( blog = Blog.objects.get( slug = slug ) , reply = None ).order_by( 'submit_time' )
        if not info.context.user.has_perm('blog.view_all'):
            discussion_list = discussion_list.filter( visibility = True )
        paginator = Paginator( discussion_list, 10 )
        return BlogDiscussionListType( maxpage = paginator.num_pages , discussionList = paginator.get_page( page ) )

class Mutation(graphene.AbstractType):
    CreateBlog = CreateBlog.Field()
