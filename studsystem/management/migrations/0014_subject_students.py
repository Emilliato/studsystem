# Generated by Django 3.0.4 on 2020-04-19 19:21

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0013_remove_subject_students'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='students',
            field=django_mysql.models.ListCharField(models.IntegerField(), default=[], max_length=110, size=6),
        ),
    ]
