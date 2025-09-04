const navbarHeartCount = document.getElementById('navbar-heart-count');
const heartBtn = document.querySelectorAll('.btn-heart');

heartBtn.forEach(btn =>{
    let clicked = false;

    btn.addEventListener('click', () =>{
            let count = parseInt(navbarHeartCount.textContent || 0);
            navbarHeartCount.textContent = count + 1;

            clicked = true;
    });
});