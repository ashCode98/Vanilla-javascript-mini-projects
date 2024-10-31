const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach(function (button) {
    button.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = event.target.id;
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                break
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            case 'black':
                body.style.background = event.target.id;
                break;
            case 'gold':
                body.style.background = event.target.id;
                break;
        }
    });
});
