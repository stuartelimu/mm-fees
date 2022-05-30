const CACHE_NAME = 'mm-fees-cache';
const toCache = [
    '/',
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(toCache);
            })
            .then(self.skipWaiting())
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match(event.request)
                    })
            })
    )
    console.log('used to intercept requests so we can check for the file or data in cache');
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if(key!== CACHE_NAME) {
                        console.log('[Service Worker] remoing old cache', key);
                        return caches.delete(key);
                    }
                }))
            .then(() => self.clients.claim())
            })
    )
    console.log('this event triggers when the service worker has been activated');
});

