/*С3.4.
Задание 4
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

1.Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
2.Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4.Создать экземпляры каждого прибора.
5.Вывести в консоль и посмотреть результаты работы, гордиться собой :)

Общие требования:

1.Имена функций, свойств и методов должны быть информативными
2.Соблюдать best practices:
- использование camelCase нотации для переменных и методов, PascalCase — для названий функций-конструкторов и классов;
- информативные имена;
- четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
- использование синтаксиса ES6 (кроме функции-конструкторов) и т.д.

*/
// Функции

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
    ElectricalAppliance.totalPower = 0;
}

// метод, который определяет прибор, как включенный в розетку, и суммируем мощность этих приборов
ElectricalAppliance.prototype.plugOn = function() {
    console.log(this.name + ` включен в розетку!`);
    ElectricalAppliance.totalPower = this.isPlugged ? ElectricalAppliance.totalPower : ElectricalAppliance.totalPower + this.power;
    this.isPlugged = true;
    console.log(`Общая потребляемая мощность = ` + ElectricalAppliance.totalPower + ` Вт`);
};

// метод, который определяет прибор, как выключеный из розетки, и минусуем мощность выключенных приборов
ElectricalAppliance.prototype.plugOff = function() {
    console.log(this.name + ` выключен из розетки!`);
    ElectricalAppliance.totalPower = this.isPlugged ? ElectricalAppliance.totalPower - this.power: ElectricalAppliance.totalPower;
    this.isPlugged = false;
    console.log(`Общая потребляемая мощность = ` + ElectricalAppliance.totalPower + ` Вт`);
};

// Прибор 1 - Электрический чайник
function ElectricKettle(name, brand, power, color, volume) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.color = color;
    this.volume = volume;
    this.isPlugged = false;
}

ElectricKettle.prototype = new ElectricalAppliance();

// Прибор 2 - Ноутбук
function Notebook(name, brand, power, batteryHours, display, ram) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.batteryHours = batteryHours;
    this.display = display;
    this.ram = ram;
    this.isPlugged = false;
}

Notebook.prototype = new ElectricalAppliance();

// экземпляр электрочайника
const electricKettleMidea = new ElectricKettle("Электрический чайник", "Midea", 1800, "Red", "1,5 л.");

// экземпляр ноутбука
const notebookDell = new Notebook("Ноутбук", "DELL", 70, "4 часа", 15.6, "4 Gb");

// включаем чайник в розетку
electricKettleMidea.plugOn();

// включаем ноутбук в розетку
notebookDell.plugOn();

// отключаем электроприборы
electricKettleMidea.plugOff();
notebookDell.plugOff();

// результат
console.log(electricKettleMidea)
console.log(notebookDell)