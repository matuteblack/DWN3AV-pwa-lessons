const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo',
        frutas: [
            {
                nombre: 'manzana',
                cantidad: 2,
            },
            {
                nombre: 'pera',
                cantidad: 2,
            },            {
                nombre: 'banana',
                cantidad: 2,
            },            {
                nombre: 'uva',
                cantidad: 2,
            },
        ]
    }
});

console.log(app);