# Примеры поведенческих шаблонов проектирования ООП на JavaScript

## 1. Цепочка обязанностей:

Позволяет избежать привязки отправителя запроса к его получателю, предоставляя нескольким объектам возможность обработать запрос. Объединяет получающие объекты в цепочку и передаёт запрос по цепочке, пока его не обработает какой-либо объект.

    class Handler {
    setNext(nextHandler) {
        this.nextHandler = nextHandler;
        return nextHandler;
    }

    handle(request) {
        if (this.nextHandler) {
        return this.nextHandler.handle(request);
        }
        return null; // No handler found
    }
    }

    class ConcreteHandler1 extends Handler {
    handle(request) {
        if (request >= 0 && request <= 10) {
        console.log("ConcreteHandler1 handled request:", request);
        return request;
        }
        return super.handle(request);
    }
    }

    class ConcreteHandler2 extends Handler {
    handle(request) {
        if (request > 10 && request <= 20) {
        console.log("ConcreteHandler2 handled request:", request);
        return request;
        }
        return super.handle(request);
    }
    }

    const handler1 = new ConcreteHandler1();
    const handler2 = new ConcreteHandler2();
    handler1.setNext(handler2);

    console.log(handler1.handle(5)); // ConcreteHandler1 handled request: 5 -> 5
    console.log(handler1.handle(15)); // ConcreteHandler2 handled request: 15 -> 15
    console.log(handler1.handle(25)); // null - No handler found

## 2. Команда:

Инкапсулирует запрос в виде объекта, позволяя тем самым параметризировать клиентов с помощью различных запросов, помещать запросы в очередь или журнал и поддерживать операции с возможностью отмены.

    class Command {
    constructor(receiver, action) {
        this.receiver = receiver;
        this.action = action;
    }

    execute() {
        this.receiver[this.action]();
    }
    }

    class Receiver {
    action1() {
        console.log("Action 1 executed");
    }

    action2() {
        console.log("Action 2 executed");
    }
    }

    const receiver = new Receiver();
    const command1 = new Command(receiver, 'action1');
    const command2 = new Command(receiver, 'action2');

    command1.execute(); // Action 1 executed
    command2.execute(); // Action 2 executed

## 3. Наблюдатель(observer):

Определяет зависимость «один ко многим» между объектами, чтобы при изменении состояния одного объекта все зависимые объекты получали уведомления и автоматически обновлялись.

    class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify() {
        this.observers.forEach((observer) => observer.update(this));
    }
    }


    class Observer {
    update(subject) {
        throw new Error('Method "update" must be implemented.');
    }
    }

    class ConcreteObserver extends Observer {
    update(subject) {
        console.log(`Observer received notification: ${subject.state}`);
    }
    }

    const subject = new Subject();
    const observer1 = new ConcreteObserver();
    const observer2 = new ConcreteObserver();

    subject.attach(observer1);
    subject.attach(observer2);

    subject.state = 'State changed';
    subject.notify(); // Observer received notification: State changed (twice)

## 4. Итератор:

Обеспечивает последовательный доступ к элементам совокупного объекта без раскрытия его внутреннего представления.

    class Iterator {
        constructor(collection) {
            this.index = 0;
            this.collection = collection;
        }

        next() {
            if (this.index < this.collection.length) {
                return {
                    done: false,
                    value: this.collection[this.index++]
                };
            } else {
                return { done: true };
            }
        }
    }

    const collection = [1, 2, 3, 4, 5];
    const iterator = new Iterator(collection);

    let next = iterator.next();
    while (!next.done) {
        console.log(next.value); // Outputs 1, 2, 3, 4, 5
        next = iterator.next();
    }

## 5. Посредник(mediator):

Определяет объект, который инкапсулирует взаимодействие набора объектов. Способствует слабой связанности, не позволяя объектам явно ссылаться друг на друга, и позволяет независимо изменять их взаимодействие.

    class ChatMediator {
        constructor() {
            this.users = {};
        }

        addUser(user) {
            this.users[user.name] = user;
        }

        sendMessage(sender, message) {
            for (const user in this.users) {
                if (user !== sender.name) {
                    this.users[user].receiveMessage(sender, message);
                }
            }
        }
    }

    class User {
        constructor(name, mediator) {
            this.name = name;
            this.mediator = mediator;
        }

        sendMessage(message) {
            this.mediator.sendMessage(this, message);
        }

        receiveMessage(sender, message) {
            console.log(`${sender.name} to ${this.name}: ${message}`);
        }
    }


    const mediator = new ChatMediator();
    const user1 = new User('User1', mediator);
    const user2 = new User('User2', mediator);

    mediator.addUser(user1);
    mediator.addUser(user2);

    user1.sendMessage('Hello!');
    user2.sendMessage('Hi there!');

## 6. Состояние(State):

Позволяет объекту изменять своё поведение при изменении внутреннего состояния. Объект будет выглядеть так, как будто он сменил свой класс.

    class State {
        handle(context) {
            throw new Error("Method 'handle' must be implemented.");
        }
    }

    class ConcreteStateA extends State {
        handle(context) {
            console.log("Handling state A");
            context.transitionTo(new ConcreteStateB());
        }
    }

    class ConcreteStateB extends State {
        handle(context) {
            console.log("Handling state B");
            context.transitionTo(new ConcreteStateA());
        }
    }

    class Context {
        constructor() {
            this.state = new ConcreteStateA();
        }

        transitionTo(state) {
            this.state = state;
        }

        handle() {
            this.state.handle(this);
        }
    }


    const context = new Context();
    context.handle(); // Handling state A
    context.handle(); // Handling state B
    context.handle(); // Handling state A

## 7. Стратегия:

Определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми. Позволяет изменять алгоритм независимо от клиентов, которые его используют.

    class Strategy {
    execute(data) {
        throw new Error('Method "execute" must be implemented.');
    }
    }

    class ConcreteStrategyA extends Strategy {
    execute(data) {
        console.log("ConcreteStrategyA:", data * 2);
    }
    }

    class ConcreteStrategyB extends Strategy {
    execute(data) {
        console.log("ConcreteStrategyB:", data + 10);
    }
    }

    class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        this.strategy.execute(data);
    }
    }


    const context = new Context(new ConcreteStrategyA());
    context.executeStrategy(5); // ConcreteStrategyA: 10

    context.setStrategy(new ConcreteStrategyB());
    context.executeStrategy(5); // ConcreteStrategyB: 15

## 8. Шаблонный метод:

Определяет структуру алгоритма в операции, передавая некоторые этапы подклассам. Позволяет подклассам переопределять определённые этапы алгоритма без изменения его структуры.

    class AbstractClass {
    templateMethod() {
        this.baseOperation1();
        this.requiredOperations();
        this.baseOperation2();
    }

    baseOperation1() {
        console.log("Base operation 1");
    }

    requiredOperations() {
        throw new Error("Method 'requiredOperations' must be implemented.");
    }

    baseOperation2() {
        console.log("Base operation 2");
    }
    }

    class ConcreteClassA extends AbstractClass {
        requiredOperations() {
            console.log("Concrete operation A");
        }
    }

    class ConcreteClassB extends AbstractClass {
        requiredOperations() {
            console.log("Concrete operation B");
        }
    }

    const concreteA = new ConcreteClassA();
    concreteA.templateMethod(); //Base operation 1 Concrete operation A Base operation 2

    const concreteB = new ConcreteClassB();
    concreteB.templateMethod(); //Base operation 1 Concrete operation B Base operation 2

## 9. Посетитель ( visitor):
Шаблон «Посетитель» полезен, когда у вас есть коллекция объектов и вы хотите выполнять с ними различные операции, не изменяя сами классы объектов. Для добавления новых операций достаточно добавить новый класс-посетитель, что позволяет сохранить чистоту классов объектов и лучше разделить задачи. В примере показано, как разные посетители могут выполнять различные операции с одними и теми же элементами. Это мощный шаблон для расширения возможностей.

    // Elements to visit
    class ConcreteElementA {
    constructor(value) {
        this.value = value;
    }

    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }
    }

    class ConcreteElementB {
    constructor(value) {
        this.value = value;
    }

    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }
    }


    // Visitor interface
    class Visitor {
    visitConcreteElementA(element) {
        throw new Error("Method 'visitConcreteElementA' must be implemented.");
    }
    visitConcreteElementB(element) {
        throw new Error("Method 'visitConcreteElementB' must be implemented.");
    }
    }


    // Concrete visitors
    class ConcreteVisitor1 extends Visitor {
    visitConcreteElementA(element) {
        console.log("ConcreteVisitor1 visiting ConcreteElementA:", element.value * 2);
    }
    visitConcreteElementB(element) {
        console.log("ConcreteVisitor1 visiting ConcreteElementB:", element.value + 10);
    }
    }

    class ConcreteVisitor2 extends Visitor {
    visitConcreteElementA(element) {
        console.log("ConcreteVisitor2 visiting ConcreteElementA:", element.value.toUpperCase());
    }
    visitConcreteElementB(element) {
        console.log("ConcreteVisitor2 visiting ConcreteElementB:", element.value.toLowerCase());
    }
    }


    // Client code
    const elementA = new ConcreteElementA("Hello");
    const elementB = new ConcreteElementB(15);

    const visitor1 = new ConcreteVisitor1();
    const visitor2 = new ConcreteVisitor2();

    elementA.accept(visitor1); // ConcreteVisitor1 visiting ConcreteElementA: HelloHello
    elementB.accept(visitor1); // ConcreteVisitor1 visiting ConcreteElementB: 25

    elementA.accept(visitor2); // ConcreteVisitor2 visiting ConcreteElementA: HELLO
    elementB.accept(visitor2); // ConcreteVisitor2 visiting ConcreteElementB: 15

## 10. Интерпретатор:
Шаблон «Интерпретатор» используется для интерпретации предложений или выражений на определённом языке. Он полезен, когда нужно реализовать простой язык или обрабатывать выражения структурированным образом. Вот пример шаблона «Интерпретатор» на JavaScript, который вычисляет простые арифметические выражения:

    // Abstract Expression
    class Expression {
    interpret() {
        throw new Error('Interpret method must be implemented.');
    }
    }

    // Terminal Expressions (representing numbers)
    class NumberExpression extends Expression {
    constructor(number) {
        super();
        this.number = number;
    }

    interpret() {
        return this.number;
    }
    }

    // Non-terminal expressions (representing operations)
    class AddExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
    }

    class SubtractExpression extends Expression {
        constructor(left, right) {
            super();
            this.left = left;
            this.right = right;
        }

        interpret() {
            return this.left.interpret() - this.right.interpret();
        }
    }


    // Client code (builds and interprets the expression)
    const expression = new AddExpression(
    new NumberExpression(10),
    new AddExpression(new NumberExpression(5), new NumberExpression(3))
    );

    const result = expression.interpret();
    console.log("Result:", result); // Result: 18


    const expression2 = new SubtractExpression(
        new NumberExpression(10),
        new AddExpression(new NumberExpression(5), new NumberExpression(3))
    );

    const result2 = expression2.interpret();
    console.log("Result:", result2); // Result: 2

`Expression` (Абстрактный класс): базовый класс для всех выражений. Он определяет метод interpret(), который должен быть реализован в подклассах.

`NumberExpression` (Терминальное выражение): представляет собой число в выражении. Его interpret() метод просто возвращает число.

`AddExpression/SubtractExpression` (Нетерминальные выражения): представляют операции. Их interpret() методы рекурсивно интерпретируют левые и правые подвыражения и выполняют соответствующую операцию.

Клиентский код: клиентский код создаёт дерево выражений (используя классы `NumberExpression, AddExpression и SubtractExpression`), а затем вызывает метод interpret() для его вычисления. Метод interpret() рекурсивно вычисляет дерево выражений.

## 11. Хранитель(memento):
Шаблон «Хранитель» особенно полезен для реализации функций отмены/повторения, контроля версий или в любой ситуации, когда необходимо сохранять и восстанавливать состояние объекта. В примере показано, как сохранять различные состояния, а затем восстанавливать предыдущее состояние. Memento является внутренней деталью реализации Originator и не отображается в других частях приложения, кроме Caretaker. Это обеспечивает инкапсуляцию и предотвращает прямое управление сохранёнными состояниями.

    // Originator (object whose state needs to be saved)
    class Originator {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    restoreFromMemento(memento) {
        this.state = memento.getState();
    }
    }

    // Memento (stores a snapshot of the originator's state)
    class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
    }

    // Caretaker (responsible for managing mementos)
    class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
    }

    // Client code
    const originator = new Originator("Initial State");
    const caretaker = new Caretaker();

    caretaker.addMemento(originator.createMemento()); // Save initial state

    originator.setState("State 1");
    caretaker.addMemento(originator.createMemento()); //Save State 1

    originator.setState("State 2");
    caretaker.addMemento(originator.createMemento()); // Save State 2

    console.log("Current State:", originator.getState()); // State 2


    originator.restoreFromMemento(caretaker.getMemento(1)); // Restore State 1
    console.log("Restored State:", originator.getState());  // State 1

    originator.restoreFromMemento(caretaker.getMemento(0)); // Restore initial state
    console.log("Restored State:", originator.getState()); // Initial State


`Originator`: Этот класс представляет объект, состояние которого необходимо сохранять. Он содержит методы для получения и установки состояния, создания снимка (моментального снимка) и восстановления состояния из снимка.

`Memento`: Этот класс хранит снимок состояния создателя. Это неизменяемый объект; Хранитель управляет этими объектами.

`Caretaker`: Этот класс отвечает за управление памятными вещами. Он хранит их и предоставляет методы для их добавления и извлечения. Он не знает подробностей о содержимом памятных вещей.
