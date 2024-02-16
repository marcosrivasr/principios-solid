class StorageModule {
  constructor(dataProcessor) {
    this.data = [];
    this.dataProcessor = dataProcessor;
  }

  addItem(item) {
    this.data.push(item);
  }

  processItems() {
    this.dataProcessor.process(this.data);
  }
}

class DataProcessor {
  process(data) {
    const processedData = data.map((item) => item.toUpperCase());
    console.log("Processed items:", processedData);
  }
}

// Uso
const dataProcessor = new DataProcessor();
const storage = new StorageModule(dataProcessor);
storage.addItem("apple");
storage.addItem("banana");
storage.processItems();
