// polymorphism.ts

class calculator {
    add(a: number, b: number): number{
        return a + b;
    }
 
}
class advancedCalculator extends calculator {
    add(a: number, b: number): number{
        return a -b; // adds an extra 10 for demonstration
    }
    subtract(a: number, b: number): number{
        return a - b;   
    }
}
const basicCalc = new calculator();
console.log("Basic Calculator Add:", basicCalc.add(5, 10)); 
const adv = new advancedCalculator();
console.log("Advanced Calculator Add:", adv.add(25, 10));
console.log("Advanced Calculator Substrat:", adv.subtract(15, 10));