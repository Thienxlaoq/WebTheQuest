from django.shortcuts import render , get_object_or_404

from django.http import HttpResponse
from .models import News, Event, Update

def map(request):
    return render(request, 'map.html', {'active_page': 'map'})

def info_center(request):
    try:
        # Получаем активный раздел (по умолчанию "news")
        section = request.GET.get('section', 'news')

        # Проверяем доступность данных
        news_list = News.objects.filter(is_visible=True).order_by('-published_date') if News.objects.exists() else []
        events_list = Event.objects.filter(is_visible=True).order_by('date') if Event.objects.exists() else []
        updates_list = Update.objects.filter(is_visible=True).order_by('-published_date') if Update.objects.exists() else []

        # Добавляем полные URL для новостей
        for news in news_list:
            if hasattr(news, 'get_absolute_url'):
                news.full_url = request.build_absolute_uri(news.get_absolute_url())
            else:
                news.full_url = '#'  # Заглушка, если метод отсутствует

        # Аналогично для событий и обновлений
        for event in events_list:
            if hasattr(event, 'get_absolute_url'):
                event.full_url = request.build_absolute_uri(event.get_absolute_url())
            else:
                event.full_url = '#'

        for update in updates_list:
            if hasattr(update, 'get_absolute_url'):
                update.full_url = request.build_absolute_uri(update.get_absolute_url())
            else:
                update.full_url = '#'

        # Получение рекомендованных (featured) элементов
        featured_news = News.objects.filter(is_featured=True).first() if News.objects.exists() else None
        featured_event = Event.objects.filter(is_featured=True).first() if Event.objects.exists() else None
        featured_update = Update.objects.filter(is_featured=True).first() if Update.objects.exists() else None

        featured_item = featured_news or featured_event or featured_update

        return render(request, 'info_center.html', {
            'active_page': 'info_center',
            'news_list': news_list,
            'events_list': events_list,
            'updates_list': updates_list,
            'latest_news': featured_item,
            'active_section': section
        })

    except Exception as e:
        # Логируем ошибку и возвращаем сообщение
        return HttpResponse(f"Произошла ошибка: {str(e)}", status=500)


def news_detail(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    return render(request, 'news_detail.html', {'news_item': news_item})

def profile(request):
    return render(request, 'profile.html', {'active_page': 'profile'})

def privacy_policy(request):
    return render(request, 'privacy_policy.html')

def error_page(request, exception=None):
    return render(request, 'error_page.html', {'error': 'Страница не найдена'}, status=404)

def loading_page(request):
    # Отображение загрузочной страницы
    return render(request, 'loading.html')