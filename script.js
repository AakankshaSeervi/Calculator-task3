// Add input to screen
function addToScreen(value) {
    document.getElementById("screen").value += value;
}

// Clear the screen
function clearScreen() {
    document.getElementById("screen").value = "";
}

// Delete last character
function deleteChar() {
    let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}

// Perform calculation
function calculate() {
    let screen = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(screen);
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}