# Generated by Django 3.0.4 on 2020-05-03 12:02

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0004_subject_students'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subject',
            name='students',
            field=django_mysql.models.ListCharField(models.CharField(max_length=50), default=[], max_length=1000, size=6),
        ),
    ]
