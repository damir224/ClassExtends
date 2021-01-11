class Professor {
  constructor(name, surname, yearOfAdm) {
    this.name = name;
    this.surname = surname;
    this.yearOfAdm = yearOfAdm
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  getWorkerYears() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
