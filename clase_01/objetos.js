class person {
    firstName = '';
    lastName  = '';
    age       = 0;

    getFirstName() {
        return this.firstName
    };
    setFirstName(newFirstName) {
        this.firstName = newFirstName;
    };

    getLastName() {
        return this.lastName
    };
    setLastName(newLastName) {
        this.lastName = newLastName
    };

    getAge() {
        return this.age
    };
    setAge(newAge) {
        this.age = newAge
    };

    getFullName() {
        return this.getFirstName() + " " + this.getLastName();
    };
    
    constructor(firstName, lastName, age) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setAge(age);
    }
}

const matias = new person(firstName = 'Matías', lastName = 'Quinteros', age = 23);
    console.log(matias);
