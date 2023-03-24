from django.shortcuts import render
from .models import products,category
# Create your views here.
def index(request):

    return render(request,'Index.html')
def store(request):
    product=products.get_all_products()
    print(product)
    return render(request,"store.html",{'product':product}) 