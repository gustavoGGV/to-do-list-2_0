export function setDelay(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export function getRandomNumber(max: number): string {
  return Math.floor(Math.random() * max).toString();
}