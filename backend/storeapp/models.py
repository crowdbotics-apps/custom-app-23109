from django.conf import settings
from django.db import models


class Products(models.Model):
    "Generated Model"
    shoes = models.CharField(
        null=True,
        blank=True,
        max_length=256,
    )
    sneakers = models.ForeignKey(
        "storeapp.Product",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="products_sneakers",
    )


class Product(models.Model):
    "Generated Model"
    price = models.FloatField()


# Create your models here.
