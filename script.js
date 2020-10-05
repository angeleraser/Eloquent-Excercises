const consoleHashTriangle = (count = 3) => {
  for (let hashCount = 1; hashCount <= count; hashCount += 1) {
    console.log(`${"#".repeat(hashCount)}`);
  }
};
const fizzBuzz = (count = 100) => {
  for (let index = 1; index <= count; index++) {
    switch (true) {
      case index % 5 === 0 && index % 3 === 0:
        console.log("FizzBuzz");
      case index % 3 === 0 && index % 5 !== 0:
        console.log("Fizz");
        break;
      case index % 5 === 0 && index % 3 !== 0:
        console.log("Buzz");
        break;
      default:
        console.log(index);
        break;
    }
  }
};
const chessGrids = (gridsColums, gridsRows) => {
  const rows = [" ", "#"];
  const GRID = [];
  // Create the row
  for (let index = 2; index < gridsRows; index++) {
    rows[rows.length - 1] === "#" ? rows.push(" ") : rows.push("#");
  }
  // Create the GRID
  for (let index = 0; index < gridsColums; index++) {
    if (index % 2 === 0) {
      GRID.push([...rows].reverse());
    } else {
      GRID.push(rows);
    }
    GRID.push("\n");
  }
  return GRID.reduce((a, b) => a.concat(b)).join("");
};
const getMin = (...numbers) => numbers.sort((a, b) => a - b)[0];
function isEven(number) {
  if (number < 0) {
    return isEven(Math.abs(number));
  } else if (number === 1) {
    return false;
  } else if (number === 0) {
    return true;
  } else {
    return isEven(number - 2);
  }
}
const countFLetters = (str) => {
  return str.match(/[F]/g)?.length || 0;
};
const getUppecaseLettersCount = (str, letter) => {
  const regExp = RegExp(`[${letter.toUpperCase()}]`, "g");
  return str.match(regExp)?.length || 0;
};
const getAllNumbersFromRange = (init, end, interval = 1) => {
  const numbers = [];
  for (index = init; index <= end; index += interval) {
    numbers.push(index);
  }
  return numbers;
};
const add = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
};
const reverseArray = (arr) => {
  let reversedArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    reversedArr = [...reversedArr, arr[index]];
  }
  return reversedArr;
};
const isEqual = (valOne, valTwo) => {
  if (typeof valOne !== "object" && typeof valTwo !== "object") {
    return valOne == valTwo;
  } else if (!!valOne && !!valTwo) {
    return Object.keys(valOne).join("-") === Object.keys(valTwo).join("-");
  } else {
    return valOne === valTwo;
  }
};
const recursiveCount = (indx) => {
  if (indx === 1) {
    return 0;
  } else {
    return recursiveCount(indx - 1);
  }
};

const concatArrays = (listOfArrays = []) =>
  listOfArrays.reduce((arrOne, arrTwo) => arrOne.concat(arrTwo), []);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add({ x, y }) {
    this.x = this.x + x;
    this.y = this.y + y;
  }
  rest({ x, y }) {
    this.x = this.x - x;
    this.y = this.y - y;
  }
  get length() {
    const a = Math.pow(0 - this.x, 2);
    const b = Math.pow(0 - this.y, 2);
    return Math.round(Math.sqrt(a + b));
  }
}

class CustomSet {
  constructor() {
    this.items = [];
  }
  add(el) {
    if (this.items.every((item) => item !== el)) {
      this.items.push(el);
    }
  }
  delete(el) {
    if (this.items.some((item) => item === el)) {
      this.items = this.items.filter((val) => val !== el);
    }
  }
  has(el) {
    const elementIndex = ~this.items.indexOf(el);
    return !!elementIndex ? true : false;
  }
};
