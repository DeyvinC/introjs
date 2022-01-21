//tempconvert

const tempC = 8.5

function tempConvert(cTof){
    return (cTof * 1.8) + 32
}
console.log(`${tempC} Celsius is equal to ${tempConvert(tempC)} Fahrenheit`)

//currency concvertion
const usd = 95;

const currencyConvert = function (usd) {
  const usdToCny = 6.34;
  return usd * usdToCny;
};

console.log(`${usd} USD is equivalent to ${currencyConvert(usd)}`);

function currencyCovert(usd){
    return usd * 6.34
}
console.log(`${usd} USD is equivalent to ${currencyCovert(usd)} Chinses Yuan`);


//calc total tips


const tips = [5, 8, 13, 2, 14, 27, 9, 18];
//write function calc tips and return total tips
function calcTotalTips(arr) {
  let toltalTip = 0;
  for (i = 0; i < arr.length; i++) {
    toltalTip = toltalTip + arr[i];
  }
  return toltalTip;
}

console.log(`The toltal tips are ${calcTotalTips(tips)}`);

//calc even numbers


const evenNum = [5,8,7,12,13,17,22];
//write function calc tips and return total tips
function calcEvenNum(arr) {
  let toltalEven = 0;
  
  for (i = 0; i < arr.length; i++) {
    if( arr[i]%2 === 0){
    toltalEven = toltalEven + arr[i];
    }
  }
  return toltalEven;
}

console.log(`The toltal even numbers are ${calcEvenNum(evenNum)}`);