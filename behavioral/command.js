class Command {
    constructor(receiver, action) {
        this.receiver = receiver;
        this.action = action;
    }
    
    execute() {
        this.receiver[this.action]();
    }
    }
    
    class Receiver {
    action1() {
        console.log("Action 1 executed");
    }
    
    action2() {
        console.log("Action 2 executed");
    }
    }
    
    const receiver = new Receiver();
    const command1 = new Command(receiver, 'action1');
    const command2 = new Command(receiver, 'action2');
    
    command1.execute(); // Action 1 executed
    command2.execute(); // Action 2 executed