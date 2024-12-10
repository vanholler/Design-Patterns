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