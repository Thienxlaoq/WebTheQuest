function shareNews(link) {
  if (navigator.share) {
      // Используем Web Share API
      navigator.share({
          title: 'Check out this news!',
          url: link
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing', error));
  } else {
      // Копируем ссылку в буфер обмена
      navigator.clipboard.writeText(link).then(() => {
          alert('Ссылка скопирована в буфер обмена: ' + link);
      });
  }
}
