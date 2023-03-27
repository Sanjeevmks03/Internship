from . import views
from django.urls import path

urlpatterns = [
    path("",views.index),
    path("store",views.store),
    path("signup",views.signup),
    path("products",views.products),
    path("login",views.login)
]
