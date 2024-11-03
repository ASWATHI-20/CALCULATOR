// Get the display element
const display = document.getElementById('display');

// Append symbol to display
function appendSymbol(symbol) {
    if (display.innerText === '0') {
        display.innerText = symbol; // Replace '0' if it's the first input
    } else {
        display.innerText += symbol;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = '0';
}

// Delete the last input character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

// Calculate the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch (error) {
        display.innerText = 'Error'; // Handle invalid input
    }
}
