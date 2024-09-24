//Задание 1
let firstName = "Yuliia";
let years_old = 39;
let city = "Taganrog";
//Задание 2
let Name = "Yuliia";
const Surname = "Sergienko";
const Full_name = Name + " " + Surname;
Full_name;
//Задание 3
let one  = "1234546";
+"1234546";
parseInt(one)==parseFloat(one);
//Задание 4
let text  = "JavaScript is fun!";
console.log(text.slice(14, 19));
let result = text.slice(14, 19);
console.log(result.toUpperCase());
//Задание 5
let product = "Apple";
let price = 30;
let total = `Цена на ${product} составляет ${price} рублей.`;
console.log(total); 
//Задание 6
let number1 = 30.65656565;
let answer = Math.round(number1);
console.log(answer);
//Задание 7
let number2 = 30;
let number3 = 80;
let result1 = number2>number3;
console.log(result1);
//Задание 8
Литерал объекта: { name: "Yuliia", age: 39, color: "red" }
//Задание 9
let num = 5.5657775;
console.log(num.toFixed(2));
//Задание 10
let str = "apple, orange, banana";
let words = str.split(",");
console.log(words); 
//Задание 11
let result = "привет"/12;
console.log(Number.isNaN(result));
//Задание 12
let one = "Привет!";
let two = "Как дела?";
let three = "Меня зовут Юлия";
let text = `${one}\n${two}\n${three}.`;
console.log(text);
//Задание 13
let truthyValue = true;
let result = String(truthyValue);
console.log(typeof result );
//Задание 14
let id = Symbol("id");

let user = {
  name: "Вася",
  [id]: 123 
};
//Задание 15
let arr = [1, 2, 3, 4, 5];
let result = arr.length;
console.log(result);