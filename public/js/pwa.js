// document.addEventListener('DOMContentLoaded', init, false);
// function init() {
//     if('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/public/js/service-worker.js')
//             .then((reg) => {
//                 console.log('service worker registered ---> ', reg);
//             }, (err) => {
//                 console.error('service worker not registered ----> ', err);
//             })
//     }
// }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./public/js/service-worker.js');

    navigator.serviceWorker.ready.then(registration => {
        registration.active.onerror = (event) => {
          console.log('An error occurred in the service worker!');
        };
      });
    
}