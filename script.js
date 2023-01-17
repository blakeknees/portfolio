// STEPS:
// Listen for when form submits - addEventListener (click)
// On submit click, display an alert
// IF there’s a message alert “thank you”, ELSE alert “please enter a message”

// Target necessary elements (form, input, textarea, button)
const formEl = document.querySelector('form');
const inputEl = document.querySelectorAll('input');
const textAreaEl = document.querySelector('textarea');
console.log(textAreaEl)
const btn = document.querySelector('button');


//add event listener to the form element
btn.addEventListener('click', (event) => {
    event.preventDefault();

    // const contactInfo = inputEl.value;
    const message = textAreaEl.value;

        if (message) {
            alert('Thank you! We have received your message.');
        } 
        else {
            alert('You must include a message!');
        }

        // clear the input and textarea values back to an empty string
        inputEl.forEach(input => {
            input.value = "";
        })
        textAreaEl.value = "";
    });