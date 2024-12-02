/**
 * Инициализация переключателя языка.
 */
export function initLanguageSwitch() {
    const languageSwitch = document.querySelector('.language-switch');
    const languageMenu = document.querySelector('.language-menu');

    if (!languageSwitch || !languageMenu) return;

    // Открыть/закрыть меню
    languageSwitch.addEventListener('click', (event) => {
        event.stopPropagation();
        languageSwitch.classList.toggle('active');
    });

    // Выбор языка
    languageMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedLanguage = event.target.getAttribute('data-lang');
            console.log(`Выбранный язык: ${selectedLanguage}`);
            languageSwitch.classList.remove('active');
        }
    });

    // Закрытие меню при клике вне
    document.addEventListener('click', () => {
        languageSwitch.classList.remove('active');
    });
}
