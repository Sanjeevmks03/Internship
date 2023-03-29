from django.contrib import admin

from course.models import category, login, order, products, signup_form





# Register your models here.
admin.site.register(category)
admin.site.register(products)
admin.site.register(signup_form)
admin.site.register(login)
admin.site.register(order)