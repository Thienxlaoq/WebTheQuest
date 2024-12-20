from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.loading_page, name='loading_page'),  # Новый маршрут для загрузки
    path('map/', views.map, name='map'),
    path('info_center/', views.info_center, name='info_center'),
    path('profile/', views.profile, name='profile'),
    path('news/<int:pk>/', views.news_detail, name='news_detail'),
    path('news/', views.info_center, name='news_list'),
    path('privacy_policy/', views.privacy_policy, name='privacy_policy'),
    path('socials/', views.socials_page, name='socials_page'),
    path('jobs/', views.jobs_page, name='jobs_page'),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Настройка обработчика 404 ошибки
handler404 = 'main.views.error_page'
