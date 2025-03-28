
// Array of random quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "It does not matter how slowly you go as long as you do not stop. – Confucius"
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}