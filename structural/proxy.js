// Real Subject (the object the proxy represents)
class Image {
    constructor(filename) {
        this.filename = filename;
        this.bitmap = this.loadBitmap(filename); // Expensive operation
        console.log(`Image ${filename} loaded.`);
    }
    
    loadBitmap(filename) {
        // Simulate loading a bitmap (replace with actual loading logic)
        console.log(`Loading bitmap for ${filename}...`);
        return "Bitmap data for " + filename;
    }
    
    display() {
        console.log(`Displaying ${this.filename}: ${this.bitmap}`);
    }
    }
    
    // Proxy (Virtual Proxy)
    class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.image = null;
    }
    
    display() {
        if (!this.image) {
        this.image = new Image(this.filename);
        }
        this.image.display();
    }
    }
    
    
    // Client code
    const proxy = new ImageProxy("largeImage.jpg");
    proxy.display(); // Image largeImage.jpg loaded.  Displaying largeImage.jpg: Bitmap data for largeImage.jpg
    proxy.display(); // Displaying largeImage.jpg: Bitmap data for largeImage.jpg (no reloading)


    // другие примеры в md файле