/**
 * This script dynamically updates a user card with information fetched from an API
 * in response to user input, implementing a debounce mechanism to limit API calls.
 */

// Selects the input field and the element where the user card will be displayed.
const user_input = document.querySelector('#user-input');
const user_card = document.querySelector('.user-card');

/* Updates the user card with the provided information.*/

function card(picture, name, phoneNO, gender) {
    // Clears the current content of the user card.
    user_card.innerHTML = '';

    // Creates an image element for the user's picture and adds it to the card.
    const img = document.createElement("img");
    img.src = `${picture}`;
    user_card.appendChild(img);
    user_card.classList.add('with-border');

    // Applies styling to the card for layout.
    const with_border = document.querySelector('.with-border');
    with_border.style = "display: flex; flex-direction: column;justify-content: center;align-items: center;";

    // Creates and adds the user's name, phone number, and gender to the card.
    const span1 = document.createElement("span");
    span1.innerHTML = `<strong>Name: </strong> ${name}`;
    user_card.appendChild(span1);

    const span2 = document.createElement("span");
    span2.innerHTML = `<strong>Phone No: </strong> ${phoneNO}`;
    user_card.appendChild(span2);

    const span3 = document.createElement("span");
    span3.innerHTML = `<strong>Gender: </strong> ${gender}`; // Fixed label from "Phone No" to "Gender"
    user_card.appendChild(span3);
}

/**
 * Debounces a function, ensuring it's called once after a delay, every time an event is triggered.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
function debounce(func, delay) {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

/**
 * Fetches user data from an API and updates the user card with the fetched data.
 */
function fetchUserData() {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => {
            const picture = data.results[0].picture.medium;
            const name = `${data.results[0].name.first} ${data.results[0].name.last}`;
            const phoneNO = data.results[0].phone;
            const gender = data.results[0].gender;

            card(picture, name, phoneNO, gender);
        });
}

// Adds an event listener to the input field, calling `fetchUserData` with debouncing.
user_input.addEventListener('input', debounce(fetchUserData, 1000));
