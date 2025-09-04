function setupCounter(buttons, display){
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = parseInt(display.textContent || 0);
            display.textContent = count + 1;
            let clicked = true;

            const card = btn.closest('.card');
            const cardName = card.querySelector('.card-title').textContent;

            alert(`Copied from: ${cardName}`);
        }); 
    });
}

setupCounter(document.querySelectorAll('.btn-heart'), document.getElementById('navbar-heart-count'));
setupCounter(document.querySelectorAll('.btn-copy'), document.getElementById('copy-count'));

const coinDisplay = document.getElementById('coin-count');
let coins = parseInt(coinDisplay.textContent) || 100;

const callBtn = document.querySelectorAll('.btn-call');
const callHistoryList = document.getElementById('call-history-list');

callBtn.forEach(btn => {
    const card = btn.closest('.bg-white.rounded-xl.shadow-md');
    const serviceName = card.querySelector('h3.font-hind').textContent;
    const serviceNumber = card.querySelector('h2').textContent;
})