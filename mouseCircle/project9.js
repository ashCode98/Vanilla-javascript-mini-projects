// Select the HTML element with the class 'cursor'
const cursor = document.querySelector('.cursor');

// Define an array of 10 colors in hexadecimal format
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

// Add an event listener to the window for the 'mousemove' event
window.addEventListener("mousemove", (event) => {
  // Get the x-coordinate of the mouse cursor
  const x = event.clientX;
  // Get the y-coordinate of the mouse cursor
  const y = event.clientY;

  // Calculate the index of the color to use based on the x-coordinate
  // The index is a proportion of the window's width, scaled to the length of the colors array
  const colorIndex = Math.floor(x / window.innerWidth * colors.length);

  // Set the left CSS property of the cursor to the x-coordinate
  // This moves the cursor horizontally to follow the mouse
  cursor.style.left = x + 'px';

  // Set the top CSS property of the cursor to the y-coordinate
  // This moves the cursor vertically to follow the mouse
  cursor.style.top = y + 'px';

  // Set the background color of the cursor to the selected color
  cursor.style.backgroundColor = colors[colorIndex];
});