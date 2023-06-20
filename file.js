// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "In the midst of chaos, there is also opportunity.", person: "Sun Tzu" },
    { quote: "The best way to predict the future is to create it.", person: "Peter Drucker" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "If you want to achieve greatness, stop asking for permission.", person: "Anonymous" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", person: "Henry David Thoreau" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "The best revenge is massive success.", person: "Frank Sinatra" },
    { quote: "The only place where success comes before work is in the dictionary.", person: "Vidal Sassoon" },
    { quote: "Your time is limited, don't waste it living someone else's life.", person: "Steve Jobs" },
    { quote: "The future starts today, not tomorrow.", person: "Pope John Paul II" },
    { quote: "Don't be afraid to give up the good to go for the great.", person: "John D. Rockefeller" }
  ];
  
btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})