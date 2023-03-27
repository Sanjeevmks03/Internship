from django.http import HttpResponse
from django.shortcuts import render
from .models import signup_form
from .models import products as items
from .models import category as cats
from .models import login as logs
# Create your views here.
def index(request):

    return render(request,'Index.html')

def products(request):
    postdata=request.POST
    name=postdata.get('name')
    description=postdata.get('description')
    price=postdata.get('price')
    image=postdata.get('image')
    discount=postdata.get('discount')
    category=postdata.get('category')
    # if selected_category=='Computer':
    #     category='1'
    # else:
    #     category='2'
    # print(name,mobile,place)
    product=items(name=name,
                    description=description,
                    price=price,
                    image=image,
                    Discount_price=discount,
                    category=category)

    if request.method=='GET':
        return render(request,'products.html')
    else:
        product.register()
        return HttpResponse(request.POST.get('name'))
    # return render(request,"store.html",{'product':product}) 
def store(request):
    category=cats.objects.all()
    category_id=request.GET.get("categ")
    print(category_id)
    product=None
    if category_id:
        product=items.objects.filter(category=category_id)
        print(product)
    else:
        product=items.objects.all()

    data={}
    data['category']=category
    data['product']=product
    # print(product)
    return render(request,"store.html",data)

def signup(request):
    postdata=request.POST
    name=postdata.get('name')
    email=postdata.get('email')
    mobile=postdata.get('mobile')
    place=postdata.get('place')
    password=postdata.get('password')
    confirm=postdata.get('confirm')
    print(name,mobile,place)
    customer=signup_form(name=name,
                         email=email,
                         mobile=mobile,
                         place=place,
                         password=password)
    
    error=None
    # exists=signup_form.isexist()

    if not name:
        error="name required"
    elif len(name)<4:
        error="name is too short"
    elif len(mobile)!=10:
        error="Please enter 10 digit mobile number"
    elif not name:
        error="place required"
    elif not email:
        error="email required"
    elif password!=confirm:
        error="password is not matching"
    # elif exists:
    #     error="Email already exists"
   

    if request.method=='GET':
        return render(request,'signup_form.html')
    else:
        if error:
            return render(request,'signup_form.html',{'error':error})
        else:
            customer.register()
            return HttpResponse("registration done!  "+request.POST.get('name'))
        

    
    
        

    

def login(request):
    postdata=request.POST
    name=postdata.get('name')
    email=postdata.get('email')
    password=postdata.get('password')
    print(name,email,password)
    customer=logs(name=name,
                         email=email,
                         password=password)

    if request.method=='GET':
        return render(request,'login.html')
    else:
        customer.register()
        return HttpResponse(request.POST.get('name'))