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
  