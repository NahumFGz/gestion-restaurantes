from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from tables.api.serializers import TableSerializer
from tables.models import Table


class TableViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = TableSerializer
    queryset = Table.objects.all().order_by("number")
