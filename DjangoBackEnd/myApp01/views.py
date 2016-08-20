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
    tracks = blockChain.getTrack(request.GET['addr'])
    ret = blockChain.trackToResponse(tracks)
    return HttpResponse(json.dumps(ret))


@csrf_exempt
def transaction(request):
    return HttpResponse("Under Construction")


@csrf_exempt
def addr(request):
    return HttpResponse("Under Construction")
