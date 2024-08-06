const person = {
    firstName: "John",
    lastName: "Doo",
    age: 433,
    fullName: function() {
        return this.firstName + "" + this.lastName
    }
}

document.getElementById('demonio').innerHTML = person.fullName()