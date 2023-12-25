const randomizeAnswers = (cor, inc) => {
  let answers = [...inc];
  const tIndex = Math.floor(Math.random() * 4);
  if (tIndex === 3) {
    answers.push(cor);
  } else {
    answers.push(answers[tIndex]);
    answers[tIndex] = cor;
  }

  return answers;
};

export default randomizeAnswers;
