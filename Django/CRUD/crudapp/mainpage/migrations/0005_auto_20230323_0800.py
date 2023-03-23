# Generated by Django 3.2.12 on 2023-03-23 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0004_courses_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='description',
            field=models.TextField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='courses',
            name='image',
            field=models.ImageField(default='', upload_to='media/pics'),
        ),
    ]
