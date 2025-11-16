"use strict";
// polymorphism.ts
Object.defineProperty(exports, "__esModule", { value: true });
class calculator {
    add(a, b) {
        return a + b;
    }
}
class advancedCalculator extends calculator {
    add(a, b) {
        return a - b; // adds an extra 10 for demonstration
    }
    subtract(a, b) {
        return a - b;
    }
}
const basicCalc = new calculator();
console.log("Basic Calculator Add:", basicCalc.add(5, 10));
const adv = new advancedCalculator();
console.log("Advanced Calculator Add:", adv.add(25, 10));
console.log("Advanced Calculator Substrat:", adv.subtract(15, 10));
//# sourceMappingURL=polymorphism.js.map