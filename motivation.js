const motivationBtn = document.getElementById('motivation-btn'); 
const quoteText = document.getElementById('quote-text');

document.querySelector('#Motivation').addEventListener('click', () => {
    console.log('Motivation side-bar clicked');
    const wrapper = document.querySelector(".wrapper");
    
    if (window.innerWidth <= 808) {
        wrapper.classList.remove('side-panel-open-1'); 
        wrapper.classList.remove('side-panel-open-2'); 
        wrapper.classList.remove('side-panel-open-3');
    }
    wrapper.classList.toggle('side-panel-open-4');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote;
});


const quotes = [
    "God gives the toughest challenges to his strongest warriors 💪",
    "Believe you can and you're halfway there 🤩",
    "Your limitation—it's only your imagination💭",
    "Push yourself, because no one else is going to do it for you😤",
    "Great things never came from comfort zones💨",
    "Dream it. Wish it. Do it💫",
    "Success doesn't just find you. You have to go out and get it🔥"
];

document.querySelector('#close-popup-btn').addEventListener('click', () => {
        console.log('Close popup clicked');
        wrapper.classList.toggle('side-panel-open-4');
});