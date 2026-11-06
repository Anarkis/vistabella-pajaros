const CACHE_NAME = 'aves-vistabella-v2';
const FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./media-data.js",
  "./media.json",
  "./media/autillo-canto.mp3",
  "./media/autillo-male.jpg",
  "./media/avion-canto.ogg",
  "./media/avion-male.jpg",
  "./media/carbonero-canto.ogg",
  "./media/carbonero-female.jpg",
  "./media/carbonero-male.jpg",
  "./media/cernicalo-canto.mp3",
  "./media/cernicalo-female.jpg",
  "./media/cernicalo-male.jpg",
  "./media/estornino-canto.mp3",
  "./media/estornino-male.jpg",
  "./media/golondrina-canto.ogg",
  "./media/golondrina-female.jpg",
  "./media/gorrión-canto.ogg",
  "./media/gorrión-female.jpg",
  "./media/gorrión-male.jpg",
  "./media/jilguero-canto.mp3",
  "./media/jilguero-male.jpg",
  "./media/lavandera-canto.mp3",
  "./media/lavandera-female.jpg",
  "./media/mirlo-canto.ogg",
  "./media/mirlo-female.jpg",
  "./media/mirlo-male.jpg",
  "./media/vencejo-canto.mp3",
  "./media/vencejo-male.jpg",
  "./media/verdecillo-canto.mp3",
  "./media/verdecillo-male.jpg",
  "./media/verderon-canto.ogg",
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
