// Abstract Expression
class Expression {
    interpret() {
        throw new Error('Interpret method must be implemented.');
    }
    }
    
    // Terminal Expressions (representing numbers)
    class NumberExpression extends Expression {
    constructor(number) {
        super();
        this.number = number;
    }
    
    interpret() {
        return this.number;
    }
    }
    
    // Non-terminal expressions (representing operations)
    class AddExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    
    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
    }
    
    class SubtractExpression extends Expression {
        constructor(left, right) {
            super();
            this.left = left;
            this.right = right;
        }
    
        interpret() {
            return this.left.interpret() - this.right.interpret();
        }
    }
    
    
    // Client code (builds and interprets the expression)
    const expression = new AddExpression(
    new NumberExpression(10),
    new AddExpression(new NumberExpression(5), new NumberExpression(3))
    );
    
    const result = expression.interpret();
    console.log("Result:", result); // Result: 18
    
    
    const expression2 = new SubtractExpression(
        new NumberExpression(10),
        new AddExpression(new NumberExpression(5), new NumberExpression(3))
    );
    
    const result2 = expression2.interpret();
    console.log("Result:", result2); // Result: 2