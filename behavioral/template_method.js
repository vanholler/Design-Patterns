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