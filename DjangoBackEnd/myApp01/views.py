from django.shortcuts import render

from datetime import datetime

from django.shortcuts import render
from .models import Post
import json
from django.views.decorators.csrf import csrf_exempt
import blockChain


# Create your views here.



from django.http import HttpResponse


def hello_world(request):
    import sys
    hellostr = "Hello World! Current Time: {}".format(datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0000"))
    print hellostr
    return HttpResponse(hellostr)


def home(request):
    return HttpResponse("No Service.")

@csrf_exempt
def track(request):
    tracks = blockChain.getTrackRedis(request.GET['addr'])
    ret = blockChain.trackToResponse(tracks)
    ret['reportUrl'] = ['http://i.imgur.com/undefined.jpg','http://i.imgur.com/Zldl1mY.jpg']
    return HttpResponse(json.dumps(ret).decode('unicode-escape').encode('utf8'))


@csrf_exempt
def transaction(request):
    ret = blockChain.transaction(request.POST['source'], request.POST['target'])
    return HttpResponse(json.dumps(ret).decode('unicode-escape').encode('utf8'))


@csrf_exempt
def addr(request):
    name = None
    info = None
    if "name" in request.POST:
        name = request.POST['name']
    if "info" in request.POST:
        info = request.POST['info']
    ret = blockChain.createAddress(request.POST['key'], name=name, info=info)
    return HttpResponse(json.dumps(ret).decode('unicode-escape').encode('utf8'))
