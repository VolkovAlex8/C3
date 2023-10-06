/*С3.3
Задание 1
Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/

function printHasOwnPropertyObj(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, значение: ${obj[key]}`);
    }
  }
}

const person = {
  city: "Moscow", 
  age: 30
}

// создаем объект с прототипом

const student = Object.create(person);

// добавляем собственные свойства объекту student

student.ownCity = "Piter";
student.ownAge = 25;

printHasOwnPropertyObj(student)