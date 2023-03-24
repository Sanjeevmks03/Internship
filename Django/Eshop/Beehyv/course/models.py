from django.db import models

# Create your models here.

class category(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return '{0}'.format(self.name)


class products(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField(default="")
    price=models.IntegerField(default=0)
    image=models.ImageField(default='',upload_to='media/uploaded_pics', height_field=None, width_field=None, max_length=None)
    Discount_price=models.IntegerField(default=0)
    offer=models.BooleanField(default=False)
    category=models.ForeignKey("category", on_delete=models.CASCADE)

    def __str__(self):
        return '{0}'.format(self.name)
    

    @staticmethod
    def get_all_products():
        return products.objects.all()




