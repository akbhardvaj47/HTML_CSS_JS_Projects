
function countWords() {
    // Get the text from the textarea
    const text = document.getElementById('text-input').value.trim();
    // Trim the input value from extra spaces
    
    // Initialize word count and a flag to track spaces between words
    let count = 0;
    let inWord = false;

    // Loop through each character in the text
    for (let i = 0; i < text.length; i++) {
        // If the character is not a space and we're not already in a word, it's a new word
        if (text[i] !== ' ' && !inWord) {
            count++;
            inWord = true;  // Set the flag to true as we are inside a word
        }
        // If the character is a space, we are no longer in a word
        if (text[i] === ' ') {
            inWord = false;
        }
    }

    // Display the word count
    document.getElementById('word-count').textContent = count;
}
