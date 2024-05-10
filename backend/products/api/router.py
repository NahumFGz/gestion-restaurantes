from django.urls import include, path
from rest_framework.routers import DefaultRouter

from products.api.views import ProductApiViewSet

router = DefaultRouter()
router.register(prefix="products", viewset=ProductApiViewSet, basename="products")

urlpatterns = [
    path("", include(router.urls)),
]
