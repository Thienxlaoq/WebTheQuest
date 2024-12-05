document.addEventListener('DOMContentLoaded', () => {
    console.log('The Quest ready!');

    // Утилита для привязки модального окна
    function setupModal(modalId, triggerSelector, closeSelector, onOpenCallback = null) {
        const modal = document.getElementById(modalId);
        const trigger = document.querySelector(triggerSelector);
        const closeButton = modal?.querySelector(closeSelector);

        if (!modal || !trigger || !closeButton) {
            console.warn(`Не удалось привязать модальное окно: modalId=${modalId}`);
            return;
        }

        trigger.addEventListener('click', () => {
            // Скрываем другие модальные окна
            document.querySelectorAll('.modal').forEach((modalElem) => {
                modalElem.style.display = 'none';
                modalElem.style.zIndex = ''; // Сбрасываем z-index
            });
        
            // Показываем текущее окно
            modal.style.display = 'flex';
            modal.style.zIndex = '10001'; // Самый верхний слой
            if (typeof onOpenCallback === 'function') {
                onOpenCallback();
            }
        });
        

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (event) => {
            if (!event.target.closest('.modal-content') && event.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }

    setupModal(
        'overlay',
        '.our-socials-btn', // Кнопка "OUR SOCIALS"
        '#close-block'
    );

    setupModal(
        'overlaytwo',
        '.get-the-quest', // Кнопка "Get The Quest"
        '#close-block-two',
        () => startProgressBar('progress') // Коллбек для прогресс-бара
    );

    // Новый вызов для ссылки "social networks"
    setupModal(
        'overlay',
        '#social-networks-link', // ID ссылки
        '#close-block'
    );

    // Функция для прогресс-бара
function startProgressBar(progressId) {
    const progressBar = document.getElementById(progressId);

    if (!progressBar) {
        console.warn('Progress bar not found.');
        return;
    }

    // Проверяем, если анимация уже идёт
    if (progressBar.dataset.isAnimating === 'true') {
        console.log('Progress bar is already animating.');
        return;
    }

    progressBar.dataset.isAnimating = 'true'; // Отмечаем, что анимация началась

    let position = parseFloat(progressBar.dataset.position) || -100; // Сохраняем текущее положение
    const progressBarWidth = 100; // Ширина полоски в процентах

    const animateProgress = () => {
        progressBar.style.transition = 'none';
        progressBar.style.left = `${position}%`;

        setTimeout(() => {
            progressBar.style.transition = 'left 2s linear'; // Плавное движение
            progressBar.style.left = `${100}%`; // Движение направо
            position = 100; // Обновляем положение
            progressBar.dataset.position = position; // Сохраняем позицию
        }, 50);

        setTimeout(() => {
            position = -progressBarWidth; // Перезапуск с начальной позиции
            progressBar.dataset.position = position; // Сохраняем начальную позицию
            animateProgress();
        }, 2050); // Общая длительность движения
    };

    animateProgress();
}

});



