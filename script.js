function setupCounter(buttons, display){
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = parseInt(display.textContent || 0);
            display.textContent = count + 1;
            let clicked = true;
        }); 
    });
}

setupCounter(document.querySelectorAll('.btn-heart'), document.getElementById('navbar-heart-count'));
setupCounter(document.querySelectorAll('.btn-copy'), document.getElementById('copy-count'));