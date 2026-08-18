//number
let a=3.14159
let res=Math.floor(a);
console.log(res);
a=-3.999;
res=Math.floor(a);
console.log(res);

a=1.25
res=Math.round(a);
console.log(res);
a=1.11
res=Math.round(a);
console.log(res);
a=-1.77
res=Math.round(a);
console.log(res);

//string

const str="Hello Java Scrip!!!"
console.log(str.length);
res = str.charAt(19);
console.log(res);
res=str[19];
console.log(res);
for (s of str){
    console.log(s);
    
}

res=str.indexOf('ava');
console.log(res);

res=str.indexOf('aaaaaaaaaa');
console.log(res);

res=str.lastIndexOfindexOf('a');
console.log(res);

res=str.substring(4,8);
console.log(res);

res=str.slice(-4,-1);
console.log(res);




