console.log('working');
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((registration) => {
        console.log('service worker registrado -', registration);
    })
    .catch((error) => {
        console.log('service worker no registrado -', error);
    });
}

const card_button = document.getElementById('card_button');
card_button.addEventListener('click', () => {
    console.log('tarjeta clickeada');
})