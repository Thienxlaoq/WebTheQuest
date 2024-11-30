# Generated by Django 5.1.3 on 2024-11-30 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_blog_content_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, verbose_name='Описание')),
                ('background_image', models.ImageField(null=True, upload_to='backgrounds_imgs', verbose_name='Изображение для новости')),
                ('content_image', models.ImageField(null=True, upload_to='content_imgs', verbose_name='Изображение для блока новости')),
                ('published_date', models.DateField(auto_now_add=True, verbose_name='Дата публикации')),
            ],
        ),
        migrations.DeleteModel(
            name='Blog',
        ),
    ]