//inheritance oops

class student{

    name:string;//null
    studentID:number;//null
  
                //("Jane Smith",22)
    constructor(xyz:string,zbc:number){
        this.name=xyz;
        this.studentID=zbc;  
    }
    //name = Jane Smith, studentID=22
    studentDetails():string{
        return `Name: ${this.name}, Student ID: ${this.studentID}`;
    }
}
const student2=new student("Jane Smith",22);
console.log(student2.studentDetails());

class marks extends student{
    subject:string;
    marksObtained:number;   
                //("Jatin S",25,"Mathematics",95)
    constructor(name:string,age:number,subject:string,marksObtained:number){
        super(name,age);//JATIN S,25
        this.subject=subject;//Mathematics
        this.marksObtained=marksObtained;//95
    }

    marksDetails():string{
        return `${this.studentDetails()}, Subject: ${this.subject}, Marks Obtained: ${this.marksObtained}`;
    }
}
const marks1=new marks("Jatin S",25,"Mathematics",95);
console.log(marks1.marksDetails());
