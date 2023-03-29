import datetime
from django.db import models

# Create your models here.

class category(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return '{0}'.format(self.name)


class products(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField(default="",max_length=100)
    price=models.IntegerField(default=0)
    image=models.ImageField(default='',upload_to='media/uploaded_pics', height_field=None, width_field=None, max_length=None)
    Discount_price=models.IntegerField(default=0)
    offer=models.BooleanField(default=False)
    category=models.ForeignKey("category", on_delete=models.CASCADE)

    def __str__(self):
        return '{0}'.format(self.name)
    


    def register(self):
        self.save()


    @staticmethod
    def get_all_products():
        return products.objects.all()
    @staticmethod
    def get_all_products_by_ids(ids):
        return products.objects.filter(id__in=ids)
    
    
    

class signup_form(models.Model):
    name= models.CharField(max_length=50)
    mobile=models.IntegerField()
    place=models.CharField(max_length=50)
    email=models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    confirm_password = models.CharField(max_length=50)

    
    def __str__(self):
        return '{0}'.format(self.name)
    
    def register(self):
        self.save()

    # def isexist(self):
    #     if signup_form.objects.filter(email=self.email):
    #         return True
    #     else:
    #         return False


class login(models.Model):
    name= models.CharField(max_length=50)
    email=models.EmailField(max_length=254)
    password = models.CharField(max_length=50)


    def __str__(self):
        return '{0}'.format(self.name)
    
    def register(self):
        self.save()



class order(models.Model):
    product=models.ForeignKey(products,
                              on_delete=models.CASCADE)
    customer=models.ForeignKey(signup_form,
                              on_delete=models.CASCADE)
    quantity=models.IntegerField(default=1)
    price=models.IntegerField()
    address=models.CharField(max_length=50,default='', blank=True)
    phone=models.CharField(max_length=50,default='', blank=True)
    date=models.DateField(default=datetime.datetime.today)
    status=models.BooleanField(default=False)

    def placeOrder(self):
        self.save()
    @staticmethod
    def get_order_by_customer_id(id):
        return order.objects.filter(customer=id).order_by('date')
