from rest_framework.serializers import ModelSerializer

from categories.api.serializers import CategorySerializer
from products.models import Product


class ProductSerializer(ModelSerializer):
    categoty_data = CategorySerializer(source="category", read_only=True)

    class Meta:
        model = Product
        fields = (
            "id",
            "title",
            "image",
            "price",
            "active",
            "category",
            "categoty_data",
        )
