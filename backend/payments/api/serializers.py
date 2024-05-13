from rest_framework.serializers import ModelSerializer

from payments.models import Payment


class PaymentSerializer(ModelSerializer):
    class Meta:
        model = Payment
        fields = (
            "id",
            "table",
            "total_payment",
            "payment_type",
            "status_payment",
            "created_at",
            "updated_at",
        )
