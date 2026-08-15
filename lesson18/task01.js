const user = {
  id: 7,
  name: "John",
  age: 25,
  "is Admin": true,
};
console.log(user);
console.log(user.age);
// console.log(user."is Admin"); ERROR
console.log(user["age"]);
console.log(user["is Admin"]);
let myField = "is Admin";
console.log(user[myField]);
console.log("=================");
for (let key in user) {
    console.log(key,user[key]);    
  console.log(`${key} -->> ${user[key]}`);
}