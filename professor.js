const User = require('./user');
class Professor extends User{
  constructor(name, surname, yearOfAdm) {
    super(name, surname, yearOfAdm)
  }

  getWorkerYears() {
    return super.getYear();
  }
}

let a = new Professor ('Adam', 'Sandler', 2019)
console.log(a);
console.log(a.getFullName());
console.log(a.getWorkerYears());
