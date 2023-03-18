// Define variables for the app
const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const resultEl = document.getElementById("result");

let startTime, endTime, timeElapsed, errors;

// Define an array of quotes for the app
const quotes = [
    "The quick brown fox jumps over the lazy dog.",  
    "She sells seashells by the seashore.",  
    "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?",  
    "Peter Piper picked a peck of pickled peppers.",  
    "Sally sells seashells down by the seashore.",  
    "The cat in the hat sat on the mat.",  
    "I scream, you scream, we all scream for ice cream.",  
    "Four score and seven years ago, our fathers brought forth on this continent a new nation.",  
    "Ask not what your country can do for you, ask what you can do for your country.",  
    "In three words I can sum up everything I've learned about life: it goes on.",  
    "All that glitters is not gold.",  
    "To be, or not to be, that is the question.",  
    "The only way to do great work is to love what you do.",  
    "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",  
    "Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference.",  
    "It does not matter how slowly you go as long as you do not stop.",  
    "The best way to predict your future is to create it.",  
    "Believe you can and you're halfway there.",  
    "Life is what happens to you while you're busy making other plans."
];

// Get a random quote from the array and display it on the page
function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}

// Start the test and disable the start button
function startTest() {
  inputEl.disabled = false;
  inputEl.focus();
  startBtn.disabled = true;
  resetBtn.disabled = false;
  startTime = new Date().getTime();
}

// Calculate the result of the test
function calculateResult() {
    endTime = new Date().getTime();
    timeElapsed = (endTime - startTime) / 1000;
    const quoteLength = quoteEl.textContent.length;
    const inputLength = inputEl.value.length;
    errors = 0;
  
    for (let i = 0; i < inputLength; i++) {
      if (inputEl.value[i] !== quoteEl.textContent[i]) {
        errors++;
      }
    }
  
    const accuracy = ((quoteLength - errors) / quoteLength) * 100;
    const wordsPerMinute = inputLength > 0 ? Math.round((inputLength / 5) / (timeElapsed / 60)) : 0;
    const resultText = `Accuracy: ${accuracy.toFixed(2)}%<br>Words per minute: ${wordsPerMinute}`;
  
    resultEl.innerHTML = resultText;
  }
  

// Reset the app to its initial state
function resetTest() {
  inputEl.value = "";
  inputEl.disabled = true;
  startBtn.disabled = false;
  resetBtn.disabled = true;
  resultEl.innerHTML = "";
  displayQuote();
}

// Add event listeners to the buttons
startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);
inputEl.addEventListener("blur", calculateResult);


// Initialize the app with a random quote
displayQuote();
