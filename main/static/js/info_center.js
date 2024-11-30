document.addEventListener('DOMContentLoaded', () => {
    console.log('Info Center: ready!');

    const getUrlParam = (key) => {
        const params = new URLSearchParams(window.location.search);
        return params.get(key);
    };

    class ContentSwitcher {
        constructor(menuSelector, contentSelector, defaultSection) {
            this.menuButtons = document.querySelectorAll(menuSelector);
            this.contentSections = document.querySelectorAll(contentSelector);
            this.defaultSection = defaultSection;

            if (!this.menuButtons.length || !this.contentSections.length) {
                console.error('Меню или секции для переключения не найдены!');
                return;
            }

            this.init();
        }

        init() {
            const sectionFromUrl = getUrlParam('section') || this.defaultSection;

            this.menuButtons.forEach((button) => {
                const sectionId = button.dataset.section;
                button.addEventListener('click', (e) => {
                    e.preventDefault(); // Предотвращаем стандартное действие, хотя для button это не обязательно
                    this.showContent(sectionId);
                    history.replaceState({}, '', `?section=${sectionId}`);
                });
            });

            this.showContent(sectionFromUrl);
        }

        showContent(sectionId) {
            this.contentSections.forEach((section) => {
                section.style.display = 'none';
            });

            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.style.display = 'block';
            } else {
                console.warn(`Секция с ID '${sectionId}' не найдена.`);
            }

            this.menuButtons.forEach((button) => {
                button.classList.remove('active');
            });

            const activeButton = [...this.menuButtons].find(
                (button) => button.dataset.section === sectionId
            );
            if (activeButton) {
                activeButton.classList.add('active');
            } else {
                console.warn(`Кнопка для секции '${sectionId}' не найдена.`);
            }
        }
    }

    new ContentSwitcher('.menu-button', '.content', 'news');
});
