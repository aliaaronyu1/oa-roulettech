from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import WorkoutSession, Exercise
from .serializers import WorkoutSessionSerializer, ExerciseSerializer


class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

    @api_view(['POST'])
    def create_exercise(request):
        serializer = ExerciseSerializer(date=request.data)
        exercise = serializer.save()
        return Response({'id': exercise.id, 'name': exercise.name}, status=201)

class WorkoutSessionViewSet(viewsets.ModelViewSet):
    queryset = WorkoutSession.objects.all()
    serializer_class = WorkoutSessionSerializer
    
    @api_view(['POST'])
    def create_workout_session(request):
        serializer = WorkoutSessionSerializer(data=request.data)
        exercise = serializer.save()
         

        
