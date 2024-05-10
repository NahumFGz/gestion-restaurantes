from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet

from products.api.serializers import ProductSerializer
from products.models import Product


class ProductApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    # Filters ...
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["active", "category"]
