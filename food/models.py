from django.db import models


class Food(models.Model):
    title = models.CharField(max_length=128)
    link = models.CharField(max_length=128)
    image = models.ImageField()
