const printArray = (arr)=>{
    for (let i=0; i<arr.length;i++){
        console.log(i," -> ",arr[i]);
    }
}

const primes = [2,3,5,7,11,13,17,19,23,29];
printArray(primes);
console.log("Массив после изменения:", primes);

const reverseArray = (arr) => {
    for (let i = 0; j =array.length-1; i++,j--) {
        let temp = arr[i];
        arr [i] = arr[j];
        arr[j] = temp;
        
    }
}

reverseArray(primes);
console.log("Массив после переворота:",primes);

const reverseArray2 = (arr) => {
    let temp;
    for (let i=0; i<arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
};
reverseArray2(primes);
console.log("Массив после переворота 2:", primes);