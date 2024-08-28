from rest_framework import serializers
from .models import Exercise, WorkoutSession, WorkoutSessionExercise, WorkoutSet

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name']

class WorkoutSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutSet
        fields = ['id', 'workSet', 'reps']

class WorkoutSessionExerciseSerializer(serializers.ModelSerializer):
    exercise = serializers.PrimaryKeyRelatedField(queryset=Exercise.objects.all())
    sets = WorkoutSetSerializer(many=True)

    class Meta:
        model = WorkoutSessionExercise
        fields = ['id', 'exercise', 'sets']

class WorkoutSessionSerializer(serializers.ModelSerializer):
    exercises = WorkoutSessionExerciseSerializer(many=True, required=False)

    class Meta:
        model = WorkoutSession
        fields = ['id', 'date', 'exercises']
    
    
