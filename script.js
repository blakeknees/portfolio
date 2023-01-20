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
    const scrollButton = document.createElement('button');
    scrollButton.id = 'to-top'
    scrollButton.innerHTML = '<i class="material-icons">arrow_upward</i>'
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollButton.classList.add('active');
        } else {
            scrollButton.classList.remove('active');
        };
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};

portfolio.clearForm();
portfolio.scrollToTop();
AOS.init();
