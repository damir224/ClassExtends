class User {
  constructor(name, surname, yearOfAdm) {
    this.yearOfAdm = yearOfAdm;
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  getYear() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
module.exports = User;
