self.addEventListener('install', () => {
  console.log('ACA-Sign App installed')
})

self.addEventListener('activate', () => {
  console.log('ACA-Sign App activated')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})
