const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const BMI = (weight / ((height * height) / 10000)).toFixed(3);

    const results = document.querySelector('#results');

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Given height '${height}' is not valid!!`;
    } else if (weight === '' || weight <= 0 || isNaN(height)) {
        results.innerHTML = `Given weight '${weight}' is not valid!!`;
    } else {
        if (BMI < 18.6) {
            results.innerHTML = `${BMI}<br>Under Weight`;
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            results.innerHTML = `${BMI}<br>Normal range`;
        } else if (BMI > 24.9) {
            results.innerHTML = `${BMI}<br>Overweight`;
        }
    }
});
