from django.shortcuts import render
from .models import courses
# Create your views here.
def index(request):
    return render(request,"Index.html")
def cart(request):
    return render(request,"cart.html")

def items(request):
   avail=courses.objects.all()
   return render(request,'items.html',{'avail':avail})