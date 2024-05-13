from django.urls import include, path
from rest_framework.routers import DefaultRouter

from payments.api.views import PaymentViewSet

router = DefaultRouter()
router.register(prefix="payments", viewset=PaymentViewSet, basename="payments")

urlpatterns = [
    path("", include(router.urls)),
]
