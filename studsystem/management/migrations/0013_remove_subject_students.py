# Generated by Django 3.0.4 on 2020-04-19 19:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0012_subject_date_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject',
            name='students',
        ),
    ]
