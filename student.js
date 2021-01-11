const User = require('./user');
class Student extends User{
  constructor(name, surname, yearOfAdm) { //yearOfAdm - год поступления в институт
    super(name, surname, yearOfAdm)
  }

  getCourse() {
    return super.getYear();
  }
}

// let a = new Student ('Adam', 'Sandler', 2019)
// console.log(a);
// console.log(a.getFullName());
// console.log(a.getCourse());
