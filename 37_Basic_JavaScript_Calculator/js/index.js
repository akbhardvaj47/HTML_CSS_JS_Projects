
// Store the current expression
let res = '';

// Function to display value on the input
function display(val) {
    res += val; // Append value to res
    document.getElementById('input').value = res; // Update the input field
}

// Function to evaluate the expression
function calculate() {
        document.getElementById('input').value = eval(res);
}

// Function to clear the input field
function clearInput() {
    document.getElementById('input').value = ''; // Clear the input field
    res=' ';}