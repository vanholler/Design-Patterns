// Component (interface)
class Component {
    operation() {
        throw new Error('Method "operation" must be implemented.');
    }
    
    add(component) {
        throw new Error('Method "add" must be implemented.');
    }
    
    remove(component) {
        throw new Error('Method "remove" must be implemented.');
    }
    
    getChild(i) {
        throw new Error('Method "getChild" must be implemented.');
    }
    }
    
    // Leaf (concrete component)
    class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
    }
    
    operation() {
        return `Leaf: ${this.name}`;
    }
    
    add(component) {
        throw new Error("Cannot add to a leaf node.");
    }
    
    remove(component) {
        throw new Error("Cannot remove from a leaf node.");
    }
    
    getChild(i) {
        throw new Error("Leaf node has no children.");
    }
    }
    
    // Composite (concrete component)
    class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }
    
    operation() {
        let results = `Composite: ${this.name}\n`;
        this.children.forEach((child) => {
        results += `  ${child.operation()}\n`;
        });
        return results;
    }
    
    add(component) {
        this.children.push(component);
    }
    
    remove(component) {
        this.children = this.children.filter((child) => child !== component);
    }
    
    getChild(i) {
        return this.children[i];
    }
    }
    
    // Client code
    const root = new Composite("root");
    const branch1 = new Composite("branch1");
    const leaf1 = new Leaf("leaf1");
    const leaf2 = new Leaf("leaf2");
    const branch2 = new Composite("branch2");
    const leaf3 = new Leaf("leaf3");
    
    root.add(branch1);
    branch1.add(leaf1);
    branch1.add(leaf2);
    root.add(branch2);
    branch2.add(leaf3);
    
    console.log(root.operation());
    // Expected Output:
    // Composite: root
    //   Composite: branch1
    //     Leaf: leaf1
    //     Leaf: leaf2
    //   Composite: branch2
    //     Leaf: leaf3