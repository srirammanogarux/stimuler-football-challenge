const CACHE='wc-pwa-v2';
const CORE=['./','./index.html','./day1-conversation.html','./players-data.js',
  './assets/messi-flykiss.gif','./assets/sarah-sad-1.png','./assets/sarah-sad-2.png',
  './assets/stimuler-logo.png','./assets/sarah.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET') return;
  const isHTML = e.request.mode==='navigate' || (e.request.headers.get('accept')||'').includes('text/html');
  if(isHTML){   // network-first so deploys show immediately, fall back to cache offline
    e.respondWith(fetch(e.request).then(res=>{ const cl=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cl)); return res; }).catch(()=>caches.match(e.request).then(h=>h||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=> hit || fetch(e.request).then(res=>{
    try{ const u=new URL(e.request.url); if(res.ok && u.origin===location.origin){ const cl=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cl)); } }catch(_){}
    return res;
  })));
});
