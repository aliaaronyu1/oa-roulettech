from django.db import models

# Create your models here.
class WorkoutSession(models.Model):
    date = models.DateField()
    exercises = models.ManyToManyField('Exercise')

    def __str__(self):
        return f"{self.id} - {self.date}"

class Exercise(models.Model):
    name = models.TextField()
    bodyPart = models.TextField()
    weightType = models.TextField()

    def __str__(self):
        return f"{self.id} - {self.bodyPart} - {self.weightType}"