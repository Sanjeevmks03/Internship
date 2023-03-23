from django.urls import path 
from . import views

urlpatterns = [
    path("Loginpage.html",views.index),
    path("signup.html",views.signup),
    path("webpage.html",views.webpage)
]
