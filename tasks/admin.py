from django.contrib import admin

from .models import Task

# Register your models here.

admin.site.register(Task)
# This code registers the Task model with the Django admin interface,
# allowing to manage tasks from the admin panel.