// calculator.js

export class Calculator {
      constructor () {
            console.log( "Hello World" )
        }
      add(a: any, b: any) {
        return a + b;
      }
    
      subtract(a: number, b: number) {
        return a - b;
      }
    
      multiply(a: number, b: number) {
        return a * b;
      }
    
      divide(a: number, b: number) {
        return a / b;
      }
}

exports.Calculator = Calculator;
// module.exports = Calculator;
    