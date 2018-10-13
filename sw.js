self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/soma-check-in/',
        '/soma-check-in/index.html',
        '/soma-check-in/images/icons/icon-128x128.png',
        '/soma-check-in/images/icons/icon-144x144.png',
        '/soma-check-in/images/icons/icon-152x152.png',
        '/soma-check-in/images/icons/icon-192x192.png',
        '/soma-check-in/images/icons/icon-384x384.png',
        '/soma-check-in/images/icons/icon-512x512.png',
        '/soma-check-in/images/icons/icon-72x72.png',
        '/soma-check-in/images/icons/icon-96x96.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
