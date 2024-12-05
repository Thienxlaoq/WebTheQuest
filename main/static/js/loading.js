document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  let currentIndex = 0;

  // Функция для переключения активного кружка с задержкой
  function changeActiveCircle() {
      circles.forEach(circle => circle.classList.remove('active'));
      circles[currentIndex].classList.add('active');
      currentIndex = (currentIndex + 1) % circles.length;
  }

  // Плавное переключение каждые 500 мс
  setInterval(changeActiveCircle, 500);
});
