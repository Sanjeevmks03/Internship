# Generated by Django 3.2.12 on 2023-03-23 07:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='courses',
            name='image',
        ),
        migrations.RemoveField(
            model_name='courses',
            name='offer',
        ),
    ]