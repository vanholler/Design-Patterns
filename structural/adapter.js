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


// другие примеры в md файле