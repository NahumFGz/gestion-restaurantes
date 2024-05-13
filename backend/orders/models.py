from django.db import models

status_choices = (
    ("PENDING", "pending"),
    ("DELIVERED", "delivered"),
)


# Create your models here.
class Order(models.Model):
    table = models.ForeignKey(
        "tables.Table", on_delete=models.SET_NULL, null=True, blank=True
    )
    product = models.ForeignKey(
        "products.Product", on_delete=models.SET_NULL, null=True, blank=True
    )
    payment = models.ForeignKey(
        "payments.Payment", on_delete=models.CASCADE, null=True, blank=True
    )
    status = models.CharField(max_length=50, choices=status_choices)
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)

    def __str__(self):
        return str(self.table)
