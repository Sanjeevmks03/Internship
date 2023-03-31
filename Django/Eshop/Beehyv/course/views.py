
from django.http import HttpResponse
from django.shortcuts import redirect, render,HttpResponsePermanentRedirect

from .serializers import orderserializer, productserializer, signupserializer

# from .serializers import orderserializer, productserializer, signupserializer
from .models import order, signup_form as users
from .models import products as items
from .models import category as cats
from .models import login as logs
from django.views import View
from django.contrib.auth.hashers import make_password,check_password
from .middlewares.auth import auth_middleware
from django.utils.decorators import method_decorator
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

def index(request):
    return render(request,'Index.html')



class productviewset(viewsets.ModelViewSet):
    queryset=items.objects.all()
    serializer_class=productserializer

@api_view(['GET','POST'])
def productview(request):
    try:
        data=request.data
        serializer=productserializer(data=data)
        if serializer.is_valid():
            print(serializer.data)
    except Exception as e:
        print(e)

    
    return Response({'data':serializer.data})


def products(request):
    
    if request.method=='POST':
        postdata=request.POST
        name=postdata.get('name')
        description=postdata.get('description')
        price=postdata.get('price')
        # image = postdata.FILES.get('image')
        checked=postdata.get('offer')
        if checked:
            offer=True
        else:
            offer=False
        image=request.FILES['productimage']
        discount=postdata.get('discount')
        category_id=postdata.get('category')
        categories=cats.objects.get(id=category_id)
        print(offer)


        # files = request.FILES  # multivalued dict
        # image = files.get("image")
        
        product=items(name=name,
                        description=description,
                        price=price,
                        image=image,
                        Discount_price=discount,
                        offer=offer,
                        category=categories)
        product.register()
        # return HttpResponse(request.POST.get('name'))
        return render(request,"store.html",{'product':items.objects.all()})


    if request.method=='GET':
        return render(request,'products.html',{'category':cats.objects.all()})


class store(View):
    def post(self,request):
        product=request.POST.get('product')
        remove=request.POST.get('remove')
        cart=request.session.get('cart')
        if cart:
            quantity=cart.get(product)
            if remove:
                if quantity==1:
                    cart.pop(product)
                else:
                    cart[product]=quantity-1
            else:
                if quantity:
                    cart[product]=quantity+1
                else:
                    cart[product]=1
        else:
            cart={}
            cart[product]=1

        request.session['cart']=cart
        # print(request.session['cart'])
        return redirect('/store')

    def get(self,request):
        cart=request.session.get('cart')
        if not cart:
            request.session['cart']={}
        category=cats.objects.all()
        category_id=request.GET.get("categ")
        product=None
        if category_id:
            product=items.objects.filter(category=category_id)
            # print(product)
        else:
            product=items.objects.all()

        data={}
        data['category']=category
        data['product']=product
        print("you are : ",request.session.get('name'))
        return render(request,"store.html",data)

    


class signupviewset(viewsets.ModelViewSet):
    queryset=users.objects.all()
    serializer_class=signupserializer


class signup(View):
    def get(self,request):
        return render(request,'signup_form.html')
    def post(self,request):
        postdata=request.POST
        name=postdata.get('name')
        email=postdata.get('email')
        mobile=postdata.get('mobile')
        place=postdata.get('place')
        password=postdata.get('password')
        confirm=postdata.get('confirm')
        print(name,mobile,place)
        customer=users(name=name,
                            email=email,
                            mobile=mobile,
                            place=place,
                            password=password)
        
        error=None
        # exists=signup_form.isexist()

        signed=users.objects.filter(email=email)

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
        elif signed:
            error="Email already exists"
        

        if error:
            return render(request,'signup_form.html',{'error':error})
        else:
            customer.password=make_password(customer.password)
            customer.register()
            return redirect('/login')
            #return HttpResponse("registration done!  "+request.POST.get('name'))
            


    
    
        
class login(View):
    return_url=None
    def get(self,request):
        login.return_url=request.GET.get('return_url')
        return render(request,'login.html')

    def post(self,request):
        error=None
        postdata=request.POST
        name=postdata.get('name')
        email=postdata.get('email')
        password=postdata.get('password')
    
        original=None
        try:
            original= users.objects.get(email=email)
        except:
            original= False

        if original:
            check=check_password(password,original.password)

            # print(check)
            if check:
                request.session['id']=original.id
                request.session['name']=original.name
                request.session['email']=original.email

                if login.return_url:
                    
                    return HttpResponsePermanentRedirect(login.return_url)
                else:
                    login.return_url=None
                    return redirect('/store')
                # return render(request,"store.html")
            else:
                error="Invalid email or password!!"
                return render(request,'login.html',{'error':error})
        else:
             error="User Does'nt exists!!"
             return render(request,'login.html',{'error':error})


class change(View):
    def get(self,request):
        return render(request,'change_pass.html')
    def post(self,request):
        email=request.session.get('email')
        previous=request.POST.get('previous')
        new=request.POST.get('new')
        original=users.objects.get(email=email)
        hashed_new=make_password(new)

        if check_password(previous,original.password):
            if previous==new:
                error="New password is same as previous"
            else:
                original.password=hashed_new
                original.save()
                return redirect('login')
        else:
            error="Please enter correct previous password"
            return render(request,'change_pass.html',{'error':error})
    

def logout(request):
    request.session.clear()
    return redirect('/login')


class cart(View):

    def get(self,request):
        # ids=list()
        ids=list(request.session.get('cart').keys())
        product=items.get_all_products_by_ids(ids)
        # product=items.objects.filter(id__in=ids)
        # print(product)
        return render(request,'cart.html',{'product':product})
    def post(self,request):
        product=request.POST.get('product')
        remove=request.POST.get('remove')
        cart=request.session.get('cart')
        if cart:
            quantity=cart.get(product)
            if remove:
                if quantity==1:
                    cart.pop(product)
                else:
                    cart[product]=quantity-1
            else:
                if quantity:
                    cart[product]=quantity+1
                else:
                    cart[product]=1
        else:
            cart={}
            cart[product]=1

        request.session['cart']=cart
        # print(request.session['cart'])
        return redirect('/cart')
    


class checkout(View):
    def post(self,request):
        address=request.POST.get('address')
        phone=request.POST.get('phone')
        customer=request.session.get('id')
        carts=request.session.get('cart')
        products=items.get_all_products_by_ids(list(carts.keys()))
        print(address,phone,customer,carts,products)

        for i in products:
            Order=order(customer=users(id=customer),
                        product=i,
                        price=i.price,
                        address=address,
                        phone=phone,
                        quantity=carts.get(str(i.id)))
            Order.placeOrder()
            request.session['cart']={}
        return redirect('cart')
   


class orderviewset(viewsets.ModelViewSet):
    queryset=order.objects.all()
    serializer_class=orderserializer

class order_view(View):
    def get(self,request):
        customer=request.session.get('id')
        orders=order.get_order_by_customer_id(customer)
        print(orders)
        return render(request, 'orders.html',{'orders':orders})