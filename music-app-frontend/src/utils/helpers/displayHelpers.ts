/**
 * @function
 * Truncates long words, using the passed maxLength as 
 * a limit.
 * 
 * @param {string} content - The string to be truncated.
 * @param {number} maxLength - The max length allowed.
 * @returns {number} The truncated string.
 * 
 * @example
 * truncateLongWords(song.artist, 10)
 * truncateLongWords(song.title, 15)
 */
export const truncateLongWords = (content: string, maxLength: number) => {
  return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
}