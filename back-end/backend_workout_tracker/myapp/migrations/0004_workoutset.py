# Generated by Django 4.2.15 on 2024-08-23 16:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_exercise_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkoutSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workSet', models.IntegerField()),
                ('reps', models.IntegerField()),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sets', to='myapp.exercise')),
            ],
        ),
    ]
