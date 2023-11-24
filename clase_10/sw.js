const animales = [
    'perro',
    'gato',
    'pez',
    'tortuga',
    'conejo',
    'hamster',
    'loro',
    'gallina',
    'caballo',
    'vaca'
];

// self.addEventListener('message', (e) => {
//     console.log('message recieved from main.js');
//     const isInAnimalList = animales.includes(e.data);
//     if(isInAnimalList) {
//         setTimeout(() => {
//             self.postMessage({
//                 status: 'ok',
//                 message: 'animal found'
//             });
//         }, 2000);
//     } else {
//         self.postMessage({
//             status: 'error',
//             message: 'animal not found'
//         });
//     }
// })


self.addEventListener('install', (e) => {
    console.log('service worker instalado');
    caches.open('mi-cache-1').then((cache) => {
        cache.addAll([
            'index.html',
            'main.js'
        ]);
    });
});

self.addEventListener('fetch', (e) => {
    console.log('fetch trigger', e);
    caches.has('mi-cache-1')
    .then(respuesta => {
        caches.open('mi-cache-1')
        .then(cache => {
            cache.match('main.js')
            .then(respuesta => {
                console.log('archivo cacheado', respuesta);
            });
        });
    });
});