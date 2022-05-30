document.addEventListener('DOMContentLoaded', init, false);
function init() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/public/js/service-worker.js')
            .then((reg) => {
                console.log('service worker registered ---> ', reg);
            }, (err) => {
                console.error('service worker not registered ----> ', err);
            })
    }
}