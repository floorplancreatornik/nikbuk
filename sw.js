self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

// Minimal fetch handler; everything goes to network for now.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});