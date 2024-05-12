from rest_framework.viewsets import ModelViewSet

from orders.api.serializers import OrderSerializer
from orders.models import Order


class OrderApiViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
