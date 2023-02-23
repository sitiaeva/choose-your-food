from food.models import Food
from rest_framework import viewsets

from food.serializers import FoodSerializer


# ViewSets define the view behavior.
class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
