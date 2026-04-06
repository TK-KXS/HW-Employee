const CACHE_NAME = 'hw-app-v2';
const ASSETS = [
  '/', '/index.html', '/manifest.json', '/icon.png',
  '/LOGO.PNG', '/CARD.JPG', '/QR.JPG',
  '/Profile1.jpg', '/Profile2.jpg', '/Profile3.jpg', '/Profile4.jpg',
  '/Profile5.JPG', '/Profile6.JPG', '/Profile7.jpg', '/Profile8.JPG',
  '/Profile9.JPG', '/Profile10.JPG', '/Profile11.JPG', '/Profile12.JPG',
  '/Profile13.JPG', '/Profile14.JPG'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
