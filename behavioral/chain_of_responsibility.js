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