/**
 * This function sets a delay to the processing of the program.
 * @param delay - number
 * @returns - Promise
 */
export function setDelay(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

/**
 * This function gets a random number from 1 to the number parameter passed.
 * @param max - number
 * @returns - string
 */
export function getRandomNumber(max: number): string {
  return Math.floor(Math.random() * max).toString();
}