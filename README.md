# Примеры порождающих шаблонов проектирования ООП на JavaScript

### Вот примеры некоторых порождающих шаблонов проектирования на языке JavaScript с краткими описаниями:

## 1. Singleton (Одиночка)
Гарантирует, что у класса есть только один экземпляр, и предоставляет глобальную точку доступа к нему. Полезно для управления ресурсами (например, подключением к базе данных), где нужен только один экземпляр.

    class Database {
    constructor() {
        if (!Database.instance) {
        Database.instance = this;
        this.connection = 'Database connection established'; // Симулируем подключение
        }
        return Database.instance;
    }

    query(sql) {
        console.log(`Executing query: ${sql} on ${this.connection}`);
    }
    }

    const db1 = new Database();
    const db2 = new Database();

    console.log(db1 === db2); // true — это один и тот же экземпляр
    db1.query('SELECT * FROM users');

## 2. Factory Method (Абстрактный фабричный метод)
Определяет интерфейс для создания объекта, но позволяет подклассам решать, какой класс следует создавать. Это позволяет создавать объекты без указания их конкретных классов.

    class Document {
    print() {
        throw new Error('Method "print" must be implemented.');
    }
    }

    class PDFDocument extends Document {
    print() {
        console.log('Printing PDF...');
    }
    }

    class WordDocument extends Document {
    print() {
        console.log('Printing Word document...');
    }
    }

    class DocumentFactory {
    createDocument(type) {
        switch (type) {
        case 'pdf': return new PDFDocument();
        case 'word': return new WordDocument();
        default: throw new Error('Invalid document type.');
        }
    }
    }

    const factory = new DocumentFactory();
    const pdf = factory.createDocument('pdf');
    pdf.print(); // Printing PDF...

## 3. Abstract Factory (Абстрактная фабрика)
Предоставляет интерфейс для создания семейств связанных или зависимых объектов без указания их конкретных классов. Расширяет шаблон Factory Method для создания семейств связанных объектов.

    // Элементы пользовательского интерфейса для стиля, подобного Windows
    class WindowsButton {
        render() {
            console.log('Rendering Windows button...');
        }
    }

    class WindowsCheckbox {
        render() {
            console.log('Rendering Windows checkbox...');
        }
    }


    // Элементы пользовательского интерфейса для стиля, подобного MacOS
    class MacButton {
        render() {
            console.log('Rendering MacOS button...');
        }
    }

    class MacCheckbox {
        render() {
            console.log('Rendering MacOS checkbox...');
        }
    }


    class UIWidgetFactory {
        createButton() {
            throw new Error('Method "createButton" must be implemented.');
        }

        createCheckbox() {
            throw new Error('Method "createCheckbox" must be implemented.');
        }
    }

    class WindowsUIWidgetFactory extends UIWidgetFactory {
        createButton() {
            return new WindowsButton();
        }

        createCheckbox() {
            return new WindowsCheckbox();
        }
    }

    class MacUIWidgetFactory extends UIWidgetFactory {
        createButton() {
            return new MacButton();
        }

        createCheckbox() {
            return new MacCheckbox();
        }
    }


    const windowsFactory = new WindowsUIWidgetFactory();
    const windowsButton = windowsFactory.createButton();
    windowsButton.render(); // Rendering Windows button...


    const macFactory = new MacUIWidgetFactory();
    const macButton = macFactory.createButton();
    macButton.render(); // Rendering MacOS button...

## 4. Builder (Строитель)
Отделяет создание сложного объекта от его представления, позволяя одному и тому же процессу создания создавать различные представления.

    class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
    }

    class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza('', '', []);
    }

    setSize(size) {
        this.pizza.size = size;
        return this;
    }

    setCrust(crust) {
        this.pizza.crust = crust;
        return this;
    }

    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this;
    }

    build() {
        return this.pizza;
    }
    }

    const builder = new PizzaBuilder();
    const pizza1 = builder.setSize('large').setCrust('thin').addTopping('pepperoni').addTopping('mushrooms').build();
    console.log(pizza1); // Pizza { size: 'large', crust: 'thin', toppings: [ 'pepperoni', 'mushrooms' ] }

    const pizza2 = builder.setSize('small').setCrust('thick').addTopping('cheese').build();
    console.log(pizza2); // Pizza { size: 'small', crust: 'thick', toppings: [ 'cheese' ] }

## 5. Prototype (Прототип)
Указывает типы объектов для создания с использованием прототипического экземпляра и создаёт новые объекты путём копирования этого прототипа.

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
