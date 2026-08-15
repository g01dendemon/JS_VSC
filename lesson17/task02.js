// print 5  times word 'Hello'
// for number in range(5); in Python
for (let i=0; i<5; i+=1){  // i=i+1 or i++
    console.log('Hello');
}
let n=5;
n = n+2;
console.log(n); // 7
n += 2;
console.log(n); // 9
n++; // increment operator - увеличивает на один
console.log(n); // 10 
n--; // decrement operator уменьшает на один
console.log(n++); // 9
console.log(n); // 10
console.log(n--); // 10
console.log(n); // 9 => rule check-up 

console.log(--n); // 8 'Префиксная записть' - такой вариант используется очень редко!

console.log("====================");

// for ( ; ; ){
//     console.log ('Hello');
//     break;
// }

for (let j=0; j<5; j+=1){
    console.log(j)
}
// console.log(j); //Error ReferenceError: j is not defined
for (let j=2; j<2050; j*=2){
    console.log(j);
}