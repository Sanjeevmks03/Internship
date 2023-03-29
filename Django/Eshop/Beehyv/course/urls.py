from . import views
from django.urls import path 
from .views import checkout, login, order_view,signup,store,cart
urlpatterns = [
    path("",views.index),
    path("store",store.as_view(),name='store'),
    path("signup",signup.as_view(),name='signup'),
    path("products",views.products),
    path("login",login.as_view(),name='login'),
    path("logout",views.logout,name='logout'),
    path("cart",cart.as_view(),name='cart'),
    path("check-out",checkout.as_view(),name='checkout'),
    path("order",order_view.as_view(),name='order')
]
