document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("textarea");
    const resultDiv = document.querySelector(".result");
    const resultText = document.querySelector(".textcrypt");
    const copyButton = document.querySelector(".copy");
    const encryptButton = document.querySelector(".encrypt");
    const decryptButton = document.querySelector(".decrypt");
    const placeholderElements = document.querySelectorAll(".placeholder, .placeholder-text");
    const copyMessage = document.querySelector(".copytext");
    const noMessage = document.querySelector(".result h3"); // Selecciona el <h3>

    // Función para encriptar
    function encrypt(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar
    function decrypt(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para mostrar el texto encriptado o desencriptado en el div "result"
    function displayResult(text) {
        placeholderElements.forEach(el => el.style.display = "none"); // Oculta los elementos placeholder
        resultText.style.display = "block"; // Muestra el texto encriptado/desencriptado
        noMessage.style.display = "none"; // Oculta el mensaje "Ningún mensaje fue encontrado"
        resultText.textContent = text; // Coloca el texto en el <p> correspondiente
    }

    // Función para mostrar el mensaje de no mensaje
    function showNoMessage() {
        placeholderElements.forEach(el => el.style.display = "none"); // Oculta los elementos placeholder
        resultText.style.display = "none"; // Oculta el texto encriptado/desencriptado
        noMessage.style.display = "block"; // Muestra el mensaje "Ningún mensaje fue encontrado"
    }

    // Función para copiar el texto encriptado o desencriptado
    function copyToClipboard() {
        const textToCopy = resultText.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyMessage.style.display = "block"; // Muestra el mensaje de copia
            setTimeout(() => {
                copyMessage.style.display = "none"; // Oculta el mensaje después de 2 segundos
            }, 2000);
        });
    }

    // Event listener para encriptar
    encryptButton.addEventListener("click", () => {
        const inputText = textarea.value;
        if (inputText.trim()) {
            const encryptedText = encrypt(inputText);
            displayResult(encryptedText);
        } else {
            showNoMessage(); // Muestra el mensaje de no mensaje si el texto está vacío
        }
    });

    // Event listener para desencriptar
    decryptButton.addEventListener("click", () => {
        const inputText = textarea.value;
        if (inputText.trim()) {
            const decryptedText = decrypt(inputText);
            displayResult(decryptedText);
        } else {
            showNoMessage(); // Muestra el mensaje de no mensaje si el texto está vacío
        }
    });

    // Event listener para copiar el texto
    copyButton.addEventListener("click", copyToClipboard);
});
