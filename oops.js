"use strict";
//inheritance oops
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    name; //null
    studentID; //null
    //("Jane Smith",22)
    constructor(xyz, zbc) {
        this.name = xyz;
        this.studentID = zbc;
    }
    //name = Jane Smith, studentID=22
    studentDetails() {
        return `Name: ${this.name}, Student ID: ${this.studentID}`;
    }
}
const student2 = new student("Jane Smith", 22);
console.log(student2.studentDetails());
class marks extends student {
    subject;
    marksObtained;
    //("Jatin S",25,"Mathematics",95)
    constructor(name, age, subject, marksObtained) {
        super(name, age); //JATIN S,25
        this.subject = subject; //Mathematics
        this.marksObtained = marksObtained; //95
    }
    marksDetails() {
        return `${this.studentDetails()}, Subject: ${this.subject}, Marks Obtained: ${this.marksObtained}`;
    }
}
const marks1 = new marks("Jatin S", 25, "Mathematics", 95);
console.log(marks1.marksDetails());
//# sourceMappingURL=oops.js.map