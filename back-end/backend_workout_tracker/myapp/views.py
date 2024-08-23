from .models import WorkoutSession, Exercise
from rest_framework import viewsets
from .serializers import WorkoutSessionSerializer, ExerciseSerializer

class WorkoutSessionViewSet(viewsets.ModelViewSet):
    queryset = WorkoutSession.objects.all()
    serializer_class = WorkoutSessionSerializer

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer