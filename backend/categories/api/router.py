from django.urls import include, path
from rest_framework.routers import DefaultRouter

from categories.api.views import CategoryViewSet

router = DefaultRouter()
router.register(prefix="categories", viewset=CategoryViewSet, basename="categories")


urlpatterns = [
    path("", include(router.urls)),
]
