from django.db import models

# Create your models here.

class Notes(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField(blank=True, null=True)
    color = models.CharField(max_length=16, null=True, blank=True)