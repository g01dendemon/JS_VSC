/* 1.

a) Создайте несколько объектов-продуктов. В каждом объекте 
должно быть поле name (название), description(описание), price(цена), 
info (функция, которая формирует строку вида:
`товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`

b) создайте конструктор для создания объектов-товаров. 
Создайте несколько товаров

с) Создайте массив из товаров. Напишите функцию, которая
выводит в консоль информацию о всех товарах в виде:
```
Tовар 1
    name: notebook lenovo thinkpad
    price: 1283
    description: .....
    info: ....
```  
т.е. `поле: значение` При этом: поля, которые являются 
функциями, нужно выводить результат работы функции 
(не текст функции)


### 2
a)
Создай функцию-конструктор объектов Account(iban,owner, balance), 
которая возвращает объект с:
- номер счета (iban)
- именем владельца (owner)
- балансом (balance)  
методами:
- **deposit**(amount) — пополнение счёта
- **withdraw**(amount) — снятие денег (если хватает баланса)
- **getBalance**() — вывод текущего баланса

Создайте несколько объектов счетов. Создайте массив из
счетов. Выведите информацию о всех счетах в консоль

b) напишите функцию, transfer, которая получает два счета, 
и выполняет перевод между счетами вызывая методы deposit и
withdraw соответственно. 

с) (чуть сложнее****************)
 В качестве результата функции transaer, в случае успешной 
операции, должен cформироваться объект: 
- account1 (счет списания), 
- account2 (счет зачисления),
- amount (сумма)
- transactionInfo() (функция, которая выводит информацию о транзакции)
Если транзакция прошла неуспешно, объект должен содержать 
еще и поле error c информацией об ошибке. Естественно,
transactionInfo() должна в этом случае выводить информацию 
о неуспешной транзакции. В случае, если транзакция успешна, 
поля error не должно быть.

*/
//#1

const products =[
    {name: 'lenovo', price: 1283, description: 'cpu intel core7, ram:16gb', info: '2023 year'},
    {name: 'acer', price: 2000, description: 'cpu intel core9, ram:32gb', info: '2026 year'},
    {name: 'hp', price: 600, description: 'cpu intel core3, ram:4gb', info: '2016 year'}
]
const product = {name: 'samsung', price: 1600, description: 'cpu intel core5, ram:16gb', info: '2023 year'}
products.push(product);

let res = products.map((p, i) => (`Товар: ${i+1}
     Name: ${p.name},
     Price: ${p.price}, 
     Description: ${p.description}, 
     Info: ${p.info}`));

console.log(res);

//#2

const accounts = [
    new Account(123, 'John', 500),
    new Account(654, 'Jane', 1300),
    new Account(400, 'David', 2000)
];

function Account(iban,owner,balance){
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount){
        this.balance+= amount;
    };
    this.withdraw = function(amount) {
         if (this.balance >= amount) {
        this.balance -= amount;
        } else {
        console.log('No money');
        }
    };
    this.getBalance = function(){
        return this.balance
    };
}


 let res2 = accounts.map((a, i) => (`Account: ${i+1}
     Number: ${a.iban},
     Name: ${a.owner}, 
     Balance: ${a.balance}`));

function transfer(from,who,amount){
    from.withdraw(amount)
    who.deposit(amount)
}

transfer(accounts[0], accounts[1], 200);
 
console.log(accounts[0].getBalance());


     