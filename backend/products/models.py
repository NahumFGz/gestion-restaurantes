from django.db import models


# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="products/", null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    active = models.BooleanField(default=False)
    category = models.ForeignKey(
        "categories.Category", on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self) -> str:
        return self.title
