const CACHE_NAME = "alzen-cache-v1";
const ASSETS = [
  "./",
  "Men%20haqida/logo.png",
  "Men%20haqida/men%20haqimda.png",
  "Xizmat%20itlari%20turlari/Bloodhound%20uchun/image.png",
  "Xizmat%20itlari%20turlari/Boxer/image.png",
  "Xizmat%20itlari%20turlari/Giant%20Schnauzer/image.png",
  "Xizmat%20itlari%20turlari/akita.html",
  "Xizmat%20itlari%20turlari/belgiyalik-malinua.html",
  "Xizmat%20itlari%20turlari/bloodhound.html",
  "Xizmat%20itlari%20turlari/boxer.html",
  "Xizmat%20itlari%20turlari/cane-corso.html",
  "Xizmat%20itlari%20turlari/doberman.html",
  "Xizmat%20itlari%20turlari/giant-schnauzer.html",
  "Xizmat%20itlari%20turlari/index.html",
  "Xizmat%20itlari%20turlari/lablardor.html",
  "Xizmat%20itlari%20turlari/nemis-ovcharkasi.html",
  "Xizmat%20itlari%20turlari/rottweiler.html",
  "Xizmat%20itlari%20turlari/styles.css",
  "about.html",
  "bosh%20sahifa%20uchun/bosh%20sahifa%20uchun.png",
  "guide.html",
  "icons/icon-128.png",
  "icons/icon-144.png",
  "icons/icon-152.png",
  "icons/icon-192.png",
  "icons/icon-256.png",
  "icons/icon-384.png",
  "icons/icon-48.png",
  "icons/icon-512.png",
  "icons/icon-72.png",
  "icons/icon-96.png",
  "icons/icon-maskable-512.png",
  "index.html",
  "manifest.json",
  "mashqlar.html",
  "mmk.html",
  "news.html",
  "ovqatlanish.html",
  "parvarish.html",
  "script.js",
  "styles.css",
  "turlari.html",
  "xavfsizlik.html"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).catch((err) => {
      console.warn("Ba'zi fayllarni keshlab bo'lmadi:", err);
    }))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
