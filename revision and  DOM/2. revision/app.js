// Define a string of words, e.g. ['car', 'house', 'mountain', 'sea', 'bike']
let river = ['car', 'house', 'mountain', 'sea', 'bike'];
// Use filter() to filter out words that have more than 5 letters
let filteredWords = words.filter((word, i, array) => {
    return word.length > 5
})
// Print the results