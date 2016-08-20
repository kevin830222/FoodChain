from __future__ import unicode_literals

from django.apps import AppConfig

from django.contrib import admin
from .models import Post



class Myapp01Config(AppConfig):
    name = 'myApp01'

admin.site.register(Post)