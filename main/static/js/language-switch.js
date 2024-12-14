document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const arrowIcon = languageSwitch?.querySelector('.arrow-icon');
    const currentLanguageElement = document.getElementById('current-language');
    
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

    const setLanguage = (lang) => {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        currentLanguageElement.textContent = lang === 'en' ? 'English' : 'Русский';
        applyTranslations(lang);
    };

    const applyTranslations = (lang) => {
        document.querySelector('h1.yellow').textContent = translations[lang].questsTitle;
        document.querySelector('h1.green').textContent = translations[lang].friendsTitle;
    };

    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Toggle menu on click
    languageSwitch.addEventListener('click', (event) => {
        event.stopPropagation();
        const isMenuOpen = languageMenu.classList.contains('language-menu-active');
        languageMenu.classList.toggle('language-menu-active', !isMenuOpen);
        arrowIcon.classList.toggle('arrow-rotated', !isMenuOpen);
    });

    // Handle language selection
    languageMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.dataset.lang;
            setLanguage(selectedLanguage);
            languageMenu.classList.remove('language-menu-active');
            arrowIcon.classList.remove('arrow-rotated');
        }
    });

    // Close menu on click outside
    document.addEventListener('click', () => {
        languageMenu.classList.remove('language-menu-active');
        arrowIcon.classList.remove('arrow-rotated');
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            languageMenu.classList.remove('language-menu-active');
            arrowIcon.classList.remove('arrow-rotated');
        }
    });
});
