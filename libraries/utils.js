/**
 * Generates a random number between min and max (both included).
 *
 * @param {number} min Minimum number.
 * @param {number} max Maximum number.
 * @returns {number} The random number.
 */
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Capitalizes the first string letter.
 *
 * @param {string} string String to capitalize.
 * @returns {string} Capitalized string.
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
