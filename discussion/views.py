from django.shortcuts import render
from .models import Discussion
from django.http import Http404, HttpResponse
from user.decorators import login_required_ajax
from json import dumps
from annoying.functions import get_object_or_None
from django.contrib.auth.decorators import permission_required


def problem_discussion_show(request, pk):
    from problem.models import Problem
    view_all = request.user and request.user.has_perm('discussion.view_all')
    problem = Problem.objects.get( pk = pk )
    discussion = problem.problemdiscussion_set.all()
    return render(request, 'discussion/problem_discussion_content.html', {
        'discussion':  discussion,
        'problem' : problem,
        'view_all': view_all})


@login_required_ajax
def discussion_reply(request):
    status = {
        'status': False,
        'errlist': []}
    err = status['errlist']
    try:
        if request.method == 'POST':
            discussionid = request.POST.get('discussionid')
            content = request.POST.get('content')
            discussion = get_object_or_None(
                Discussion, pk=discussionid)
            if not content:
                err.append('Empty content')
                raise ValueError('Empty content')
            if not discussion or not discussion.visibility:
                raise ValueError('Permission Denied')
            d = Discussion(
                parent=discussion,
                user=request.user,
                content=content)
            d.save()
            status['status'] = True
    except Exception as e:
        print(str(e))
    finally:
        return HttpResponse(dumps(status), content_type='application/json')


@permission_required('discussion.change_visibility')
def discussion_change_visibility(request):
    status = {
        'status': False,
        'errlist': []}
    err = status['errlist']
    try:
        if request.method == 'POST':
            discussionid = request.POST.get('discussionid')
            visibility = request.POST.get('visibility')
            print(discussionid, visibility)
            discussion = get_object_or_None(
                Discussion, pk=discussionid)
            if not discussion:
                raise ValueError('Permission Denied')
            discussion.visibility = visibility
            discussion.save()
            status['status'] = True
    except Exception as e:
        print(str(e))
    finally:
        return HttpResponse(dumps(status), content_type='application/json')
