function Student(name, surname, birthYear) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.marks = [];
  this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

Student.prototype.putMark = function (mark) {
  if (mark >= 0 && mark <= 100) {
    return this.marks.push(mark);
  }
};

Student.prototype.getAveragePoint = function () {
  const sum = this.marks.reduce((prev, current) => prev + current);
  return (sum / this.marks.length).toFixed(1);
};

Student.prototype.present = function () {
  if (this.attendance.indexOf(null) !== -1) {
    // Якщо в масиві є null - тоді записуємо true замість першого попавшогося null
    return (this.attendance[this.attendance.indexOf(null)] = true);
  } else {
    // Якщо в масиві нема null - тоді масив заповнений і видаємо помилку
    throw new Error("Attendance list is full");
  }
};

Student.prototype.absent = function () {
  if (this.attendance.indexOf(null) !== -1) {
    // Якщо в масиві є null - тоді записуємо false замість першого попавшогося null
    return (this.attendance[this.attendance.indexOf(null)] = false);
  } else {
    // Якщо в масиві нема null - тоді масив заповнений і видаємо помилку
    throw new Error("Attendance list is full");
  }
};

Student.prototype.summary = function () {
  const getAveragePresence = () => {
    const result = {
      allLessons: 0, // всі уроки (тут будуть всі, які не null)
      presents: 0, // присутній (тут будуть всі true)
    };

    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === true) {
        result.allLessons++;
        result.presents++;
      } else if (this.attendance[i] === false) {
        result.allLessons++;
      }
    }
    return (result.presents / result.allLessons).toFixed(2); // повертаємо середнє значення присутності
  };
  if (this.getAveragePoint() > 90 && getAveragePresence() > 0.9) {
    console.log("Молодець!");
  } else if (this.getAveragePoint() <= 90 && getAveragePresence() <= 0.9) {
    console.log("Редиска!");
  } else {
    console.log("Добре, але можна краще ");
  }
};

console.log("*************************STUDENT_1");
let student1 = new Student("John", "Snow", 2000);
console.log(student1);
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
console.log("Вік - ", student1.getAge());
student1.putMark(98);
student1.putMark(80);
student1.putMark(100);
console.log("Середня оцінка - ", student1.getAveragePoint());
student1.summary();

console.log("************************STUDENT_2");
let student2 = new Student("Joe", "Biden", 1949);
console.log(student2);
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
console.log("Вік - ", student2.getAge());
student2.putMark(100);
student2.putMark(93);
student2.putMark(91);
console.log("Середня оцінка - ", student2.getAveragePoint());
student2.summary();
