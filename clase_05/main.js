// Lista de personas
const peopleList = [
    {
        firstName: 'Matías',
        lastName: 'Quinteros',
        title: 'Mr.',
        age: 23
    },
    {
        firstName: 'Ana',
        lastName: 'González',
        title: 'Ms.',
        age: 30
    },
    {
        firstName: 'Carlos',
        lastName: 'Pérez',
        title: 'Mr.',
        age: 45
    },
    {
        firstName: 'Laura',
        lastName: 'Martínez',
        title: 'Mrs.',
        age: 28
    },
    {
        firstName: 'Juan',
        lastName: 'López',
        title: 'Mr.',
        age: 35
    },
    {
        firstName: 'Sofía',
        lastName: 'Hernández',
        title: 'Ms.',
        age: 26
    },
    {
        firstName: 'Gabriel',
        lastName: 'Ramírez',
        title: 'Mr.',
        age: 40
    },
    {
        firstName: 'María',
        lastName: 'Gómez',
        title: 'Mrs.',
        age: 32
    },
    {
        firstName: 'Alejandro',
        lastName: 'Díaz',
        title: 'Mr.',
        age: 38
    },
    {
        firstName: 'Isabel',
        lastName: 'Torres',
        title: 'Ms.',
        age: 27
    }
];

const valid = true;

const peoplePromise = new Promise((done, reject) => {
    setTimeout(() => {
        if (valid) {
            done(peopleList)
        } else {
            reject({messaje: 'invalid request'});
        }
    }, 2000);
})

peoplePromise.then((people => console.log(people)))

















// const valid = false;

// const generateName = (people) => {
//     return `${people.title} ${people.firstName} ${people.lastName}`;
// }
// const generatePerson = (person) => {
//     const {age, ...other} = person;
//     return {
//         age,
//         name: generateName(other)
//     }
// }


// const peoplePromise = new Promise((done, reject) => {
//     setTimeout(() => {
//         if(valid) {
//             done(peopleList);
//         } else {
//             reject({message: 'invalid request'});
//         }
//     }, 3000);
// });

// peoplePromise
//     .then((people) => people.map(generatePerson))
//     .catch((error) => {
//         console.error(error)
//         return []
//     })
//     .then((people) => console.log(people));