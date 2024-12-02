// script.js
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
            modal.style.display = 'flex';
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
        '.our-socials-btn',
        '#close-block'
    );

    setupModal(
        'overlaytwo',
        '.get-the-quest',
        '#close-block-two',
        () => startProgressBar('progress')
    );

    // Функция для прогресс-бара
    function startProgressBar(progressId) {
        const progressBar = document.getElementById(progressId);

        if (!progressBar) {
            console.warn('Progress bar not found.');
            return;
        }

        let position = -100; // Стартовая позиция за пределами слева
        const progressBarWidth = 100; // Ширина полоски в процентах

        const animateProgress = () => {
            progressBar.style.transition = 'none';
            progressBar.style.left = `${position}%`;

            setTimeout(() => {
                progressBar.style.transition = 'left 2s linear'; // Плавное движение
                progressBar.style.left = `${100}%`; // Движение направо
            }, 50);

            setTimeout(() => {
                position = -progressBarWidth; // Перезапуск с начальной позиции
                animateProgress();
            }, 2050); // Общая длительность движения
        };

        animateProgress();
    }

    // Инициализация переключателя языка
    function initLanguageSwitch() {
        const languageSwitch = document.querySelector('.language-switch');
        const languageMenu = document.querySelector('.language-menu');
        const arrowIcon = languageSwitch?.querySelector('.arrow-icon');

        if (!languageSwitch || !languageMenu) {
            console.warn('Language switch or menu not found.');
            return;
        }

        languageSwitch.addEventListener('click', (event) => {
            event.stopPropagation();
            languageMenu.classList.toggle('language-menu-active');
            arrowIcon?.classList.toggle('arrow-rotated');
        });

        languageMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const selectedLanguage = event.target.getAttribute('data-lang');
                console.log(`Selected language: ${selectedLanguage}`);
                languageMenu.classList.remove('language-menu-active');
                arrowIcon?.classList.remove('arrow-rotated');
            }
        });

        document.addEventListener('click', () => {
            languageMenu.classList.remove('language-menu-active');
            arrowIcon?.classList.remove('arrow-rotated');
        });
    }

    initLanguageSwitch();
});




