var inputa= "";
var inputb = "";
var output = "";
var operator = "";

/*
const num_buttons = document.querySelectorAll(".number");
num_buttons.forEach(item => item.addEventListener("click", numberPress));

function numberPress(e){
  const digit = e.target.textContent;
  input += digit;
  input.textContent
}
*/

const one = document.getElementById("one");
one.addEventListener('click', () => {
  display(1);
});

const two = document.getElementById("two");
two.addEventListener('click', () => {
  display(2);
});

const three = document.getElementById("three");
three.addEventListener('click', () => {
  display(3);
});

const four = document.getElementById("four");
four.addEventListener('click', () => {
  display(4);
});

const five = document.getElementById("five");
five.addEventListener('click', () => {
  display(5);
});

const six = document.getElementById("six");
six.addEventListener('click', () => {
  display(6);
});

const seven = document.getElementById("seven");
seven.addEventListener('click', () => {
  display(7);
});

const eight = document.getElementById("eight");
eight.addEventListener('click', () => {
  display(8);
});

const nine = document.getElementById("nine");
nine.addEventListener('click', () => {
  display(9);
});

const zero = document.getElementById("zero");
zero.addEventListener('click', () => {
  display(0);
});



const divide_button = document.getElementById("divide");
divide_button.addEventListener('click', () => {
  display("/");
});

const multiply_button = document.getElementById("multiply");
multiply_button.addEventListener('click', () => {
  display("*");
});

const subtract_button = document.getElementById("subtract");
subtract_button.addEventListener('click', () => {
  display("-");
  if (operator = "") {
    operator += "-";
    inputa == inputb;
    output == inputb;
    return output_div.innerHTML = operate(inputa, operator, inputb);
  }
});

const add_button = document.getElementById("add");
add_button.addEventListener('click', () => {
  display("+");
});


const equals_button = document.getElementById("equals");
equals_button.addEventListener('click', () => {
  operate(inputa, inputb);
  return output_div.innerHTML = operate(inputa);
});

const clear_button = document.getElementById("clear");
clear_button.addEventListener('click', () => {
  clear();
});

const input_div = document.querySelector(".input");
const output_div = document.querySelector(".output");

display = (num) => {
  inputa += num;
  return input_div.innerHTML = inputa;
}

clear = () => {
  inputa = '';
  inputb = '';
  output = '';
  input_div.innerHTML = '';
  output_div.innerHTML = '';
}


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
