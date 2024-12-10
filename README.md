# Design-Patterns


1. Синглтон:
Гарантирует, что у класса есть только один экземпляр, и обеспечивает глобальный доступ к нему.
Полезно для управления ресурсами (например, подключением к базе данных), где требуется только один экземпляр.

    class Database {
      constructor() {
        if (!Database.instance) {
          Database.instance = this;
          this.connection = 'Database connection established'; // Simulate connection
        }
        return Database.instance;
      }
    
      query(sql) {
        console.log(`Executing query: ${sql} on ${this.connection}`);
      }
    }

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true - they are the same instance
db1.query('SELECT * FROM users');


2. Фабричный метод:
Определяет интерфейс для создания объекта, но позволяет подклассам решать, 
какой класс создавать. Это позволяет создавать объекты без указания их конкретных классов.

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

3. Абстрактная Фабрика:
Предоставляет интерфейс для создания семейств связанных или зависимых объектов без указания их конкретных классов.
Расширяет шаблон фабричного метода для создания семейств связанных объектов.

    // UI elements for a Windows-like style
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
    
    
    // UI elements for a MacOS-like style
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

4. Строитель (builder):
Отделяет создание сложного объекта от его представления,
позволяя использовать один и тот же процесс создания для создания различных представлений.

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


5. Прототип:
Указывает типы объектов, которые будут создаваться с помощью прототипа,
и позволяет создавать новые объекты путём копирования этого прототипа.

    function Car(model) {
      this.model = model;
    }
    
    Car.prototype.start = function() {
      console.log(`${this.model} is starting.`);
    };
    
    const car1 = new Car('Toyota');
    const car2 = Object.create(car1); // Create car2 using car1 as a prototype
    car2.model = 'Honda'; // Modify the property
    car1.start(); // Toyota is starting.
    car2.start(); // Toyota is starting. (because start is defined in prototype)
