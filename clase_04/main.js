// timeout integrado
// setTimeout(() => {
//     console.log('...2 segundos después');
// }, 2000);

// timeout armado desde fuera
const tiempo_retraso = 2000;
    // función callback
const action = () => console.log('...3 segundos después');


// App: generar tarjetas de series
console.log('Comienzo de app...');

const series = [
    'vikings',
    'sex education',
    'you',
    'the boys',
    "grey's anatomy"
]

const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

const createParagraph = (string) => `<p>${string}</p>`;

const createCard = (paragraph) =>
`<div>
    <h1>Serie</h1>
    ${paragraph}
</div>`;


// Promesas

const infoServer = new Promise((done) => {
    setTimeout(() => {
        done(series);
    }, tiempo_retraso);
});

infoServer
    // .then(lista => lista.map(
    //     (serie) => capitalize()
    // ))
    .then(lista => lista.map(serie => (capitalize(serie))))
    .then(lista => lista.map(serie => (createParagraph(serie))))
    .then(lista => lista.map(serie => (createCard(serie))))
    .then(lista => console.log(lista.join('')))