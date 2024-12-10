class ChatMediator {
    constructor() {
        this.users = {};
    }

    addUser(user) {
        this.users[user.name] = user;
    }

    sendMessage(sender, message) {
        for (const user in this.users) {
            if (user !== sender.name) {
                this.users[user].receiveMessage(sender, message);
            }
        }
    }
}

class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    sendMessage(message) {
        this.mediator.sendMessage(this, message);
    }

    receiveMessage(sender, message) {
        console.log(`${sender.name} to ${this.name}: ${message}`);
    }
}


const mediator = new ChatMediator();
const user1 = new User('User1', mediator);
const user2 = new User('User2', mediator);

mediator.addUser(user1);
mediator.addUser(user2);

user1.sendMessage('Hello!');
user2.sendMessage('Hi there!');