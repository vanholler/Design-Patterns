class Database {
    constructor() {
        if (!Database.instance) {
        Database.instance = this;
        this.connection = 'Database connection established'; // Симулируем подключение
        }
        return Database.instance;
    }
    
    query(sql) {
        console.log(`Executing query: ${sql} on ${this.connection}`);
    }
    }
    
    const db1 = new Database();
    const db2 = new Database();
    
    console.log(db1 === db2); // true — это один и тот же экземпляр
    db1.query('SELECT * FROM users');