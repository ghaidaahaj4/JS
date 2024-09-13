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