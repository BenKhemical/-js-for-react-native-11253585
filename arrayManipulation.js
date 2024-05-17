function processArray(num){

  return num.map(number => {
    if(num % 2 == 0){
      return number * number;
    } else {
      return number * number * number;
    }
    })
    };


const arr = [3,4,5,6];
const newArray = processArray(arr);

console.log (newArray);