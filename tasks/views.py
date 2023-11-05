from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer


# Create your views here.
# Define a view class for handling tasks using viewsets.ModelViewSet, which provides built-in CRUD functionality.
class TaskView(viewsets.ModelViewSet):
    # Specify the serializer class that will be used to convert Task objects to/from JSON.
    serializer_class = TaskSerializer

    # Define the initial queryset, which is set to retrieve all Task objects from the database.
    queryset = Task.objects.all()
