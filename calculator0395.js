// get the input element
const input = document.getElementById('input');

// store the current calculation as an array
let calculation = [];

// variable to store the memory value
let memory = 0;

// add event listeners to all the buttons
document.querySelectorAll('.Input-button').forEach(button => {
    button.addEventListener('click', event => {
        // get the clicked button's value
        const value = event.target.value;

        // if the button is a number or a decimal point
        if (/\d|\./.test(value)) {
            // add the value to the calculation array
            calculation.push(value);
            // update the input field to show the calculation
            input.value = calculation.join('');
        }
        // if the button is an operator
        else if (/\/|\*|\+|\-/.test(value)) {
            // add the operator to the calculation array
            calculation.push(` ${value} `);
            // update the input field to show the calculation
            input.value = calculation.join('');
        }
    });
});

// add event listener to the power button
document.getElementById('power').addEventListener('click', event => {
    // get the input value and square it
    const result = Math.pow(parseFloat(input.value), 2);

    // check if the result is infinity or negative infinity
    if (result === Infinity || result === -Infinity) {
        result = ('Overflow');
    }

    // set the input value to the result
    input.value = result;
});

// add event listener to the sqrt button
document.getElementById('sqrt').addEventListener('click', event => {
    // get the input value and find its square root
    const result = Math.sqrt(parseFloat(input.value));

    // set the input value to the result
    input.value = result;
});

// add event listener to the percentage button
document.getElementById('percentage').addEventListener('click', event => {
    // get the input value and divide it by 100
    const result = parseFloat(input.value) / 100;

    // set the input value to the result
    input.value = result;
});

// add event listener to the clear button
document.getElementById('clear').addEventListener('click', event => {
    // clear the calculation array
    calculation = [];
    // clear the input field
    input.value = '';
});

// add event listener to the erase button
document.getElementById('erase').addEventListener('click', event => {
    // remove the last element from the calculation array
    calculation.pop();
    // update the input field to show the updated calculation
    input.value = calculation.join('');
});

// add event listener to the equal button
document.getElementById('equal').addEventListener('click', event => {
    // convert the calculation array to a string
    const expression = calculation.join('');
    if (/\/\s+0/.test(expression)) {
        input.value = 'Cannot divide by zero';
    } else {

        // use the Function constructor to evaluate the expression as code
        const result = new Function(`return ${expression}`)();

        // clear the calculation array
        calculation = [];

        // set the input value to the result
        input.value = result;
    }
});
// add event listener to the memory button
document.getElementById('memory').addEventListener('click', event => {
    // store the input value to memory
    memory = parseFloat(input.value);
});

// add event listener to the memory recall button
document.getElementById('memory-recall').addEventListener('click', event => {
    // set the input value to the value stored in memory
    input.value = memory;
    // push the value stored in memory to the calculation array
    calculation.push(memory.toString());
});