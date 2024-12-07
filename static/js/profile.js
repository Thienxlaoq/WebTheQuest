// profile.js

document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".block");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentIndex = 0;

    // Обновляет активный блок
    const updateActiveBlock = () => {
        blocks.forEach((block, index) => {
            block.classList.toggle("active", index === currentIndex);
        });
    };

    // Обработчик для левой стрелки
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + blocks.length) % blocks.length;
        updateActiveBlock();
    });

    // Обработчик для правой стрелки
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % blocks.length;
        updateActiveBlock();
    });

    // Устанавливаем начальное состояние
    updateActiveBlock();
});
