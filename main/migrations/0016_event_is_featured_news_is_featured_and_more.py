# Generated by Django 5.1.3 on 2024-11-30 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_alter_event_event_content_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='is_featured',
            field=models.BooleanField(default=False, verbose_name='Отображать в главном блоке'),
        ),
        migrations.AddField(
            model_name='news',
            name='is_featured',
            field=models.BooleanField(default=False, verbose_name='Отображать в главном блоке'),
        ),
        migrations.AddField(
            model_name='update',
            name='is_featured',
            field=models.BooleanField(default=False, verbose_name='Отображать в главном блоке'),
        ),
    ]
