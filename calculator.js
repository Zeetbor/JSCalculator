var input = "";
var memory = null;
var output = null;
var operator = "";
var scrn = "";

const input_div = document.querySelector(".input");
const output_div = document.querySelector(".output");

// FUNCTIONS ------------------------------------

display = (num) => {
  scrn += (num);
  return input_div.innerHTML = scrn;
};

clear = () => {
  input = '';
  operator = '';
  memory = null;
  output = null;
  scrn = '';
  input_div.innerHTML = 0;
  output_div.innerHTML = '';
};

// NUMBER BUTTONS ------------------------------------

/*
const num_buttons = document.querySelectorAll(".number");
num_buttons.forEach(item => item.addEventListener("click", numberPress()));

function numberPress(e){
  const digit = parseInt(e.target.textContent);
  input += digit;
  input.textContent
}
*/


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
  if (input == "0"){
    return
  } else{
    input += (0);
    display(0);
  }
});


// OPERATION BUTTONS ----------------------------------

/*If operator and memory are not empty - operate using values,
save output to memory, empty input and display results on screen.

If operator & memory not empty - check if output is empty...
    If output empty - save input to memory and empty input, display scrn
    If output full - display on screen and empty input*/

const delete_button = document.getElementById('delete')
delete_button.addEventListener('click', function(){
  if (input > 0){
    scrn = scrn.slice(scrn.length, -input.length);
    input = Math.floor(input / 10);
    display(input);
  }
});

const percent_button = document.getElementById('percent');
percent_button.addEventListener('click', function(){
  if (input > 0 && operator !== ""){
    let percent = memory * (input / 100)
    output = operate(memory, operator, percent);
    memory = output;
    operator = "";
    input_div.innerHTML = "=";
    output_div.innerHTML = output;
  }
});

const divide_button = document.getElementById("divide");
divide_button.addEventListener('click', () => {
  if (input == "0") {
    return output_div.innerHTML = "Error";
  } else {
  if (memory !== null && operator !== "") {
    output = operate(memory, operator, input);
    memory = output;
    scrn = output;
    input = "";
    operator = "/";
    display("/");
    return output_div.innerHTML = output;
  } else if (output == null){
      memory = input;
      input = "";
      display ("/");
    } else {
        scrn = output;
        input = "";
        display ("/");
    }
  operator = "/";
}});

const multiply_button = document.getElementById("multiply");
multiply_button.addEventListener('click', () => {
  if (memory !== null && operator !== "") {
    output = operate(memory, operator, input);
    memory = output;
    scrn = output;
    input = "";
    operator = "x";
    display("x");
    return output_div.innerHTML = output;
  } else if (output == null){
      memory = input;
      input = "";
      display ("x");
    } else {
        scrn = output;
        input = "";
        display ("x");
    }
  operator = "x";
});

const subtract_button = document.getElementById("subtract");
subtract_button.addEventListener('click', () => {
  if (memory !== null && operator !== "") {
    output = operate(memory, operator, input);
    memory = output;
    scrn = output;
    input = "";
    operator = "-";
    display("-");
    return output_div.innerHTML = output;
  } else if (output == null){
      memory = input;
      input = "";
      display ("-");
    } else {
        scrn = output;
        input = "";
        display ("-");
    }
  operator = "-";
});

//-----------------LOGIC--------------------------------------
//If operator and memory are not empty - operate using values,
//save output to memory, empty input and display results on screen.
//If operator & memory not empty - check if output is empty...
    //If output empty - save input to memory and empty input, display scrn
    //If output full - display on screen and empty input

const add_button = document.getElementById("add");
add_button.addEventListener('click', () => {
  if (memory !== null && operator !== "") {
    output = operate(memory, operator, input);
    memory = output;
    scrn = output;
    input = "";
    operator = "+";
    display("+");
    return output_div.innerHTML = output;
  } else if (output == null){
      memory = input;
      input = "";
      display ("+");
    } else {
        scrn = output;
        input = "";
        display ("+");
    }
  operator = "+";
});

const equals_button = document.getElementById("equals");
equals_button.addEventListener('click', () => {
  if (operator == "/" && input == "0"){
    return output_div.innerHTML = "Divide By Zero Error";
  } else if (operator !== ""){
    output = operate(memory, operator, input);
    memory = output;
    operator = "";
    input_div.innerHTML = "=";
    output_div.innerHTML = output;
    //To Do - Add flag for equals to enable repeat operations using equals button
  };
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

percent = (n1, n2) => {
  return ((Number(n1) / 100) * Number(n2));
}

operate = (n1, op, n2) => {

  switch(op) {
    case '+':
     return add(n1, n2)
     break;

    case '-':
      return subtract(n1, n2)
      break;

    case 'x':
      return multiply(n1, n2)
      break;

    case '/':
      return divide(n1, n2)
      break;

    case '%':
      return percent(n1, n2)
      break;
  }
}
