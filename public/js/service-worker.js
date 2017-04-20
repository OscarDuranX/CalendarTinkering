self.addEventListener('install',function(event) {
  console.log('Installing')
})

self.addEventListener('activate',function(event) {
  console.log('Activated service worker')
})

self.addEventListener('fetch',function(event) {
  console.log('prova1')
  const  url = new URL(event.request.url);
  console.log('fetch service worker')
})