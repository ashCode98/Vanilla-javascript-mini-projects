const Input = document.getElementById("input-field");
const Output = document.getElementById('output-field');
const button = document.querySelector('.btns-container');

let storeCharacters = "";
let flag = false;

Input.addEventListener("keydown", (event) => {
    const key = event.key;
    if ((key >= 'A' && key <= 'Z') || (key >= 'a' && key <= 'z')) {
        storeCharacters += key;
        // updateOutput();
    }
});

button.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className.includes("btn")) {
        clearFormatting();
        const btnClass = target.classList[1];
        switch (btnClass) {
            case "uppercase":
                Output.textContent = storeCharacters.toUpperCase();
                break;
            case "lowercase":
                Output.textContent = storeCharacters.toLowerCase();
                break;
            case "capitalize":
                Output.textContent = storeCharacters.charAt(0).toUpperCase() + storeCharacters.slice(1);
                break;
            case "bold":
                Output.style.fontWeight = 'bold';
                break;
            case "italic":
                Output.style.fontStyle = 'italic';
                break;
            case "underline":
                Output.style.textDecoration = 'underline';
                flag = true;
                break;
        }
    }
});

function clearFormatting() {
    Output.style.fontWeight = 'normal';
    Output.style.fontStyle = 'normal';
    Output.style.textDecoration = 'none';
    flag = false;
}
