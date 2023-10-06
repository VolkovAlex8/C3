/*С3.3
Задание 2
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

function checkPropertyInObj (str, obj) {
  return (str in obj);
}

const person = {
  city: "Moscow", 
  age: 30
}

console.log(checkPropertyInObj("age", person))