const { log } = require("console");

const num1=8
const num2=15
console.log(num1+num2);
const a =30
const b =12
console.log(a-b);
const x=7
const y=3
console.log(x*y);
const dividend =20
const divisor=4
console.log(dividend/divisor);
console.log(dividend%divisor);
const number1=15
const number2=25
const number3=10
console.log((number1+number2+number3)/3);
// modolue נותן לנו את השאירית
const v1=10
console.log(v1%3);


function evenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
      return
    }
    console.log(`${number} is odd.`);
    
  }
  
  // Example usage
  evenOrOdd(4);
  evenOrOdd(7); 

  function divisibleByFiveAndSeven(number) {
    if (number % 5 === 0 && number % 7 === 0) {
      console.log(`${number} is divisible by both 5 and 7.`);
      return
    }
    console.log(`${number} is not divisible by both 5 and 7.`);
    
  }
  
  // Example usage
  divisibleByFiveAndSeven(35);
  divisibleByFiveAndSeven(10); 

  // 9. Counting by Steps

function countDivisibleByFour() {
    for (let i = 1; i <= 20; i++) {
      if (i % 4 === 0) {
        console.log(i);
      }
    }
  }
  

  countDivisibleByFour();
  
  // 10. Logical AND Operator
  function checkNumberInRange(number) {
    if (number > 10 && number < 20) {
      console.log(`${number} is greater than 10 and less than 20.`);
    } else {
      console.log(`${number} does not satisfy the condition.`);
    }
  }
  checkNumberInRange(15); 
  checkNumberInRange(5); 
  

  function checkNumberWithOr(number) {
    if (number < -5 || number > 10) {
      console.log(`${number} is either less than -5 or greater than 10.`);
    } else {
      console.log(`${number} does not satisfy the condition.`);
    }
  }
  
  checkNumberWithOr(-6); 
  checkNumberWithOr(8);  

  function printOppositeBoolean(value) {
    console.log(!value);
  }

  printOppositeBoolean(true);  
  printOppositeBoolean(false); 

  function checkComplexCondition(number) {
    if ((number > 5 && number < 10) || (number > 20 && number < 30)) {
      console.log(`${number} satisfies one of the conditions.`);
    } else {
      console.log(`${number} does not satisfy any of the conditions.`);
    }
  }
  
  checkComplexCondition(7); 
  checkComplexCondition(25); 
  checkComplexCondition(15); 
  