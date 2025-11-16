"use strict";
//datatypes examples
Object.defineProperty(exports, "__esModule", { value: true });
function datatypeDemo() {
    //Primitive data types
    let xyz = "Jayesh";
    let age = 3063747309834;
    let isStudent = true;
    let emp = null;
    let address = undefined;
    let x = 9007199254741991n;
    console.log("Name:", xyz);
    console.log("Age:", age);
    console.log("Is Student:", isStudent);
    console.log("Emp:", emp);
    console.log("Address:", address);
    console.log("BigInt Value:", x);
    //Non-primitive data types
    //Array
    let fruits = ["apple", "banana", "grapes", "30"];
    let studentName = ["Alice", "Bob", "Charlie", "Jayesh", "Rasika", "Ritesh"];
    let studentId = [101, 102, 103, 104, 105];
    console.log("Fruits:", fruits);
    console.log("Student Names:", studentName);
    console.log("Student IDs:", studentId);
    //Tuple
    let person = ["Shiaji Nagar", 30, 89, 78, 90];
    console.log("Person Tuple:", person);
    let employee = [
        { name: "Ritesh", age: 25, isStudent: false, fruits: ["mango", "banana"] },
        { name: "Ritesh", age: 25, isStudent: false, fruits: ["mango", "banana"] },
        { name: "Rajesh", age: 25, isStudent: true, fruits: ["apple", "grapes"] },
    ];
    let students = {
        name: "Charlie",
        age: 22,
        isStudent: true,
        fruits: ["orange", "kiwi"]
    };
    console.log("Employee Object Array:", employee);
    console.log("Student Object:", students);
    //enum
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Yellow"] = 3] = "Yellow";
        Color[Color["Black"] = 4] = "Black";
        Color[Color["White"] = 5] = "White";
    })(Color || (Color = {}));
    let City;
    (function (City) {
        City[City["Mumbai"] = 0] = "Mumbai";
        City[City["Pune"] = 1] = "Pune";
        City[City["Delhi"] = 2] = "Delhi";
        City[City["Bangalore"] = 3] = "Bangalore";
        City[City["Chennai"] = 4] = "Chennai";
        City[City["Hyderabad"] = 5] = "Hyderabad";
    })(City || (City = {}));
    let UserRole;
    (function (UserRole) {
        UserRole["Admin"] = "ADMIN";
        UserRole["User"] = "USER";
        UserRole["Guest"] = "GUEST";
    })(UserRole || (UserRole = {}));
    console.log("Color Enum:", Color.Red, Color.Blue, Color.Green);
    console.log("City Enum:", City.Mumbai, City.Pune, City.Delhi);
    console.log("UserRole Enum:", UserRole.Admin, UserRole.User, UserRole.Guest);
    //union
    let multiType;
    multiType = 20;
    multiType = "Hello";
    console.log("MultiType Union:", multiType);
    let workingStudent1 = { name: "Ritesh", age: 24, employeeId: 1234, department: "IT" };
    console.log("Working Student Intersection:", workingStudent1);
    //any
    let randomValue = 10;
    randomValue = "Jayesh";
    randomValue = true;
    randomValue = [1, "Ritesh", false];
    console.log("Random Value Any:", randomValue);
    //unknown
    let userInput;
    userInput = 5;
    userInput = "Jayesh";
    userInput = true;
    console.log("User Input Unknown:", userInput);
    return {
        randomValue: () => randomValue
    };
}
console.log("Datatype demo");
console.log(datatypeDemo());
console.log(datatypeDemo().randomValue());
//# sourceMappingURL=dataTypes.js.map