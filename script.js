let display = document.getElementById("display");

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluates the mathematical expression
    } catch (error) {
        display.value = "Error"; // Shows error if invalid input
    }
}

// Function to calculate the square of a number
function calculateSquare() {
    try {
        display.value = Math.pow(eval(display.value), 2); // Squares the current value
    } catch (error) {
        display.value = "Error";
    }
}

// Function to cancel the last digit or delete selected text
function cancelLastDigit() {
    // Check if there's selected text
    if (display.selectionStart !== display.selectionEnd) {
        // Remove the selected text
        display.setRangeText('');
    } else {
        // If no text is selected, remove the last character
        display.value = display.value.slice(0, -1);
    }
}
