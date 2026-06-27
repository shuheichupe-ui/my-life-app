const CACHE='my-life-v1';
const ASSETS=['./','/my-life-app/','/my-life-app/index.html','/my-life-app/manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
