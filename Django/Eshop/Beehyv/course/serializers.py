from rest_framework import serializers

from .models import order, products, signup_form

class signupserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=signup_form
        fields="__all__"

class productserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=products
        fields="__all__"

class orderserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=order
        fields="__all__"

# class productserializer(serializers.ModelSerializer):
#     class Meta: 
#         model=products
#         fields="__all__"
