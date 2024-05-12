from django.urls import include, path
from rest_framework.routers import DefaultRouter

from orders.api.views import OrderApiViewSet

router = DefaultRouter()
router.register(prefix="orders", viewset=OrderApiViewSet, basename="orders")

urlpatterns = [
    path("", include(router.urls)),
]
