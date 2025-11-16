//datatypes examples

function datatypeDemo(): any {
//Primitive data types
let xyz: string = "Jayesh";
let age: number = 3063747309834;
let isStudent: boolean = true;
let emp: null = null;
let address: undefined = undefined;
let x : bigint = 9007199254741991n;

console.log("Name:", xyz);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Emp:", emp);
console.log("Address:", address);
console.log("BigInt Value:", x);
//Non-primitive data types
//Array
let fruits: string[] = ["apple", "banana", "grapes","30"];
let studentName: string[] = ["Alice", "Bob", "Charlie","Jayesh","Rasika","Ritesh"];
let studentId:number[] = [101,102,103,104,105];

console.log("Fruits:", fruits);
console.log("Student Names:", studentName);
console.log("Student IDs:", studentId);
//Tuple
let person: [string, ...number[]] = ["Shiaji Nagar",30,89,78,90];

console.log("Person Tuple:", person);   
//object
type jayesh ={
    name: string;
    age: number;
    isStudent: boolean;
    fruits: string[];};

    let employee: jayesh[] = [
    { name: "Ritesh", age: 25 , isStudent: false, fruits: ["mango", "banana"] },
    { name: "Ritesh", age: 25 , isStudent: false, fruits: ["mango", "banana"] },
     { name: "Rajesh", age: 25 , isStudent: true, fruits: ["apple", "grapes"] },
      ];

    let students: jayesh = {
        name: "Charlie",
        age: 22,
        isStudent: true,
        fruits: ["orange", "kiwi"]
    };
console.log("Employee Object Array:", employee);
console.log("Student Object:", students);
//enum
enum Color {
    Red,Blue,Green,Yellow,Black,White
}
enum City {
    Mumbai,Pune,Delhi,Bangalore,Chennai,Hyderabad
}
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"     
}
console.log("Color Enum:", Color.Red, Color.Blue, Color.Green);
console.log("City Enum:", City.Mumbai, City.Pune, City.Delhi);
console.log("UserRole Enum:", UserRole.Admin, UserRole.User, UserRole.Guest);

//union
let multiType: number | string;
multiType = 20;
multiType = "Hello";

console.log("MultiType Union:", multiType);
//intersection  
type student = {name: string; age: number;};
type employeeDetails = {employeeId: number; department: string;};
type workingStudent = student & employeeDetails;  
let workingStudent1: workingStudent = {name: "Ritesh", age: 24, employeeId: 1234, department: "IT"};  

console.log("Working Student Intersection:", workingStudent1);
//any
let randomValue: any = 10;
randomValue = "Jayesh";
randomValue = true;
randomValue = [1, "Ritesh", false];

console.log("Random Value Any:", randomValue);
//unknown
let userInput: unknown;
userInput = 5;
userInput = "Jayesh";
userInput = true;
console.log("User Input Unknown:", userInput);
return {
    randomValue: () => randomValue  
}
}
console.log("Datatype demo");
console.log(datatypeDemo());
console.log(datatypeDemo().randomValue());