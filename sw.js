var CACHE = 'network-or-cache';

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');

  evt.waitUntil(precache());
});

self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');

  evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
    return fromCache(evt.request);
  }));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
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
  });
}

function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {
    var timeoutId = setTimeout(reject, timeout);

    fetch(request).then(function (response) {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

