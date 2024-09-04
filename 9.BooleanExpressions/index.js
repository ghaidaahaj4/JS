const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend);

const age = 20;
const license = true;
console.log(age > 18 && license);

const knowsJavaScript = false;
const knowsPython = true;
console.log(knowsJavaScript || knowsPython);

const isRaining = false;
console.log(!isRaining);

const isTaskRunning = false;
const likesMusic = true;
const hasPets = false;
const complexExpression = !isTaskRunning && (likesMusic || hasPets);
console.log(complexExpression); 

const myAge = 23;
console.log(myAge > 18);

const currentTemperature = 30;
if (currentTemperature > 30) {
    console.log("It is hot");
} else if (currentTemperature > 20) {
    console.log("It is moderate");
} else {
    console.log("It is cold");
}

const firstNumber = 10;
const secondNumber = '10';
console.log(firstNumber === secondNumber);
console.log(firstNumber == secondNumber); 

const budget = 100;
const expense = 50;
if (expense <= budget) {
    console.log("You are within budget");
} else {
    console.log("Budget exceeded");
}

const person1Height = 170;
const person2Height = 165;

if (person1Height > person2Height) {
    console.log("person1Height is greater than person2Height");
} else if (person1Height < person2Height) {
    console.log("person1Height is less than person2Height");
} else {
    console.log("person1Height is equal to person2Height");
}
