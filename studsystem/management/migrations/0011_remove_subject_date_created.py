# Generated by Django 3.0.4 on 2020-04-19 19:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0010_auto_20200419_1912'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject',
            name='date_created',
        ),
    ]