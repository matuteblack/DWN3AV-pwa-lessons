const persona = {
    firstName: 'Matías',
    lastName: 'Quinteros',
    age: 23,

    getFirstName: function () {
        return this.firstName;
    },
    setFirstName: function (newFirstName) {
        this.firstName = newFirstName;
    }
}

console.log(persona.getFirstName());
persona.setFirstName('Matías Agustin')
console.log(persona.getFirstName());
