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