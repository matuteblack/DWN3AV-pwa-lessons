// timeout integrado
setTimeout(() => {
    console.log('...2 segundos después');
}, 2000);

// timeout armado desde fuera
const tiempo_retraso = 3000;
    // función callback
const action = () => console.log('...3 segundos después');

setTimeout(action, tiempo_retraso);

