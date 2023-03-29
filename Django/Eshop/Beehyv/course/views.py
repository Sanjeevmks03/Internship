from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import order, signup_form as users
from .models import products as items
from .models import category as cats
from .models import login as logs
from django.views import View
from django.contrib.auth.hashers import make_password,check_password

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
    def get(self,request):
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
                return redirect('/store')
                # return render(request,"store.html")
            else:
                error="Invalid email or password!!"
                return render(request,'login.html',{'error':error})
        else:
             error="User Does'nt exists!!"
             return render(request,'login.html',{'error':error})
    

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
   

class order_view(View):
    def get(self,request):
        customer=request.session.get('id')
        orders=order.get_order_by_customer_id(customer)
        print(orders)
        return render(request, 'orders.html',{'orders':orders})