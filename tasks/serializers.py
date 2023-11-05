from rest_framework import serializers

from .models import Task


# Define a serializer for the Task model.
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # Set the model to be serialized as the Task model.
        model = Task
        # Specify that all fields from the model should be included in the serialization.
        fields = '__all__'
