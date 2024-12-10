class Document {
    print() {
        throw new Error('Method "print" must be implemented.');
    }
    }
    
    class PDFDocument extends Document {
    print() {
        console.log('Printing PDF...');
    }
    }
    
    class WordDocument extends Document {
    print() {
        console.log('Printing Word document...');
    }
    }
    
    class DocumentFactory {
    createDocument(type) {
        switch (type) {
        case 'pdf': return new PDFDocument();
        case 'word': return new WordDocument();
        default: throw new Error('Invalid document type.');
        }
    }
    }
    
    const factory = new DocumentFactory();
    const pdf = factory.createDocument('pdf');
    pdf.print(); // Printing PDF...