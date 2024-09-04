export const truncateLongWords = (content: string, maxLength: number) => {
  return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
}