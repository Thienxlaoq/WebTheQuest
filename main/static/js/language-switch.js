
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');
    const arrowIcon = languageSwitch?.querySelector('.arrow-icon');

    if (!languageSwitch || !languageMenu || !arrowIcon) {
        console.warn('Language switch elements are not fully defined.');
        return;
    }

    const toggleMenu = (isOpen) => {
        languageMenu.classList.toggle('language-menu-active', isOpen);
        arrowIcon.classList.toggle('arrow-rotated', isOpen);
    };

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
            console.log(`Selected language: ${selectedLanguage}`);
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
