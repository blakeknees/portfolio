const portfolio = {};

// clearing formspree form
// tutorial: https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission
portfolio.clearForm = () => {

    const contactForm = document.querySelector('#contact-form');
    window.onbeforeunload = () => {
        contactForm.reset();
    };
};

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


// scroll down function
portfolio.scrollDown = () => {
    const scrollDownButton = document.querySelector('.scroll-down');
    const aboutSection = document.querySelector('#about');
    let aboutTop = aboutSection.offsetTop;

    // smoothly scroll down to top of about section
    scrollDownButton.addEventListener('click', () => {
            window.scrollTo({
            top: aboutTop,
            behavior: `smooth`,
        });
    })
}


// portfolio.scrollDownOnFocus = (event) => {
//     const keyCode = event.keyCode;
//     const enterKeyCode = 13; 

//     // if a key is pressed but it is not enter then behave normally
//     if (keyCode && keyCode !== enterKeyCode) {
//         return;

//     // if a key is pressed and it is enter scroll down
//     } else {
//         portfolio.scrollDown();
//     }
// }


portfolio.clearForm();
portfolio.scrollToTop();
portfolio.scrollDown();
// portfolio.scrollDownOnFocus();


