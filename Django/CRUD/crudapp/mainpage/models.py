from django.db import models

# Create your models here.
class courses(models.Model):
    title=models.CharField(max_length=100,default='')
    image=models.ImageField(upload_to='media/pics',default='')
    description=models.TextField(default='',max_length=100)
    price=models.IntegerField()
    offer=models.BooleanField(default=False)
    discount=models.IntegerField()