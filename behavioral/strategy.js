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