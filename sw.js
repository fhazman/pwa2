const staticCacheName = ‘my-pwa-static-v1‘;
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "img1.png",
  "img2.png",
  "img3.png",
];

// Cache assets on install
self.addEventListener(‘install‘, event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(assets))
  );
});

// Serve cached assets 
self.addEventListener(‘fetch‘, event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cache if found, else fetch from network
        return response || fetch(event.request);
      })
  );
});

// Clear old caches on activate
self.addEventListener(‘activate‘, event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );  
    })
  );
});