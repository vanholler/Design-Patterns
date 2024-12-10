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