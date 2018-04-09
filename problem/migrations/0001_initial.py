# Generated by Django 2.0.3 on 2018-04-09 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='problem',
            fields=[
                ('problemId', models.AutoField(db_index=True, primary_key=True, serialize=False)),
                ('title', models.CharField(db_index=True, default='Default Title', max_length=256)),
                ('content', models.CharField(blank=True, max_length=58000)),
                ('standardInput', models.CharField(blank=True, max_length=1024)),
                ('standardOutput', models.CharField(blank=True, max_length=1024)),
                ('constraints', models.CharField(blank=True, max_length=1024)),
                ('sampleInput', models.CharField(blank=True, max_length=1024)),
                ('sampleOutput', models.CharField(blank=True, max_length=1024)),
                ('sampleExplanation', models.CharField(blank=True, max_length=1024)),
                ('resource', models.CharField(blank=True, max_length=256)),
                ('timeLimit', models.PositiveIntegerField(default=2000)),
                ('memoryLimit', models.PositiveIntegerField(default=128)),
                ('solvedNumber', models.PositiveIntegerField(default=0, editable=False)),
                ('tryNumber', models.PositiveIntegerField(default=0, editable=False)),
                ('specialJudge', models.BooleanField(default=False)),
                ('visible', models.BooleanField(default=False)),
            ],
        ),
    ]
