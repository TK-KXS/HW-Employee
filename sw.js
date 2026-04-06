const CACHE_NAME = 'hw-app-v3';
const BASE = '/HW-Employee';
const ASSETS = [
  BASE + '/', BASE + '/index.html', BASE + '/manifest.json', BASE + '/icon.png',
  BASE + '/LOGO.PNG', BASE + '/CARD.JPG', BASE + '/QR.JPG',
  BASE + '/Profile1.jpg', BASE + '/Profile2.jpg', BASE + '/Profile3.jpg', BASE + '/Profile4.jpg',
  BASE + '/Profile5.JPG', BASE + '/Profile6.JPG', BASE + '/Profile7.jpg', BASE + '/Profile8.JPG',
  BASE + '/Profile9.JPG', BASE + '/Profile10.JPG', BASE + '/Profile11.JPG', BASE + '/Profile12.JPG',
  BASE + '/Profile13.JPG', BASE + '/Profile14.JPG'
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
