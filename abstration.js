"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//abstarction
class Calculator {
    multiply(a, b) {
        return a * b;
    }
}
class SimpleCalculator extends Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    divide(a, b) {
        return a / b;
    }
}
const calc = new SimpleCalculator();
console.log("Addition:", calc.add(10, 5));
console.log("Subtraction:", calc.subtract(10, 5));
console.log("Multiplication:", calc.multiply(10, 5));
//# sourceMappingURL=abstration.js.map