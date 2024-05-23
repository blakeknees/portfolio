const portfolio = {};

// hamburger menu: https://www.youtube.com/watch?v=flItyHiDm7E&t=2s
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-bar-flex');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	navMenu.classList.toggle('active');
// });

// document.querySelectorAll('.nav-link').forEach((link) =>
// 	link.addEventListener('click', () => {
// 		hamburger.classList.remove('active');
// 		navMenu.classList.remove('active');
// 	})
// );


// scroll to top button
// tutorial: https://www.youtube.com/watch?v=FK5DEa1Hvco
portfolio.scrollToTop = () => {
    const scrollUpButton = document.createElement('button');
    scrollUpButton.id = 'to-top'
    scrollUpButton.innerHTML = '<i class="material-icons">arrow_upward</i>'
    document.body.appendChild(scrollUpButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollUpButton.classList.add('active');
        } else {
            scrollUpButton.classList.remove('active');
        };
    });

    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};

// portfolio.scrollToTop();


