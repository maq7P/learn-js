//https://leetcode.com/problems/detect-capital/

function detectCapitalUse(word: string): boolean {
  const toCapitilize = (word: string) =>  word[0].toUpperCase() + word.slice(1).toLowerCase()

  return word.toUpperCase() === word || word.toLowerCase() === word || toCapitilize(word) === word
};