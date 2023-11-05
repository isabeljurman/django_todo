from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

# Create a default router instance to manage API endpoints.
router = routers.DefaultRouter()

# Register a route for 'tasks' and associate it with the 'TaskView' view.
router.register(r'tasks', views.TaskView)

# Define the URL patterns for the application.
urlpatterns = [
    # Include the router's URLs under the 'api/v1/' path.
    path('api/v1/', include(router.urls)),

    # Include API documentation using the 'include_docs_urls' function with the title 'To do API'.
    path('docs/', include_docs_urls(title='Todo API')),
]
