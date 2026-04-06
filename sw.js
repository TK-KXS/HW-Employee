const CACHE_NAME = 'hw-app-v5';
const BASE = '/HW-Employee';
const ASSETS = [
  BASE + '/', BASE + '/index.html', BASE + '/manifest.json', BASE + '/icon.png',
  BASE + '/LOGO.PNG', BASE + '/CARD.JPG', BASE + '/QR.JPG',
  BASE + '/Profile1.jpg', BASE + '/Profile2.jpg', BASE + '/Profile3.jpg',
  BASE + '/Profile4.jpg', BASE + '/Profile5.jpg', BASE + '/Profile6.jpg',
  BASE + '/Profile7.jpg', BASE + '/Profile8.jpg', BASE + '/Profile9.jpg',
  BASE + '/Profile10.jpg', BASE + '/Profile11.jpg', BASE + '/Profile12.jpg',
  BASE + '/Profile13.jpg', BASE + '/Profile14.jpg', BASE + '/Profile15.jpg'
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
