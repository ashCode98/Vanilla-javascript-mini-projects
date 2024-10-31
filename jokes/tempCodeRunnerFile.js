async function getJokes() {
    try {
        const response = await
            fetch('https://api.chucknorris.io/jokes/random')

        const data = await response.json()
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}

getJokes()