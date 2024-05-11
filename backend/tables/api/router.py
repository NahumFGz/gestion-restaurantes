from django.urls import include, path
from rest_framework.routers import DefaultRouter

from tables.api.views import TableViewSet

router = DefaultRouter()
router.register(prefix="tables", viewset=TableViewSet, basename="tables")

urlpatterns = [
    path("", include(router.urls)),
]
