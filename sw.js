self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/twa-external-links-test/sw.js',
      '/twa-external-links-test/',
      '/twa-external-links-test/index.html',
      '/twa-external-links-test/index.js',
      '/twa-external-links-test/style.css',
      '/twa-external-links-test/images/fox1.jpg',
      '/twa-external-links-test/images/fox2.jpg',
      '/twa-external-links-test/images/fox3.jpg',
      '/twa-external-links-test/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
