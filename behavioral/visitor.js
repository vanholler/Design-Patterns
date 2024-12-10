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