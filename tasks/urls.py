from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]