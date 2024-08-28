from django.db import models

class WorkoutSession(models.Model):
    date = models.DateField()

    def __str__(self):
        return f"{self.id} - {self.date}"

class Exercise(models.Model):
    name = models.TextField()

    def __str__(self):
        return f"{self.id} - {self.name}"

class WorkoutSessionExercise(models.Model):
    workout_session = models.ForeignKey(WorkoutSession, on_delete=models.CASCADE, related_name='session_exercises')
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name='session_exercises')

    def __str__(self):
        return f"WorkoutSession: {self.workout_session.id}, Exercise: {self.exercise.name}"

class WorkoutSet(models.Model):
    session_exercise = models.ForeignKey(WorkoutSessionExercise, on_delete=models.CASCADE, related_name='sets')
    workSet = models.IntegerField()
    reps = models.IntegerField()

    def __str__(self):
        return f"Exercise: {self.session_exercise.exercise.name}, Set: {self.workSet}, Reps: {self.reps}, WorkoutSession: {self.session_exercise.workout_session.id}"
