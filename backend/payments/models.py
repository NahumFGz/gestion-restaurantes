from django.db import models

PaymentType = (
    ("CARD", "card"),
    ("CASH", "cash"),
    ("OTHER", "other"),
)

StatusPayment = (
    ("PENDING", "pending"),
    ("PAID", "paid"),
    ("CANCELLED", "cancelled"),
)


class Payment(models.Model):
    table = models.ForeignKey("tables.Table", on_delete=models.SET_NULL, null=True)
    total_payment = models.DecimalField(max_digits=10, decimal_places=2)
    payment_type = models.CharField(max_length=255, choices=PaymentType)
    status_payment = models.CharField(max_length=255, choices=StatusPayment)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Payment for table: {self.table}"
