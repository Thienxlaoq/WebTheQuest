from django.shortcuts import render, get_object_or_404
from .models import News, Event, Update


def map(request):
    return render(request, 'map.html', {'active_page': 'map'})


def info_center(request):
    section = request.GET.get('section', 'news')  # Определяем активную секцию
    news_list = News.objects.filter(is_visible=True).order_by('-published_date')
    events_list = Event.objects.filter(is_visible=True).order_by('date')
    updates_list = Update.objects.filter(is_visible=True).order_by('-published_date')

    latest_news = news_list.first() if news_list.exists() else None

    return render(request, 'info_center.html', {
        'active_page': 'info_center',
        'news_list': news_list,
        'events_list': events_list,
        'updates_list': updates_list,
        'latest_news': latest_news,
        'active_section': section
    })


def news_detail(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    return render(request, 'news_detail.html', {'news_item': news_item})


def profile(request):
    return render(request, 'profile.html', {'active_page': 'profile'})


def error_page(request, exception=None):
    return render(request, 'error_page.html', {'error': 'Страница не найдена'}, status=404)