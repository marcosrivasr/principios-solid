// Interface segregation in TypeScript
interface PrintableAndScanner {
  print(): void;
  scan(): void;
}

class SimplePrinter implements PrintableAndScanner {
  print() {
    console.log("Printing...");
  }

  scan() {
    throw new Error("Method not implemented.");
  }
}

class SimpleScanner implements PrintableAndScanner {
  scan() {
    console.log("Scanning...");
  }

  print() {
    throw new Error("Method not implemented.");
  }
}
