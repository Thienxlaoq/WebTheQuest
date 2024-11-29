document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
  
    let currentIndex = 0;
  
    // Функция для переключения активного кружка
    function changeActiveCircle() {
      // Убираем класс 'active' у всех кружков
      circles.forEach(circle => circle.classList.remove('active'));
      
      // Добавляем класс 'active' к текущему кружку
      circles[currentIndex].classList.add('active');
  
      // Переход к следующему кружку
      currentIndex = (currentIndex + 1) % circles.length;
    }
  
    // Изменение активного кружка каждые 500 мс
    setInterval(changeActiveCircle, 500);
  });
  