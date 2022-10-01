const getResult = (state) => {
  return state.test.result;
};

const getTestIsStarted = (state) => {
  return state.test.testIsStarted;
};

export { getResult, getTestIsStarted  };
