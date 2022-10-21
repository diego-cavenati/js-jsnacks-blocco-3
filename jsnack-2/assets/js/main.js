// JS Snack 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const names = ["DIEGO", "MarcO", "GiACOmo"];

// const namesLowercase = names.forEach(element => {
//     element[element].toLowerCase
//     Element[0].toUpperCase

// });

const namesLowercase = names.map(function(element) {
    return element.toLowerCase();
})

console.log(namesLowercase);

const namesFirstUppercase = namesLowercase.map(function(element) {
    return element[0].toUpperCase() + element.slice(1);
})

console.log(namesFirstUppercase);