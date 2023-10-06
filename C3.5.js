/*C3.5
Задание 5
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными.
Соблюдать best practices.
Использовать синтаксис ES6.
*/

//Классы

class ElectricalAppliance {
	constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
    ElectricalAppliance.totalPower = 0;
}

	// метод, который определяет прибор, как включенный в розетку, и суммируем мощность этих приборов
	plugOn() {
    	console.log(this.name + ` включен в розетку!`);
    	ElectricalAppliance.totalPower = this.isPlugged ? ElectricalAppliance.totalPower : ElectricalAppliance.totalPower + this.power;
    	this.isPlugged = true;
    	console.log(`Общая потребляемая мощность = ` + ElectricalAppliance.totalPower + ` Вт`);
	}

	// метод, который определяет прибор, как выключеный из розетки, и минусуем мощность выключенных приборов
	plugOff() {
    	console.log(this.name + ` выключен из розетки!`);
    	ElectricalAppliance.totalPower = this.isPlugged ? ElectricalAppliance.totalPower - this.power: ElectricalAppliance.totalPower;
    	this.isPlugged = false;
    	console.log(`Общая потребляемая мощность = ` + ElectricalAppliance.totalPower + ` Вт`);
	}
}

// Прибор 1 - Электрический чайник
class ElectricKettle extends ElectricalAppliance {
	constructor(name, brand, power, color, volume) {
		super(name, power);
        this.brand = brand;
        this.color = color;
    	this.volume = volume;
    	this.isPlugged = false;
	}
}

// Прибор 2 - Ноутбук
class Notebook extends ElectricalAppliance {
	constructor(name, brand, power, batteryHours, display, ram) {
    	super(name, power);
    	this.brand = brand;
        this.batteryHours = batteryHours;
    	this.display = display;
    	this.ram = ram;
    	this.isPlugged = false;
	}
}

// экземпляр электрочайника
const electricKettleMidea = new ElectricKettle("Электрический чайник", "Midea", 1800, "Red", "1,5 л.");

// экземпляр ноутбука
const notebookDell = new Notebook("Ноутбук", "DELL", 70, "4 часа", 15.6, "4 Gb");

// включить чайник в розетку
electricKettleMidea.plugOn();

// включить ноутбук в розетку
notebookDell.plugOn();

// отключаем электроприборы
electricKettleMidea.plugOff();
notebookDell.plugOff();

// результат
console.log(electricKettleMidea)
console.log(notebookDell)