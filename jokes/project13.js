let url = 'https://official-joke-api.appspot.com/jokes/random';
const Button = document.querySelector('.btn')
const Dis = document.querySelector('#display-joke')

// const httpRequest = new XMLHttpRequest()

Button.addEventListener('click', () => {
    // dis();
    // getRandomJoke()
})

// function dis() {
//     httpRequest.open('GET', url)
//     httpRequest.onreadystatechange = function () {
//         if (httpRequest.readyState == 4) {
//             const res = JSON.parse(this.responseText);
//             console.log(res)
//             Dis.innerHTML = `"${res.setup}" <br> ->
//             <space-between> ${res.punchline}`
//         }
//     }

//     httpRequest.send()
// }


// handle this end point with promises
// handle the case of race condition

async function getRandomJoke() {
    const response = await fetch(url)
    const data = await response.json();

    Dis.innerHTML = `"${data.setup}" <br> -> ${data.punchline}`
}