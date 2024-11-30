# Generated by Django 5.1.3 on 2024-11-30 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_remove_event_event_content_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='image',
        ),
        migrations.RemoveField(
            model_name='update',
            name='icon',
        ),
        migrations.AddField(
            model_name='event',
            name='event_content_image',
            field=models.ImageField(null=True, upload_to='event_imgs', verbose_name='Фон для Events'),
        ),
        migrations.AddField(
            model_name='update',
            name='update_content_image',
            field=models.ImageField(null=True, upload_to='update_imgs', verbose_name='Фон для блока новости'),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_image',
            field=models.ImageField(null=True, upload_to='event-imgs', verbose_name='Изображение для Events'),
        ),
        migrations.AlterField(
            model_name='news',
            name='content_image',
            field=models.ImageField(null=True, upload_to='content_imgs', verbose_name='Фон для блока новости'),
        ),
        migrations.AlterField(
            model_name='update',
            name='update_image',
            field=models.ImageField(null=True, upload_to='update-content-imgs', verbose_name='Изображение для новости'),
        ),
    ]
