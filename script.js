function setupCounter(buttons, display){
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = parseInt(display.textContent || 0);
            display.textContent = count + 1;

            const card = btn.closest('.card');
            const cardName = card.querySelector('.card-title').textContent;

            if(btn.classList.contains('btn-copy')){
                const number = card.querySelector('h2').textContent;

                navigator.clipboard.writeText(number)
                    .then(() => {
                        alert(`Copied ${number} from: ${cardName}`);
                    })
            }
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

    btn.addEventListener('click', () => {
        if(coins < 20){
            alert("Not enough coins to make a call!");
            return;
        }

        coins -= 20;
        coinDisplay.textContent = coins + '';

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        const now = new Date();
        const timeString = now.toLocaleString();

        const li = document.createElement('li');
        li.classList.add('border-b', 'pb-2', 'mb-2');

        const line1 = document.createElement('div');
        line1.textContent = `${serviceName} - ${serviceNumber}`;
        line1.classList.add('font-semibold', 'text-xs');

        const line2 = document.createElement('div');
        line2.textContent = `Called at: ${timeString}`;
        line2.classList.add('text-xs', 'text-gray-500');

        li.appendChild(line1);
        li.appendChild(line2);

        callHistoryList.appendChild(li);
    });
});

const clearBtn = document.getElementById('clear-history')
.addEventListener('click', () => {
    callHistoryList.innerHTML = "";
});
