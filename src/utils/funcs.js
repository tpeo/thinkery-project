function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getThreeDigitNum() {
  return getRandomNumberBetween(100, 999);
}

export function getFourDigitNum() {
  return getRandomNumberBetween(1000, 9999);
}
