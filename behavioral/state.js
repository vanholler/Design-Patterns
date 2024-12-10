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