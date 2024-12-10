class Subject {
    constructor() {
        this.observers = [];
    }
    
    attach(observer) {
        this.observers.push(observer);
    }
    
    detach(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    
    notify() {
        this.observers.forEach((observer) => observer.update(this));
    }
    }
    
    
    class Observer {
    update(subject) {
        throw new Error('Method "update" must be implemented.');
    }
    }
    
    class ConcreteObserver extends Observer {
    update(subject) {
        console.log(`Observer received notification: ${subject.state}`);
    }
    }
    
    const subject = new Subject();
    const observer1 = new ConcreteObserver();
    const observer2 = new ConcreteObserver();
    
    subject.attach(observer1);
    subject.attach(observer2);
    
    subject.state = 'State changed';
    subject.notify(); // Observer received notification: State changed (twice)