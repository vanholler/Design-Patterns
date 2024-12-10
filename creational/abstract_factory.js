// Элементы пользовательского интерфейса для стиля, подобного Windows
class WindowsButton {
    render() {
        console.log('Rendering Windows button...');
    }
}

class WindowsCheckbox {
    render() {
        console.log('Rendering Windows checkbox...');
    }
}


// Элементы пользовательского интерфейса для стиля, подобного MacOS
class MacButton {
    render() {
        console.log('Rendering MacOS button...');
    }
}

class MacCheckbox {
    render() {
        console.log('Rendering MacOS checkbox...');
    }
}


class UIWidgetFactory {
    createButton() {
        throw new Error('Method "createButton" must be implemented.');
    }

    createCheckbox() {
        throw new Error('Method "createCheckbox" must be implemented.');
    }
}

class WindowsUIWidgetFactory extends UIWidgetFactory {
    createButton() {
        return new WindowsButton();
    }

    createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacUIWidgetFactory extends UIWidgetFactory {
    createButton() {
        return new MacButton();
    }

    createCheckbox() {
        return new MacCheckbox();
    }
}


const windowsFactory = new WindowsUIWidgetFactory();
const windowsButton = windowsFactory.createButton();
windowsButton.render(); // Rendering Windows button...


const macFactory = new MacUIWidgetFactory();
const macButton = macFactory.createButton();
macButton.render(); // Rendering MacOS button...