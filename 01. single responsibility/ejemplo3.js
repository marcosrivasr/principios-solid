class StorageModule {
  constructor() {
    this.data = [];
  }

  addItem(item) {
    this.data.push(item);
  }

  processItems() {
    const processedData = this.data.map((item) => item.toUpperCase());
    console.log("Processed items:", processedData);
  }
}

// Uso
const storage = new StorageModule();
storage.addItem("apple");
storage.addItem("banana");
storage.processItems();
