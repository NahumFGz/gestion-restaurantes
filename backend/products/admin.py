from django.contrib import admin

from products.models import Product


# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["title", "price", "active", "category"]
    search_fields = ["title"]
    list_filter = ["active", "category"]
