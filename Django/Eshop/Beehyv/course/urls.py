from . import views
from django.urls import path 
from .views import login,signup,store,cart
urlpatterns = [
    path("",views.index),
    path("store",store.as_view(),name='store'),
    path("signup",signup.as_view(),name='signup'),
    path("products",views.products),
    path("login",login.as_view(),name='login'),
    path("logout",views.logout,name='logout'),
    path("cart",cart.as_view(),name='cart')
]
