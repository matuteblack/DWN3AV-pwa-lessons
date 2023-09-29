const peopleList = [
    {
        firstName: 'Matías',
        lastName: 'Quinteros',
        title: 'Mr.',
        age: 23
    },
    {
        firstName: 'Fernando',
        lastName: 'Aveledo',
        title: 'Mr.',
        age: 23
    },
    {
        firstName: 'Clara',
        lastName: 'Jorge',
        title: 'Mrs.',
        age: 24
    }
];

const valid = false;

const generateName = (people) => {
    return `${people.title} ${people.firstName} ${people.lastName}`;
}
const generatePerson = (person) => {
    const {age, ...other} = person;
    return {
        age,
        name: generateName(other)
    }
}


const peoplePromise = new Promise((done, reject) => {
    setTimeout(() => {
        if(valid) {
            done(peopleList);
        } else {
            reject({message: 'invalid request'});
        }
    }, 3000);
});

peoplePromise
    .then((people) => people.map(generatePerson))
    .catch((error) => {
        console.error(error)
        return []
    })
    .then((people) => console.log(people));