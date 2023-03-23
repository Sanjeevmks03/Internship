from django.shortcuts import render
from django.http import HttpRequest,HttpResponse
# Create your views here.
def index(request):
    return render(request,'Loginpage.html')

def signup(request):
    return render(request,'signup.html')

def webpage(request):
    return render(request,'webpage.html')