//#1
let lucky_number ="332552";
let counter=1;
let checker =0;
for (let i=0; i<lucky_number.length;i+=1){
    if (counter % 2===0)
    {
        checker+= Number(lucky_number[i]);
    }
    else
    {
        checker-=Number(lucky_number[i]);
    }
    counter++;
}
if (checker===0){
console.log(lucky_number + ' is lucky number');
}
else {
    console.log(lucky_number + ' is unlucky number');
}



//#2
let lucky_number2 ="321123";
let checker2 =0;
for (let i=0; i<lucky_number2.length;i+=1){
    if (i >= lucky_number2.length/2)
    {
        checker2+= Number(lucky_number2[i]);
    }
    else
    {
        checker2-=Number(lucky_number2[i]);
    }

}
if (checker2===0){
console.log(lucky_number2 + ' is lucky number');
}
else {
    console.log(lucky_number2 + ' is unlucky number');
}

