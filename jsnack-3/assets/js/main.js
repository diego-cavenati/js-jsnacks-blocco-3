// Js -snack 3

const animals = [
    {
        nome : 'Scoiattolo',
        famiglia : 'Ypsilon',
        classe : 'bho',
    },
    {
        nome : 'Toporagno',
        famiglia : 'Sandero',
        classe : 'esiste?',
    },
    {
        nome : 'Tigre',
        famiglia : 'C3',
        classe : 'mammiferi',
    },
    {
        nome : 'scimmia notturna',
        famiglia : 'Puma',
        classe : 'umani',
    },
    {
        nome : 'Opossum',
        famiglia : '208',
        classe : 'mammiferi',
    },
    {
        nome : 'Pitone',
        famiglia : 'serpenti',
        classe : 'serpenti',
    },
]


const mammiferi = animals.filter((element) => {

    if (element.classe === "mammiferi") {
        return true;
    }
})

console.log(mammiferi);
