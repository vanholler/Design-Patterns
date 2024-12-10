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