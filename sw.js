const CACHE_NAME = 'aves-vistabella-v5';
const FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./media-data.js",
  "./media.json",
  "./media/autillo-male.jpg",
  "./media/avion-male.jpg",
  "./media/carbonero-female.jpg",
  "./media/carbonero-male.jpg",
  "./media/colirrojo-female.jpg",
  "./media/colirrojo-male.jpg",
  "./media/cernicalo-female.jpg",
  "./media/cernicalo-male.jpg",
  "./media/estornino-male.jpg",
  "./media/garcilla-bueyera-male.jpg",
  "./media/grajilla-male.jpg",
  "./media/golondrina-female.jpg",
  "./media/gorrión-female.jpg",
  "./media/gorrión-male.jpg",
  "./media/jilguero-male.jpg",
  "./media/lavandera-female.jpg",
  "./media/mirlo-female.jpg",
  "./media/mirlo-male.jpg",
  "./media/petirrojo.jpg",
  "./media/vencejo-male.jpg",
  "./media/verdecillo-male.jpg",
  "./media/verderon-female.jpg",
  "./media/verderon-male.jpg"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    if (event.request.mode === 'navigate') return caches.match(new URL('./index.html', self.registration.scope));
    return fetch(event.request);
  }));
});
