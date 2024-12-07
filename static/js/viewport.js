document.addEventListener('DOMContentLoaded', () => {
    const isInfoCenterPage = document.querySelector('.info-center-page') !== null;
    if (isInfoCenterPage) {
        const viewportMeta = document.createElement('meta');
        viewportMeta.name = 'viewport';
        viewportMeta.content = 'width=1024, initial-scale=0.3, maximum-scale=1, user-scalable=yes';
        document.head.appendChild(viewportMeta);
    }
});
