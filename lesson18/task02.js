function sayHello() {
    console.log('Hello');
}

sayHello();
sayHello();
sayHello();

console.log("============");

greet('Ivan')
greet('Alex')

function greet(name) {
    console.log(`Hello, ${name}!`);   
}

console.log("============");

const result=getSu(3,5);
console.log(result);
console.log(getSum(22,33));
console.log(getSum); //not use



function getSum(number1,number2){
return number1+number2;
}

console.log("============");
const numbers = [1,2,3,4,5];
const cities = ['London','Paris','Madrid']

function getLastElement(array) {
return array[array.length -1]
}
console.log(getLastElement(numbers));
console.log(getLastElement(cities));

console.log("============");
console.log(generateArray(5));

function generateArray(size){
    const result=[];
    for (let i=1;i<=size;i++){
        result.push(i);
    }
    return result
}

console.log("============");

const greet3 =(name = 'Vasya') =>{
    let abc="ABC";
    return `Hello ${name} &[abc]`
}
console.log(greet3('Olya'));

const greet4=name=>`Hello ${name} !!!`
console.log(greet4('Tolya'));


