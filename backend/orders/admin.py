from django.contrib import admin

# Register your models here.
from orders.models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("table", "product", "status", "created_at", "close")
    search_fields = ("table", "product")
