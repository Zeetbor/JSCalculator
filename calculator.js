var input = "";
var memory = "";
var output = "";
var operator = "";
var scrn = "";

const input_div = document.querySelector(".input");
const output_div = document.querySelector(".output");

display = (num) => {
  scrn += (num);
  return input_div.innerHTML = scrn;
}

  /*
  if (isNaN(scrn[scrn.length -1] && isNaN(num)) {
    scrn = scrn.substring(0, scrn.length-1);
    scrn += (num);
    return input_div.innerHTML = scrn;
  } else {
  */


clear = () => {
  input = '';
  operator = '';
  memory = '';
  output = '';
  scrn = '';
  input_div.innerHTML = 0;
  output_div.innerHTML = '';
}

/*
const num_buttons = document.querySelectorAll(".number");
num_buttons.forEach(item => item.addEventListener("click", numberPress));

function numberPress(e){
  const digit = e.target.textContent;
  input += digit;
  input.textContent
}
*/

// NUMBER BUTTONS ------------------------------------

const one = document.getElementById("one");
one.addEventListener('click', () => {
  input += (1);
  display(1);
});

const two = document.getElementById("two");
two.addEventListener('click', () => {
  input += (2);
  display(2);
});

const three = document.getElementById("three");
three.addEventListener('click', () => {
  input += (3);
  display(3);
});

const four = document.getElementById("four");
four.addEventListener('click', () => {
  input += (4);
  display(4);
});

const five = document.getElementById("five");
five.addEventListener('click', () => {
  input += (5);
  display(5);
});

const six = document.getElementById("six");
six.addEventListener('click', () => {
  input += (6);
  display(6);
});

const seven = document.getElementById("seven");
seven.addEventListener('click', () => {
  input += (7);
  display(7);
});

const eight = document.getElementById("eight");
eight.addEventListener('click', () => {
  input += (8);
  display(8);
});

const nine = document.getElementById("nine");
nine.addEventListener('click', () => {
  input += (9);
  display(9);
});

const zero = document.getElementById("zero");
zero.addEventListener('click', () => {
  input += (0);
  display(0);
});


// OPERATION BUTTONS ----------------------------------

const divide_button = document.getElementById("divide");
divide_button.addEventListener('click', () => {
  display("/");
  operator = "/";
  memory = input;
  input = '';
});

const multiply_button = document.getElementById("multiply");
multiply_button.addEventListener('click', () => {
  display("x");
  operator = "*";
  memory = input;
  input = '';
});

const subtract_button = document.getElementById("subtract");
subtract_button.addEventListener('click', () => {
  display("-");
  operator = "-";

  memory = input;
  input = '';
});


//If operator and memory are not empty - operate using values,
//save output to memory, empty input and display results on screen.

//If operator & memory not empty - check if output is empty...
    //If output empty - save input to memory and empty input, display scrn
    //If output full - display on screen and empty input

const add_button = document.getElementById("add");
add_button.addEventListener('click', () => {
  if (memory !== "" && operator !== "") {
    output = operate(memory, operator, input);
    memory = output;
    input = "";
    scrn = output;
    display("+");
    return output_div.innerHTML = output;
  } else if (output == ""){
      memory = input;
      input = '';
      display ("+");
    } else {
        scrn = output;
        input = '';
        display ("+");
    }
  operator = "+";
});


/*
{
  memory = input;
  input = '';
  display ("+");
}
*/

/*
  if (operator !== "") {
    operate(memory, operator, input);
  }
*/



//operator = "+";

//If operator is 2 characters long, operate with first character and then
//remove 1st. Similiar adjustment to be made to equals function but reversed.


/*
if (operator.length == 2) {
  let sign = operator.charAt[0];
  operate(memory, sign, input);
  operator = operator.substring(1);
}
*/

/*
 if (operator == "") {
   operator = "+";
 } else {
   operate (input, operator, memory);
   operator = "+";
 }
*/

/*
  if (isNaN(scrn[scrn.length -1])) {
    scrn = scrn.substring(0, str.length -1);
    display("+")
  } else {
    display ("+");
  }
*/



const equals_button = document.getElementById("equals");
equals_button.addEventListener('click', () => {
  output = operate(memory, operator, input);
  memory = output;
  operator = "";
  return output_div.innerHTML = output;

  /*if (operator = "") {
    operator += "-";
    input == memory;
    output == memory;
    return output_div.innerHTML = operate(input, operator, memory);
  }*/
});

const clear_button = document.getElementById("clear");
clear_button.addEventListener('click', () => {
  clear();
});


// OERATIONS --------------------------------------

add = (n1, n2) =>  {
 return Number(n1) + Number(n2);
}

subtract = (n1, n2) => {
  return Number(n1) - Number(n2);
}

multiply = (n1, n2) =>  {
  return Number(n1) * Number(n2);
}

divide = (n1, n2) => {
  return Number(n1) / Number(n2);
}

operate = (n1, op, n2) => {

  switch(op) {
    case '+':
     return add(n1, n2)
     break;

    case '-':
      return subtract(n1, n2)
      break;

    case '*':
      return multiply(n1, n2)
      break;

    case '/':
      return divide(n1, n2)
      break;
  }
}

/*

button logic:
on number press > input++

on operator press > if memory = "" then
                    input = memory
                    & input = ""
                    else
                    memory (+-/*) input = memory
                    input = ""
*/

/*

Double operator logic:

If Input.length is NaN
input - last value
display (op)
scrn + optimize

*/
