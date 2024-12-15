document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const arrowIcon = languageSwitch?.querySelector('.arrow-icon');

    // Проверяем наличие основных элементов меню
    if (!languageSwitch || !languageMenu || !arrowIcon) {
        console.warn('Language switch elements are not fully defined on this page.');
        return; // Прерываем выполнение, если меню недоступно
    }

    // Переводы для всех страниц
    const translations = {
        en: {
            questsTitle: 'Quests around the world!',
            friendsTitle: 'Meet with friends and play together!',
        },
        ru: {
            questsTitle: 'Квесты по всему миру!',
            friendsTitle: 'Встречайтесь с друзьями и играйте вместе!',
        },
    };

    // Универсальная функция для перевода текста
    const applyTranslations = (lang) => {
        const elementsToTranslate = [
            { selector: 'h1.yellow', key: 'questsTitle' },
            { selector: 'h1.green', key: 'friendsTitle' },
        ];

        elementsToTranslate.forEach(({ selector, key }) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = translations[lang][key];
            } else {
                console.info(`Translation skipped: Element ${selector} not found in the DOM.`);
            }
        });
    };

    // Устанавливаем язык и сохраняем в localStorage
    const setLanguage = (lang) => {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        applyTranslations(lang);
    };

    // Открытие/закрытие меню
    const toggleMenu = (isOpen) => {
        languageMenu.classList.toggle('language-menu-active', isOpen);
        arrowIcon.classList.toggle('arrow-rotated', isOpen);
    };

    // Загрузка языка при старте
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Обработчик клика для открытия меню
    languageSwitch.addEventListener('click', (event) => {
        event.stopPropagation();
        const isMenuOpen = languageMenu.classList.contains('language-menu-active');
        toggleMenu(!isMenuOpen);
    });

    // Обработчик выбора языка
    languageMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.dataset.lang;
            setLanguage(selectedLanguage);
            toggleMenu(false); // Закрываем меню после выбора
        }
    });

    // Закрытие меню по клику вне области
    document.addEventListener('click', () => toggleMenu(false));

    // Закрытие меню по клавише Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            toggleMenu(false);
        }
    });
});
