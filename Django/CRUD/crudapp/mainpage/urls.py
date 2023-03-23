from . import views
from django.urls import path

urlpatterns = [
    path("home",views.index),
    path("items",views.items),
    path("cart",views.cart)
]

