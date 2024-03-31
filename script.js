class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
     static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
    set numberOfStudents(value) {
      if (value.NaN()) { 
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      } else {
        this._numberOfStudents = value;
      }
    }
  }