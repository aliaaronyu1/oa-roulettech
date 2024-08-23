from .models import WorkoutSession, Exercise
from rest_framework import serializers

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class WorkoutSessionSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True)

    class Meta:
        model = WorkoutSession
        fields = '__all__'
