const fechaActual = new Date();
// El '+' convierte a entero (int)
console.log(+fechaActual);

console.log(fechaActual.getTime());

// Copiar un objeto en otra variable con operadores de texto
const fecha      = new Date();
const copiaFecha = JSON.parse(JSON.stringify(fechaActual));

console.log(`fecha: ${fecha}, copiaFecha: ${copiaFecha}`);

// Copiar propiedades de un objeto en otra variable mediante desestructuración
const objeto     = {a: 'a', b: 'b', c: 'c'};
const {...datos} = objeto;

const copiaObjeto = {
    ...datos
}

console.log(`objeto: ${objeto} copiaObjeto: ${copiaObjeto}`);



