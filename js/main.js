function getRandomArbitrary(min, max, maxDigits = 0) {
  if (min >= max || min < 0 || max <= 0) {
    return ('NaN');
  }

  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}

// Источник: https://qna.habr.com/q/999157
