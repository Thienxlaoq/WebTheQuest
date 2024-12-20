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
            questsDescription: 'Create your character and start an epic journey: explore locations worldwide, complete unique quests, and uncover hidden mysteries.',
            friendsDescription: 'Discover the secrets and hidden places you never knew existed. Join others in exciting quests for unforgettable experiences...',
            questsHashtags: ['Physical activity', 'Worldwide', 'Social interactions'],
            friendsHashtags: ['Adventure', 'Teamwork', 'Discovery']
        },
        ru: {
            questsTitle: 'Квесты по всему миру!',
            friendsTitle: 'Встречайтесь с друзьями и играйте вместе!',
            questsDescription: 'Создай своего персонажа и начни увлекательное путешествие: исследуй разнообразные места по всему миру, выполняй уникальные задания и раскрывай спрятанные тайны.',
            friendsDescription: 'Открой секреты и скрытые места, о которых ты даже не подозревал. Присоединяйся к другим игрокам в увлекательных квестах для незабываемых впечатлений...',
            questsHashtags: ['Физическая активность', 'По всему миру', 'Социальные взаимодействия'],
            friendsHashtags: ['Приключения', 'Командная работа', 'Открытия']
        }
    };

    // Универсальная функция для перевода текста
    const applyTranslations = (lang) => {
        const elementsToTranslate = [
            { selector: 'h1.yellow', key: 'questsTitle' },
            { selector: 'h1.green', key: 'friendsTitle' },
            { selector: '.block.quests p', key: 'questsDescription' },
            { selector: '.block.friends p', key: 'friendsDescription' },
        ];

        // Перевод текста
        elementsToTranslate.forEach(({ selector, key }) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = translations[lang][key];

                // Если язык русский, добавляем класс .small-font только для длинного текста
                if (lang === 'ru' && selector.includes('p')) {
                    element.classList.add('small-font');
                } else if (selector.includes('p')) {
                    element.classList.remove('small-font');
                }
            } else {
                console.info(`Translation skipped: Element ${selector} not found in the DOM.`);
            }
        });

        // Перевод хэштегов для квестов
        const questsHashtags = document.querySelectorAll('.block.quests .hashtags p');
        questsHashtags.forEach((el, index) => {
            el.textContent = translations[lang].questsHashtags[index];
        });

        // Перевод хэштегов для друзей
        const friendsHashtags = document.querySelectorAll('.block.friends .hashtags p');
        friendsHashtags.forEach((el, index) => {
            el.textContent = translations[lang].friendsHashtags[index];
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


