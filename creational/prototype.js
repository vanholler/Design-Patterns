function Car(model) {
    this.model = model;
    }
    
    Car.prototype.start = function() {
    console.log(`${this.model} is starting.`);
    };
    
    const car1 = new Car('Toyota');
    const car2 = Object.create(car1); // Создаем car2, используя car1 в качестве прототипа
    car2.model = 'Honda'; // Изменяем свойство
    car1.start(); // Toyota is starting.
    car2.start(); // Toyota is starting. (потому что start определен в прототипе)