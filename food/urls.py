from django.urls import path, include
from food.views import FoodViewSet
from rest_framework import routers


food_router = routers.DefaultRouter()
food_router.register(r'food', FoodViewSet)
