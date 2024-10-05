const checkAn = (answer) => (answer ? true : false);
const message = function (checkAn) {
  checkAn(answer);
  if (checkAn(answer) === true) {
    return "Hello World!";
  }
}
const answer = confirm("Нажміть кнопку");
console.log(answer);
alert(message(checkAn));

const randomNumber = () => Math.random() * (100 - 1) + 1;
const checkNum = (callback) => {
  const userNum = Number.parseInt(prompt("Введіть число"));
  const randomNumber = callback();
  let message = "Нажаль, Ви не вгадали";
  if (userNum === randomNumber) {
    message = "Ви вгадали число з шансом 1%!!!";
  }
  return message;
}
alert(checkNum(randomNumber));

const tapClick = () => confirm("Нажміть на кнопку");
const totalClicks = (callback) => {
  let clicks = 0;
  let tap = "";
  do {
    tap = callback();
    if (tap === false) {
      break;
    }
    clicks += 1;
  } while (true);
  return clicks;
}
alert(`Ви нажали на кнопку ${totalClicks(tapClick)} раз(и)`);

const applyCallbackToEachElement = (numbers) => {
    const squareNumbers = [];
    for (const number of numbers) {
      squareNumbers.push(number * number);
    }
    return squareNumbers;
  }
  const arr = [1, 2, 3, 4, 5];
  const squareCallback = (number) => number * number;
  
  const result = applyCallbackToEachElement(arr, squareCallback);
  console.log(result);

  const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = (price / 100) * (100 - discount);
    callback(discountedPrice);
  }
  const showDiscountedPrice = (price) => {
    console.log(price);
  }
  
  calculateDiscountedPrice(100, 10, showDiscountedPrice);