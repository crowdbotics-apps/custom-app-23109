# Generated by Django 2.2.17 on 2020-12-08 11:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('storeapp', '0002_auto_20201202_1841'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
        migrations.RemoveField(
            model_name='product',
            name='name',
        ),
    ]