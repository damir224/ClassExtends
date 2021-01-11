class Student {
  constructor(name, surname, yearOfAdm) { //yearOfAdm - год поступления в институт
    this.name = name;
    this.surname = surname;
    this.yearOfAdm = yearOfAdm
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  getCourse() {
    return new Date().getFullYear() - this.yearOfAdm;
  }
}
