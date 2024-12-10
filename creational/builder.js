class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
    }
    
    class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza('', '', []);
    }
    
    setSize(size) {
        this.pizza.size = size;
        return this;
    }
    
    setCrust(crust) {
        this.pizza.crust = crust;
        return this;
    }
    
    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this;
    }
    
    build() {
        return this.pizza;
    }
    }
    
    const builder = new PizzaBuilder();
    const pizza1 = builder.setSize('large').setCrust('thin').addTopping('pepperoni').addTopping('mushrooms').build();
    console.log(pizza1); // Pizza { size: 'large', crust: 'thin', toppings: [ 'pepperoni', 'mushrooms' ] }
    
    const pizza2 = builder.setSize('small').setCrust('thick').addTopping('cheese').build();
    console.log(pizza2); // Pizza { size: 'small', crust: 'thick', toppings: [ 'cheese' ] }