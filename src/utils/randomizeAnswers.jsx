const randomizeAnswers = (cor, inc) => {
  let answers = [...inc, cor];
  answers = answers.sort(() => Math.random() - 0.5);

  return answers;
};

export default randomizeAnswers;
