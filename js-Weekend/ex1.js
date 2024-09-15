//1
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true));
console.log(boolToWord(false));
//2
function sumTwoSmallestNumbers(numbers) {  
    if ( !numbers ||numbers.length<=0  ){
        return 0
    }
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([3,2,-1,100,0]));
console.log(sumTwoSmallestNumbers([]));
console.log(sumTwoSmallestNumbers());

  //3
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
}
console.log(binaryArrayToNumber([1,0,1,0,0,1]));

  //4
function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
console.log(findNextSquare(15));  
console.log(findNextSquare(121));  
console.log(findNextSquare(0));  
//5
function findUniq(arr) {
    const res = arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
    return res===undefined ? -1 : res
}
console.log( findUniq([0,0,1,0,0]));
console.log( findUniq([0,0,0,0,0]));

//6
function summation(num) {
    return (num * (num + 1)) / 2;
}

  //7
function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900)); 
console.log(centuryFromYear(1601)); 
console.log(centuryFromYear(2000)); 

//8
function basicOp(operation, value1, value2) {
    switch(operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return null;
    }
  }
  

console.log(basicOp('+', 4, 7)); 
console.log(basicOp('-', 15, 18)); 
console.log(basicOp('*', 5, 5)); 
console.log(basicOp('/', 49, 7)); 

function nb_year(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
      p0 += p0 * (percent / 100) + aug;  
      years++;  
    }
    return years;
}
 
console.log(nb_year(1500, 5, 100, 5000)); 
console.log(nb_year(1500000, 2.5, 10000, 2000000)); 
  

function peopleInBus(busStops) {
    let people = 0;
    for (let i = 0; i < busStops.length; i++) {
      people += busStops[i][0]; 
      people -= busStops[i][1]; 
    }
    return people;
}

console.log(peopleInBus([[10, 0], [3, 5], [5, 8]])); 
console.log(peopleInBus([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));


function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, next;
    for (let i = 2; i <= n; i++) {
      next = a + b;
      a = b;
      b = next;
    }
    return b;
  }

console.log(fibonacci(10));


function tribonacci(signature, n) {
    let result = signature.slice(0, n);  
    for (let i = 3; i < n; i++) {
      result.push(result[i-1] + result[i-2] + result[i-3]);
    }
    return result;
  }
  

console.log(tribonacci([1, 1, 1], 10)); 
  

function trimString(str) {
    return str.slice(1, -1);
  }
  

console.log(trimString("Hello"));
  
function repeatStr(count, src) {
    return src.repeat(count);
}
  

console.log(repeatStr(5, "Hello")); 
  