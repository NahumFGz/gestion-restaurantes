from rest_framework.serializers import ModelSerializer

from orders.models import Order
from payments.api.serializers import PaymentSerializer
from products.api.serializers import ProductSerializer
from tables.api.serializers import TableSerializer


class OrderSerializer(ModelSerializer):
    product_data = ProductSerializer(source="product", read_only=True)
    table_data = TableSerializer(source="table", read_only=True)
    payment_data = PaymentSerializer(source="payment", read_only=True)

    class Meta:
        model = Order
        fields = (
            "id",
            "status",
            "table",
            "table_data",
            "product",
            "product_data",
            "close",
            "created_at",
            "payment_data",
        )
