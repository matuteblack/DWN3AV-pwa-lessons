const persona = {
    firstName: 'Matías',
    lastName: 'Quinteros',
    age: 23,

    getFirstName: function () {
        return this.firstName
    },
    setFirstName: function (newFirstName) {
        this.firstName = newFirstName;
    },
    getLastName: function () {
        return this.lastName
    },
    setLastName: function (newLastName) {
        this.lastName = newLastName
    },
    getFullName: function () {
        return this.getFirstName() + " " + this.getLastName();
    }
}

console.log(persona.getFullName());
