from django.shortcuts import render, get_object_or_404
from .models import News


def map(request):
    return render(request, 'map.html', {'active_page': 'map'})


def info_center(request):
    section = request.GET.get('section', 'news')  # Получение активной секции из параметров
    news_list = News.objects.all().order_by('-published_date')
    latest_news = news_list.first()
    return render(request, 'info_center.html', {
        'active_page': 'info_center',
        'news_list': news_list,
        'latest_news': latest_news,
        'active_section': section
    })

def news_detail(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    return render(request, 'news_detail.html', {'news_item': news_item})


def profile(request):
    return render(request, 'profile.html', {'active_page': 'profile'})

# Обработчик 404 ошибки
def error_page(request, exception=None):
    return render(request, 'error_page.html', {'error': 'Страница не найдена'}, status=404)
