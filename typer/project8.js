// Select the span element where the typed text will appear
const typedTextSpan = document.querySelector('.typed-text');

// Define the function that will handle typing and erasing
function type() {
    // Add an event listener for keydown events on the window object
    window.addEventListener("keydown", (event) => {
        // Check if the pressed key is "Backspace"
        if (event.key === "Backspace") {
            // Call the erase function to remove the last character
            erase();
        } else {
            // Otherwise, add the pressed key character to the text content of the span
            typedTextSpan.textContent += event.key;
        }
    });
}

// Call the type function to set up the event listener
type();

// Define the erase function that removes the last character from the span's text content
function erase() {
    // Update the span's text content by removing the last character
    typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -1);
}
