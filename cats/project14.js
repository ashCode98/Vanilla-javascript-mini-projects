const URL = 'https://api.thecatapi.com/v1/images/search';
const Button = document.querySelector('.btn')
const container = document.querySelector('.container')

Button.addEventListener('click', () => {
    getImage();
})

const IMG = document.createElement('img')

async function getImage() {
    const response = await fetch(URL)
    const data = await response.json()

    IMG.src = data[0].url
    container.appendChild(IMG)
}