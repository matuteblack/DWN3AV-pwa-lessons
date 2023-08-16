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

}

const matias = new person();
    matias.setFirstName('Matías Agustín');
    matias.setLastName('Quinteros');
    matias.setAge(23);

    console.log(matias.getFullName(), matias.getAge());
