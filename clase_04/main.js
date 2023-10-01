// timeout integrado
// setTimeout(() => {
//     console.log('...2 segundos después');
// }, 2000);

// timeout armado desde fuera
const tiempo_retraso = 2000;
    // función callback
const action = () => console.log('...3 segundos después');


// Promesas

console.log('Comienzo de app...');

const infoServer = new Promise((done) => {
    setTimeout(() => {
        done(12);
    }, tiempo_retraso);
});

infoServer
    .then(value => {
        console.log(value);
    })