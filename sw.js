const CACHE_NAME = 'kgh-plus-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// ជំហានដំឡើង៖ រក្សាទុកហ្វាយសំខាន់ៗ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ជំហានទាញយក៖ ឆែកមើល Internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
