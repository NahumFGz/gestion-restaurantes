from django.urls import include, path
from rest_framework import routers

from users.api import views

router = routers.DefaultRouter()
router.register(prefix="users", viewset=views.UserApiViewSet, basename="users")

urlpatterns = [
    path("", include(router.urls)),
]
