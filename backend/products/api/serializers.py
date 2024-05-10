from rest_framework.serializers import ModelSerializer, SerializerMethodField

from products.models import Product


class ProductSerializer(ModelSerializer):
    category_data = SerializerMethodField()

    class Meta:
        model = Product
        fields = (
            "id",
            "title",
            "image",
            "price",
            "active",
            "category",
            "category_data",
        )

    def get_category_data(self, obj):
        return {"id": obj.category.id, "title": obj.category.title}
