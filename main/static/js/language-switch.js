document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const arrowIcon = languageSwitch.querySelector('.arrow-icon');
    const currentLanguage = document.querySelector('.current-language');

    if (!languageSwitch || !languageMenu || !arrowIcon) {
        console.warn('Language switch elements are not fully defined.');
        return;
    }

    const toggleMenu = (isOpen) => {
        languageMenu.hidden = !isOpen;
        languageSwitch.setAttribute('aria-expanded', isOpen);
        arrowIcon.classList.toggle('arrow-rotated', isOpen);
    };

    // Update selected language in UI and store in localStorage
    const updateLanguage = (lang) => {
        const languageText = lang === 'en' ? 'English' : 'Русский';
        currentLanguage.textContent = languageText;
        localStorage.setItem('selectedLanguage', lang);
        console.log(`Language changed to: ${lang}`);
    };

    // Restore saved language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguage(savedLanguage);

    // Handle menu toggle
    languageSwitch.addEventListener('click', (event) => {
        event.stopPropagation();
        const isMenuOpen = !languageMenu.hidden;
        toggleMenu(!isMenuOpen);
    });

    // Handle language selection
    languageMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.dataset.lang;
            updateLanguage(selectedLanguage);
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

    // Accessibility: Handle keyboard navigation
    languageSwitch.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu(languageMenu.hidden);
        }
    });

    languageMenu.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const items = Array.from(languageMenu.querySelectorAll('li'));
            const currentIndex = items.indexOf(document.activeElement);
            const nextIndex =
                event.key === 'ArrowDown'
                    ? (currentIndex + 1) % items.length
                    : (currentIndex - 1 + items.length) % items.length;
            items[nextIndex].focus();
        }
    });
});
