from . import views
from django.urls import path

urlpatterns = [
    path("",views.index),
    path("store",views.store),
]
