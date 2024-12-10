// Subsystem classes (complex components)
class SubsystemA {
    operationA() {
        return "SubsystemA: OperationA";
    }
    }
    
    class SubsystemB {
    operationB() {
        return "SubsystemB: OperationB";
    }
    }
    
    class SubsystemC {
    operationC() {
        return "SubsystemC: OperationC";
    }
    }
    
    
    // Facade (simplified interface)
    class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }
    
    complexOperation() {
        return (
        this.subsystemA.operationA() +
        "\n" +
        this.subsystemB.operationB() +
        "\n" +
        this.subsystemC.operationC()
        );
    }
    }
    
    // Client code
    const facade = new Facade();
    console.log(facade.complexOperation());
    // Expected Output:
    // SubsystemA: OperationA
    // SubsystemB: OperationB
    // SubsystemC: OperationC