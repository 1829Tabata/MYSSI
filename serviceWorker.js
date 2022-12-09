const raton= "MYSSI"
const assets= [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/nube.png",
  "img/raton.png",
  "img/suelo.png",
  "img/trampilla.png",
  "img/trampillas.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(raton).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })