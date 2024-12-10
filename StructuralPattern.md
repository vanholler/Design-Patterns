# Примеры Сткруктуных паттернов - шаблонов проектирования ООП на JavaScript

## 1. Адаптер:
Шаблон адаптера преобразует интерфейс класса в другой интерфейс, ожидаемый клиентами. Он позволяет классам работать вместе, что в противном случае было бы невозможно из-за несовместимых интерфейсов.

###  1. Адаптер класса: Использует наследование для адаптации.

    // Adaptee (the class we want to adapt)
    class Adaptee {
    specificRequest() {
        return "Adaptee's specific request";
    }
    }

    // Target (the interface the client expects)
    class Target {
    request() {
        throw new Error("Method 'request' must be implemented.");
    }
    }

    // Adapter (adapts the Adaptee to the Target interface)
    class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    request() {
        return this.adaptee.specificRequest();
    }
    }

    // Client code
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);
    console.log(adapter.request()); // Adaptee's specific request
### 2. Адаптер объекта: использует композицию (has-a) вместо наследования(is-a).
Это часто предпочтительнее, поскольку позволяет избежать жёсткой привязки через наследование.

    // Adaptee (the class we want to adapt)
    class Adaptee {
    specificRequest() {
        return "Adaptee's specific request";
    }
    }

    // Target (the interface the client expects)
    class Target {
    request() {
        throw new Error("Method 'request' must be implemented.");
    }
    }

    // Adapter (adapts the Adaptee to the Target interface)
    class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    request() {
        return this.adaptee.specificRequest();
    }
    }

    // Client code
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);
    console.log(adapter.request()); // Adaptee's specific request

### 3. Адаптер с несколькими адаптерами:

Иногда может потребоваться адаптировать несколько существующих классов к одному целевому интерфейсу:

    // Adaptee 1
    class Adaptee1 {
        request1() { return "Adaptee1's request"; }
    }

    // Adaptee 2
    class Adaptee2 {
        request2() { return "Adaptee2's request"; }
    }


    // Target interface
    class Target {
        request() { throw new Error("Method 'request' must be implemented"); }
    }


    // Adapter
    class Adapter extends Target {
        constructor(adaptee1, adaptee2) {
            super();
            this.adaptee1 = adaptee1;
            this.adaptee2 = adaptee2;
        }

        request() {
            return this.adaptee1.request1() + " and " + this.adaptee2.request2();
        }
    }


    // Client code
    const adaptee1 = new Adaptee1();
    const adaptee2 = new Adaptee2();
    const adapter = new Adapter(adaptee1, adaptee2);
    console.log(adapter.request()); //Adaptee1's request and Adaptee2's request
Выбор между адаптерами классов и объектов:

`Адаптер класса:` использует наследование, что может привести к более тесной связи. Он подходит, когда вам нужно расширить поведение адаптера в дополнение к адаптации его интерфейса.

`Объектный адаптер:` использует композицию, что приводит к более слабой связи. Обычно его предпочитают, потому что он более гибкий и позволяет избежать потенциальных проблем, связанных с множественным наследованием. Вы можете адаптировать несколько адаптеров к одному целевому объекту или даже адаптировать адаптер к нескольким целевым интерфейсам.

`Шаблон адаптера` — это мощный инструмент для интеграции существующих классов с новыми системами. Он способствует многократному использованию и позволяет избежать переписывания или изменения существующих классов в соответствии с конкретной спецификацией интерфейса. Не забывайте учитывать обработку ошибок в рабочей среде. В приведённых примерах обработка ошибок минимальна для краткости изложения.

## 2. Мост(Bridge):

Шаблон «Мост» отделяет абстракцию от её реализации, чтобы они могли изменяться независимо друг от друга. Это особенно полезно, когда у вас есть абстракция, которая должна работать с несколькими реализациями, и эти реализации могут меняться со временем.

    // Abstraction (interface)
    class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }

    operation() {
        return `Abstraction:${this.implementation.operationImpl()}`;
    }
    }


    // Refined Abstractions (extend the Abstraction)
    class RefinedAbstractionA extends Abstraction {
        operation() {
            return `RefinedAbstractionA:${this.implementation.operationImpl()}`;
        }
    }


    class RefinedAbstractionB extends Abstraction {
        operation() {
            return `RefinedAbstractionB:${this.implementation.operationImpl()}`;
        }
    }



    // Implementor (interface for implementations)
    class Implementor {
    operationImpl() {
        throw new Error("Method 'operationImpl' must be implemented.");
    }
    }


    // Concrete Implementors (implement the Implementor interface)
    class ConcreteImplementorA extends Implementor {
    operationImpl() {
        return "ConcreteImplementorA";
    }
    }

    class ConcreteImplementorB extends Implementor {
    operationImpl() {
        return "ConcreteImplementorB";
    }
    }

    // Client code
    const implementorA = new ConcreteImplementorA();
    const implementorB = new ConcreteImplementorB();

    const abstractionA = new Abstraction(implementorA);
    const abstractionB = new Abstraction(implementorB);

    const refinedAbstractionA = new RefinedAbstractionA(implementorA);
    const refinedAbstractionB = new RefinedAbstractionB(implementorB);

    console.log(abstractionA.operation()); // Abstraction:ConcreteImplementorA
    console.log(abstractionB.operation()); // Abstraction:ConcreteImplementorB
    console.log(refinedAbstractionA.operation()); // RefinedAbstractionA:ConcreteImplementorA
    console.log(refinedAbstractionB.operation()); // RefinedAbstractionB:ConcreteImplementorB

Объяснение:

`Abstraction:` Это интерфейс, определяющий операции более высокого уровня. Он содержит ссылку на Implementor объект.

`RefinedAbstractionARefinedAbstractionB:` Это конкретные реализации, которые расширяют Abstraction. Они могут добавлять собственное поведение, но при этом использовать Implementor.

`Implementor:` Это интерфейс, который определяет детали реализации более низкого уровня.

`ConcreteImplementorA, ConcreteImplementorB:` Это конкретные реализации интерфейса Implementor . Они обеспечивают фактическую реализацию низкоуровневых операций.

Шаблон `«Мост»` отделяет абстракцию от её реализации. Вы можете изменить реализацию, не затрагивая абстракцию, и наоборот. Это повышает гибкость и удобство сопровождения. В этом примере вы можете легко добавлять новые усовершенствованные абстракции или конкретные реализации, не затрагивая другие части кода. Пример показывает, что классы `Abstraction` и `RefinedAbstraction` могут независимо использовать разные классы `Implementor` . Это иллюстрирует основное преимущество разделения.


## 3. Компоновщик(Composite):

Шаблон `«Композиция»` позволяет клиентам одинаково обрабатывать отдельные объекты и композиции объектов. Это полезно, когда у вас есть древовидная структура объектов, где одни являются отдельными конечными узлами, а другие — составными узлами, содержащими другие узлы.

    // Component (interface)
    class Component {
    operation() {
        throw new Error('Method "operation" must be implemented.');
    }

    add(component) {
        throw new Error('Method "add" must be implemented.');
    }

    remove(component) {
        throw new Error('Method "remove" must be implemented.');
    }

    getChild(i) {
        throw new Error('Method "getChild" must be implemented.');
    }
    }

    // Leaf (concrete component)
    class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
    }

    operation() {
        return `Leaf: ${this.name}`;
    }

    add(component) {
        throw new Error("Cannot add to a leaf node.");
    }

    remove(component) {
        throw new Error("Cannot remove from a leaf node.");
    }

    getChild(i) {
        throw new Error("Leaf node has no children.");
    }
    }

    // Composite (concrete component)
    class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    operation() {
        let results = `Composite: ${this.name}\n`;
        this.children.forEach((child) => {
        results += `  ${child.operation()}\n`;
        });
        return results;
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        this.children = this.children.filter((child) => child !== component);
    }

    getChild(i) {
        return this.children[i];
    }
    }

    // Client code
    const root = new Composite("root");
    const branch1 = new Composite("branch1");
    const leaf1 = new Leaf("leaf1");
    const leaf2 = new Leaf("leaf2");
    const branch2 = new Composite("branch2");
    const leaf3 = new Leaf("leaf3");

    root.add(branch1);
    branch1.add(leaf1);
    branch1.add(leaf2);
    root.add(branch2);
    branch2.add(leaf3);

    console.log(root.operation());
    // Expected Output:
    // Composite: root
    //   Composite: branch1
    //     Leaf: leaf1
    //     Leaf: leaf2
    //   Composite: branch2
    //     Leaf: leaf3

Объяснение:

`Component (Интерфейс):` определяет общий интерфейс для конечных и составных узлов.

`Leaf (Конкретный компонент):` Представляет конечный узел в древовидной структуре. Он реализует operation метод напрямую. Методы add, remove и getChild выдают ошибки, поскольку конечные узлы не могут иметь дочерних элементов.

`Composite (Конкретный компонент):` Представляет составной узел. Он содержит коллекцию дочерних компонентов и реализует operation метод путем рекурсивного вызова operation метода для своих дочерних элементов. Он также реализует методы add, remove и getChild для управления своими дочерними элементами.

Шаблон `«Композиция»` позволяет одинаково обрабатывать как отдельные объекты `(Leaf)`, так и группы объектов `(Composite)`. Это упрощает добавление или удаление компонентов из структуры без необходимости знать, являются ли они конечными или составными узлами. Клиентский код взаимодействует с компонентами через общий интерфейс, независимо от их типа (конечный или составной). Это повышает гибкость и удобство сопровождения кода.

## 4. Декоратор(decorator):
Шаблон «Декоратор» динамически добавляет функции к объекту. Он предоставляет гибкую альтернативу наследованию для расширения функциональности. Вместо создания подклассов для каждой вариации вы можете обернуть объект декораторами для добавления функций.

    // Component (interface)
    class Component {
    operation() {
        throw new Error("Method 'operation' must be implemented.");
    }
    }

    // Concrete Component
    class ConcreteComponent extends Component {
    operation() {
        return "ConcreteComponent";
    }
    }

    // Decorator (abstract class)
    class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }

    operation() {
        return this.component.operation(); // Calls the operation of the wrapped component
    }
    }

    // Concrete Decorators
    class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
    }

    class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
    }

    // Client code
    const component = new ConcreteComponent();
    const decoratorA = new ConcreteDecoratorA(component);
    const decoratorB = new ConcreteDecoratorB(decoratorA);

    console.log(component.operation());       // ConcreteComponent
    console.log(decoratorA.operation());     // ConcreteDecoratorA(ConcreteComponent)
    console.log(decoratorB.operation());     // ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))

Объяснение:

`Component (Интерфейс):` определяет интерфейс для объектов, которые можно декорировать.

`ConcreteComponent:` Конкретный объект, реализующий интерфейс Component . Это объект, который мы будем декорировать.

`Decorator (Абстрактный класс):` этот класс расширяет интерфейс Component и содержит ссылку на объект Component (украшаемый компонент). По умолчанию его метод operation делегирует полномочия украшаемому компоненту, позволяя конкретным декораторам добавлять или изменять поведение.

`ConcreteDecoratorA, ConcreteDecoratorB:` Это конкретные декораторы, которые добавляют определённые функции. Они вызывают `super.operation()` для выполнения операции компонента, который они оборачивают, а затем добавляют свои собственные операции до или после.

Шаблон проектирования `«Декоратор»` позволяет добавлять функции к объекту, не изменяя его структуру. В отличие от наследования, при котором для каждой комбинации функций необходимо создавать новый подкласс. Декораторы особенно полезны для динамического добавления дополнительных функций и повышения гибкости и удобства сопровождения кода. В примере показано, что декораторы можно объединять в цепочки для создания комбинаций дополнительных функций. Это позволяет гибко комбинировать функции.

## 5. Фасад(Fasade):

Шаблон «Фасад» предоставляет упрощённый интерфейс для сложной подсистемы. Он скрывает сложности подсистемы за единым простым в использовании интерфейсом. Это упрощает использование подсистемы и уменьшает связь между клиентом и подсистемой.

    // Subsystem classes (complex components)
    class SubsystemA {
    operationA() {
        return "SubsystemA: OperationA";
    }
    }

    class SubsystemB {
    operationB() {
        return "SubsystemB: OperationB";
    }
    }

    class SubsystemC {
    operationC() {
        return "SubsystemC: OperationC";
    }
    }


    // Facade (simplified interface)
    class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }

    complexOperation() {
        return (
        this.subsystemA.operationA() +
        "\n" +
        this.subsystemB.operationB() +
        "\n" +
        this.subsystemC.operationC()
        );
    }
    }

    // Client code
    const facade = new Facade();
    console.log(facade.complexOperation());
    // Expected Output:
    // SubsystemA: OperationA
    // SubsystemB: OperationB
    // SubsystemC: OperationC

Объяснение:

Классы подсистем `(SubsystemA, SubsystemB, SubsystemC):` представляют собой сложные компоненты системы. У них есть собственные методы и внутренняя логика.

`Фасад (Facade):` этот класс предоставляет упрощённый интерфейс для подсистемы. Он инкапсулирует сложности подсистемы и предоставляет единый метод `(complexOperation)`, который вызывает необходимые методы классов подсистемы.

Клиентский код взаимодействует только с `Facade`, что значительно упрощает его взаимодействие с подсистемой. Внутренняя работа классов подсистемы скрыта от клиента. Это улучшает организацию кода, уменьшает количество зависимостей и упрощает поддержку и изменение системы, поскольку изменения в подсистеме не влияют напрямую на клиентов, использующих фасад. Добавление новых функций в подсистему обычно требует только обновления класса фасада без изменения клиентского кода.

## 6. Приспособленец(Flyweight):

Шаблон `Flyweight` использует совместное использование для эффективной поддержки большого количества мелкозернистых объектов. Он особенно полезен, когда у вас есть большое количество объектов с множеством общих атрибутов. Вместо создания множества объектов с избыточными данными шаблон `Flyweight` создаёт небольшое количество объектов, которые совместно используют данные.

    // Flyweight Factory (creates and manages flyweights)
    class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(sharedState) {
        if (!this.flyweights[sharedState]) {
        this.flyweights[sharedState] = new ConcreteFlyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }
    }

    // Flyweight (interface)
    class Flyweight {
    operation(uniqueState) {
        throw new Error("Method 'operation' must be implemented.");
    }
    }

    // Concrete Flyweight (implements the Flyweight interface)
    class ConcreteFlyweight extends Flyweight {
    constructor(sharedState) {
        super();
        this.sharedState = sharedState;
    }

    operation(uniqueState) {
        return `ConcreteFlyweight: sharedState=${this.sharedState}, uniqueState=${uniqueState}`;
    }
    }


    // Client code
    const factory = new FlyweightFactory();

    const flyweight1 = factory.getFlyweight("sharedStateA");
    const flyweight2 = factory.getFlyweight("sharedStateA");
    const flyweight3 = factory.getFlyweight("sharedStateB");

    console.log(flyweight1 === flyweight2); // true (they are the same object)
    console.log(flyweight1 === flyweight3); // false (different shared state)

    console.log(flyweight1.operation("uniqueStateX")); // ConcreteFlyweight: sharedState=sharedStateA, uniqueState=uniqueStateX
    console.log(flyweight2.operation("uniqueStateY")); // ConcreteFlyweight: sharedState=sharedStateA, uniqueState=uniqueStateY
    console.log(flyweight3.operation("uniqueStateZ")); // ConcreteFlyweight: sharedState=sharedStateB, uniqueState=uniqueStateZ

Объяснение:

`FlyweightFactory:` Этот класс отвечает за создание облегчённых объектов и управление ими. Он использует кэш (flyweights) для хранения существующих облегчённых объектов, гарантируя, что для каждого уникального общего состояния создаётся только один экземпляр.

`Flyweight:` Это интерфейс для облегчённых объектов. Он определяет метод operation, который принимает в качестве аргумента уникальное состояние.

`ConcreteFlyweight:` Это конкретная реализация интерфейса Flyweight . Она хранит общее состояние и реализует метод operation .

Шаблон наименьшего веса сокращает потребление памяти за счет совместного использования объектов с общими атрибутами. `FlyweightFactory` Имеет решающее значение, поскольку предотвращает создание повторяющихся наименьших весов и гарантирует, что объекты с одинаковым общим состоянием всегда ссылаются на один и тот же экземпляр. Это важно для повышения эффективности шаблона. В этом примере отслеживаются общие состояния, что упрощает обеспечение наличия только одного минимального значения для каждого уникального общего состояния, избегая избыточности. Клиентский код использует фабрику для получения промежуточных весов, гарантируя, что он всегда использует один и тот же объект для одного и того же общего состояния. `Это сводит к минимуму использование памяти.`

## 7. Заместитель(Proxy):

Шаблон проектирования `«Прокси»` предоставляет суррогатный или замещающий объект для управления доступом к другому объекту. Он полезен в ситуациях, когда нужно добавить дополнительные функции к объекту, не изменяя сам объект, или когда нужно управлять доступом к ресурсу, создание или доступ к которому обходятся дорого.

### 1. Виртуальный прокси-сервер: откладывает создание объекта до тех пор, пока он не понадобится. Это полезно, когда создание объекта требует больших затрат (например, загрузка большого изображения или ресурса).

    // Real Subject (the object the proxy represents)
    class Image {
    constructor(filename) {
        this.filename = filename;
        this.bitmap = this.loadBitmap(filename); // Expensive operation
        console.log(`Image ${filename} loaded.`);
    }

    loadBitmap(filename) {
        // Simulate loading a bitmap (replace with actual loading logic)
        console.log(`Loading bitmap for ${filename}...`);
        return "Bitmap data for " + filename;
    }

    display() {
        console.log(`Displaying ${this.filename}: ${this.bitmap}`);
    }
    }

    // Proxy (Virtual Proxy)
    class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.image = null;
    }

    display() {
        if (!this.image) {
        this.image = new Image(this.filename);
        }
        this.image.display();
    }
    }


    // Client code
    const proxy = new ImageProxy("largeImage.jpg");
    proxy.display(); // Image largeImage.jpg loaded.  Displaying largeImage.jpg: Bitmap data for largeImage.jpg
    proxy.display(); // Displaying largeImage.jpg: Bitmap data for largeImage.jpg (no reloading)
    
### 2. Прокси-сервер защиты: контролирует доступ к реальному объекту. Это полезно, когда вам нужно ограничить доступ к объекту на основе определённых условий.

    // Real Subject
    class Document {
    access() {
        console.log("Accessing sensitive document...");
    }
    }

    // Proxy (Protection Proxy)
    class DocumentProxy {
    constructor(document, password) {
        this.document = document;
        this.password = password;
    }

    access() {
        if (this.authenticate()) {
        this.document.access();
        } else {
        console.log("Access denied!");
        }
    }

    authenticate() {
        // Simulate authentication (replace with real authentication)
        const password = prompt("Enter password:");
        return password === this.password;
    }
    }


    // Client code
    const document = new Document();
    const proxy = new DocumentProxy(document, "secret");

    proxy.access(); // Prompts for password; if correct, accesses document; otherwise denies access.
### 3. Удаленный прокси-сервер: обеспечивает локальное представление объекта в другом адресном пространстве (например, на удаленном сервере).

    //Real Subject (on a remote server)
    class Service {
    request() {
        return "Response from remote service";
    }
    }


    // Proxy (Remote Proxy)
    class ServiceProxy {
    constructor() {
        this.service = new Service(); // Simulate obtaining a remote service instance
    }

    request() {
        console.log("Making remote request...");
        return this.service.request();
    }
    }

    // Client code
    const proxy = new ServiceProxy();
    console.log(proxy.request()); // Making remote request... Response from remote service

Шаблон проектирования `«Прокси»` — это эффективный способ добавить функциональность объекту, не изменяя его структуру, и контролировать доступ к объектам. Выберите тип прокси (виртуальный, защитный, удалённый и т. д.), который лучше всего соответствует вашим потребностям. Приведённые выше примеры упрощены, и в реальных реализациях может использоваться более сложная логика для загрузки ресурсов, аутентификации или сетевого взаимодействия. Обработка ошибок также будет иметь решающее значение в рабочей среде.
