// Js -snack 1
/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, 
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca : 'Fiat',
        modello : 'Panda',
        alimentazione : 'Metano',
    },
    {
        marca : 'Lancia',
        modello : 'Ypsilon',
        alimentazione : 'Elettrico',
    },
    {
        marca : 'Dacia',
        modello : 'Sandero',
        alimentazione : 'Diesel',
    },
    {
        marca : 'Citroen',
        modello : 'C3',
        alimentazione : 'Benzina',
    },
    {
        marca : 'Ford',
        modello : 'Puma',
        alimentazione : 'Gpl',
    },
    {
        marca : 'Peugeot',
        modello : '208',
        alimentazione : 'Metano',
    },
    {
        marca : 'Jeep',
        modello : 'Renegade',
        alimentazione : 'Benzina',
    },
    {
        marca : 'Renault',
        modello : 'Capture',
        alimentazione : 'Gpl',
    },
    {
        marca : 'Fiat',
        modello : '500x',
        alimentazione : 'Diesel',
    },
    {
        marca : 'Toyota',
        modello : 'Yaris',
        alimentazione : 'Elettrico',
    },
]


const benzina = cars.filter((element) => {

    if (element.alimentazione === "Benzina") {
        return true;
    }

    return false;
})

console.log(benzina);

const diesel = cars.filter((element) => {

    if (element.alimentazione === "Diesel") {
        return true;
    }

    return false;
})

console.log(diesel);

const otherAlimentation = cars.filter((element) => {

    if (element.alimentazione !== diesel || element.alimentazione !== benzina) {
        return true;
    }
    
    return false;

})

console.log(otherAlimentation);
