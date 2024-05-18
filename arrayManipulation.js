function processArray(num){

  return num.map(number => {
    if(number % 2 == 0){
      return number * number;
    } else {
      return number * number * number;
    }
    })
    };


const arr = [3,4,5,6];
const newArray = processArray(arr);

console.log (newArray);



function formatArrayStrings(arrStrings, arr){

  if (arrStrings.length !== arr.length){

    throw new Error("[]");
  }
  return arrStrings.map((str, index)=>{

    if (arr[index] % 2 == 0){

      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
};

const arrStrings = ["have", "a", "nice", "day"];
console.log(formatArrayStrings(arrStrings,arr ));
