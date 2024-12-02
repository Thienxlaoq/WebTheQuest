/**
 * Запуск прогресс-бара.
 * @param {string} progressBarId - ID элемента прогресс-бара.
 * @param {number} targetProgress - Целевое значение прогресса (по умолчанию 70).
 */
export function startProgressBar(progressBarId, targetProgress = 70) {
    const progressElement = document.getElementById(progressBarId);
    if (!progressElement) {
        console.warn(`Прогресс-бар с ID '${progressBarId}' не найден.`);
        return;
    }

    let progress = 0;
    const interval = setInterval(() => {
        if (progress < targetProgress) {
            progress++;
            progressElement.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
        }
    }, 30);
}
