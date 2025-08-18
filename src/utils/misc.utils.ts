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

/**
 * Basic function to capitalize a string's first letter.
 * @param value - string
 * @returns - string
 */
export function capitalizeFirstLetter(value: string): string {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}