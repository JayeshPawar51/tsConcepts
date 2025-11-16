//abstarction
abstract class Calculator {
    abstract add(a: number, b: number): number;
    abstract subtract(a: number, b: number): number;

    multiply(a: number, b: number): number {
        return a * b;
    }
}
class SimpleCalculator extends Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    divide(a: number, b: number): number {
        return a / b;
    }
}

const calc = new SimpleCalculator();
console.log("Addition:", calc.add(10, 5));           
console.log("Subtraction:", calc.subtract(10, 5));   
console.log("Multiplication:", calc.multiply(10, 5));