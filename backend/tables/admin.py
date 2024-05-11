from django.contrib import admin

# Register your models here.
from tables.models import Table


@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ("number",)
    search_fields = ("number",)
    list_filter = ("number",)
    ordering = ("number",)
