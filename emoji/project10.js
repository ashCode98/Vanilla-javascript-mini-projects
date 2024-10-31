// Select the HTML element with the id 'emoji'
const btn = document.querySelector('#emoji');

// Define an array of emojis
const emojis = [
	'😆',
	'😅',
	'🤣',
	'😂',
	'😀',
	'🤑',
	'🤨',
	'🙂',
	'😊',
	'😗',
	'😛',
	'😏',
	'🤥',
	'😴',
	'🥺',
	'😧',
	'😇',
	'😳',
	'🙃',
	'🥴',
	'🧐',
	'🤨',
	'😒',
	'🤔',
	'🤭',
	'🥰',
	'🤐',
	'👀',
	'🤔',
	'🤪',
	'🥲',
	'😃',
	'😁',
	'😬',
];

// Add an event listener to the 'emoji' button for the 'mouseover' event
btn.addEventListener("mouseover", (event) => {

	// Generate a random number between 0 and the length of the emojis array
	let randomNumber = Math.floor(Math.random() * emojis.length);

	// Change the innerHTML of the event's source element to a random emoji from the emojis array
	event.srcElement.innerHTML = emojis[randomNumber];
})