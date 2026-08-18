function sayHello(name = "anonimus"){
    console.log(`Hello, ${name}`);    
}
sayHello("John");
sayHello();
sayHello("Vasya",1,2,3,true);
console.log("================================");

function print(a,b,...args){
    console.log(a);
    console.log(b);
    for (let element of args){
        console.log(`(${typeof element}): ${element}`);        
    } 
    args[2]();   
}
// print(1,2,3,4,5)
// print("a","b")
// print("qqq")
console.log("====================");
print(1,2,3,true,()=>console.log("hello"),"Petya")