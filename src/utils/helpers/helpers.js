const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomValuesFromArray = (arr, number) => {
  let randomValues = [];

  while (randomValues.length !== number) {
    const index = getRandomInt(arr.length);
    randomValues.push(arr[index]);
    randomValues = randomValues.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
  }

  return randomValues;
};

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const getCurrentDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${day}-${month}-${year}`;

  return currentDate;
};

const calculationResult = (completeTasks, correctAnswer) => {
  return {
    correctAnswer: correctAnswer,
    percentageResult: (correctAnswer / completeTasks) * 100,
    date: getCurrentDate(),
  };
};

const checkString = (str) => {
  if (str != null && typeof str !== "undefined") {
    str = str.trim();
  }

  if (!str) {
    return true;
  }

  return false;
};

export {
  getRandomInt,
  getRandomValuesFromArray,
  checkString,
  shuffle,
  getCurrentDate,
  calculationResult,
};
