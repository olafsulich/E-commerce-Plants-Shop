/* eslint-disable */
self.addEventListener('install', function(event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.addAll(['/']);
    }),
  );
});

self.addEventListener('activate', function() {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) {
        return res;
      }
      return fetch(event.request);
    }),
  );
});
