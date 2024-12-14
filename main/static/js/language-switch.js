document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const arrowIcon = languageSwitch?.querySelector('.arrow-icon');

    if (!languageSwitch || !languageMenu || !arrowIcon) {
        console.warn('Language switch elements are not fully defined.');
        return;
    }

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
        applyTranslations(lang);
    };

    const applyTranslations = (lang) => {
        const questsTitleElement = document.querySelector('h1.yellow');
        const friendsTitleElement = document.querySelector('h1.green');
        
        if (questsTitleElement) {
            questsTitleElement.textContent = translations[lang].questsTitle;
        } else {
            console.warn('Element h1.yellow not found in the DOM.');
        }
    
        if (friendsTitleElement) {
            friendsTitleElement.textContent = translations[lang].friendsTitle;
        } else {
            console.warn('Element h1.green not found in the DOM.');
        }
    };
    

    const toggleMenu = (isOpen) => {
        languageMenu.classList.toggle('language-menu-active', isOpen);
        arrowIcon.classList.toggle('arrow-rotated', isOpen);
    };

    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Toggle menu on click
    languageSwitch.addEventListener('click', (event) => {
        event.stopPropagation();
        const isMenuOpen = languageMenu.classList.contains('language-menu-active');
        toggleMenu(!isMenuOpen);
    });

    // Handle language selection
    languageMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.dataset.lang;
            setLanguage(selectedLanguage);
            toggleMenu(false); // Close menu after selection
        }
    });

    // Close menu on click outside
    document.addEventListener('click', () => toggleMenu(false));

    // Close menu on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            toggleMenu(false);
        }
    });
});
