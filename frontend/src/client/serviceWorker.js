export const serviceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js', { scope: '/' })
            .then(() => console.log('registered'))
            .catch((error) => console.error('Service worker error', error));
    }
};
