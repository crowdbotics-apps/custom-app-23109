from django.conf import settings
from django.db import models


class Products(models.Model):
    "Generated Model"
    shoes = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )


# Create your models here.
