from . import views
from django.urls import include, path
from .middlewares.auth import auth_middleware 
from .views import change, checkout, login, order_view, orderviewset, productview, productviewset, signup, signupviewset, store,cart
from rest_framework import routers


router=routers.DefaultRouter()
router.register(r'userview',signupviewset)
router.register(r'productview',productviewset)
router.register(r'orderview',orderviewset)


urlpatterns = [
    path("",views.index),
    path("store",store.as_view(),name='store'),
   
    path("products",views.products),
    # path("productview",views.productview),
    path('',include(router.urls)),
    path("signup",signup.as_view(),name='signup'),

    
    path("login",login.as_view(),name='login'),
    path("logout",views.logout,name='logout'),
    path("cart",auth_middleware(cart.as_view()),name='cart'),
    path("check-out",checkout.as_view(),name='checkout'),
    path("order",auth_middleware(order_view.as_view()),name='order'),
    path("change",change.as_view(),name='change'),
]
