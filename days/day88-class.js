class User {
  constructor(firstname, lastname, credit) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.credit = credit;
  }
  getFullName() { 
    let fullName = `${this.firstname}`;
    return fullName;
  }

}

const john = new User('John', 'Anderson', 34);
// console.log(john);
console.log(john.getFullName);