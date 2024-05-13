from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from payments.api.serializers import PaymentSerializer
from payments.models import Payment


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]
