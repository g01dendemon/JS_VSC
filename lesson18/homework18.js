//#3
//#1

function plus(number1, number2) {
    return number1 + number2;
}

function minus(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2==0){
        return false;
    }
    return number1 / number2;
}

//#2

function calculator(number1, number2,symbol){
    if (symbol === "+") {
        console.log(plus(number1, number2));
    }
    else if (symbol === "-") {
        console.log(minus(number1, number2));
    }
    else if (symbol === "*") {
        console.log(multiply(number1, number2));
    }
    else if (symbol === "/") {
        console.log(divide(number1, number2));
    }
    else {
        console.log("Error");
    }
}

//#4

const plus2 = function(number1, number2){
    return number1 + number2;
}

const minus2 = function(number1, number2){
    return number1 - number2;
}

const multiply2 = function(number1, number2){
    return number1 * number2;
}

const divide2 = function(number1, number2){
    if (number2==0){
        return false;
    }
    return number1 / number2;
}

const calculator2=function(number1, number2,symbol){
    if (symbol === "+") {
        console.log(plus2(number1, number2));
    }
    else if (symbol === "-") {
        console.log(minus2(number1, number2));
    }
    else if (symbol === "*") {
        console.log(multiply2(number1, number2));
    }
    else if (symbol === "/") {
        console.log(divide2(number1, number2));
    }
    else {
        console.log("Error");
    }
}

//#5

const plus3 =(number1,number2) => number1+number2;
const minus3 =(number1,number2) => number1-number2;
const multiply3 =(number1,number2) => number1*number2;
const divide3 =(number1,number2) =>{
    if (number2==0){
        return false;
    }
    return number1/number2;
}

const calculator3 = (number1,number2,symbol) =>{
   if (symbol === "+") {
        console.log(plus3(number1, number2));
    }
    else if (symbol === "-") {
        console.log(minus3(number1, number2));
    }
    else if (symbol === "*") {
        console.log(multiply3(number1, number2));
    }
    else if (symbol === "/") {
        console.log(divide3(number1, number2));
    }
    else {
        console.log("Error");
    }
}

calculator(23,2,"+");
calculator(23,2,"-");
calculator2(2,5,"*");
calculator2(10,3,"/");
calculator2(23,0,"/");
calculator3(15,15,"+");