//# HW_19_TEXT
//Задайте массив целых чисел, например [1 5 2 9 4]
//1.Реализуйте алгоритм простой сортировки пузырьком от меньщего к большему.
//2.*** Для отсорторированного массива реализуйте метод бинарного поиска,
//если число в массиве есть , то верните индекс, а если нет, то верните -1

const numbers =[1,5,2,3,9,11,-1]
function sort(numbers){
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {

            
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}

console.log(sort(numbers));