from django.shortcuts import render, get_object_or_404
from .models import News, Event, Update


def map(request):
    return render(request, 'map.html', {'active_page': 'map'})


def info_center(request):
    section = request.GET.get('section', 'news')
    news_list = News.objects.filter(is_visible=True).order_by('-published_date')
    events_list = Event.objects.filter(is_visible=True).order_by('date')
    updates_list = Update.objects.filter(is_visible=True).order_by('-published_date')

    featured_news = News.objects.filter(is_featured=True).first()
    featured_event = Event.objects.filter(is_featured=True).first()
    featured_update = Update.objects.filter(is_featured=True).first()

    featured_item = featured_news or featured_event or featured_update

    return render(request, 'info_center.html', {
        'active_page': 'info_center',
        'news_list': news_list,
        'events_list': events_list,
        'updates_list': updates_list,
        'latest_news': featured_item,
        'active_section': section
    })


def news_detail(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    return render(request, 'news_detail.html', {'news_item': news_item})


def profile(request):
    return render(request, 'profile.html', {'active_page': 'profile'})

def privacy_policy(request):
    return render(request, 'privacy-policy.html')

def error_page(request, exception=None):
    return render(request, 'error_page.html', {'error': 'Страница не найдена'}, status=404)