
// Crear objeto a partir de una clase, usando setters
const primerSerie = new Serie;
primerSerie.setTitle('You');
primerSerie.setYear(2019);

console.log(primerSerie);

// Crear objeto a partir de una clase, usando su método constructor
const vikings = new Serie('Vikings', 2023);
console.log(vikings);



// Iniciar SeriesApp
const app = new SeriesApp(); 

app.addSerie(new Serie('Vikings', 2020));
app.addSerie(new Serie('You', 2019));
app.addSerie(new Serie('Sex Education', 2021));

const contenedor = document.getElementById('contenedor');

contenedor.innerHTML = app.generarLista()