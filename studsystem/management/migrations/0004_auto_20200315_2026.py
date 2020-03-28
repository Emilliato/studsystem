# Generated by Django 3.0.3 on 2020-03-15 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0003_auto_20200222_1635'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='parentdetails',
            name='student_details',
        ),
        migrations.RemoveField(
            model_name='studentaddress',
            name='student_details',
        ),
        migrations.AddField(
            model_name='parentdetails',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='management.Student'),
        ),
        migrations.AddField(
            model_name='studentaddress',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='management.Student'),
            preserve_default=False,
        ),
    ]