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

const generarNombre = (person) => {
    return `${person.title} ${person.firstName} ${person.lastName}`
}

const crearPersona = (person) => {
    const {age, ...other} = person;
    return {
        age,
        name: generarNombre(other)
    }
}

const traerDatosDeAPI = () => {
    const url = "https://randomuser.me/api/?results=10";
    return fetch(url)
            .then(datos => datos.json())
            .then(({results}) => results)
            .then(results => results.map((persona) => {
                const {name, dob} = persona;
                return {name, dob}
            }))
            .then(results => results.map((persona) => {
                const {name, dob} = persona;
                return {
                    age: dob.age,
                    firstName: name.first,
                    lastName: name.last,
                    title: name.title
                }
            }))
    }

const peoplePromise = new Promise((done, reject) => {
    setTimeout(() => {
        if (valid) {
            done(peopleList)
        } else {
            reject({messaje: 'invalid request'});
        }
    }, 1000);
})

traerDatosDeAPI()
    // .then((people) => people.map(crearPersona))
    .then(people => console.log(people))
    .catch((error) => {
        console.error(error);
        return [{firstName: 'User', lastName: 'Name', age: 21}]
    })