/*С3.3
Задание 3
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createObjWithoutPrototype() {
  return Object.create(null);
}

newObj = new createObjWithoutPrototype();

console.log(newObj.__proto__);
console.log(newObj);
newObj.age = 32;
console.log(newObj);