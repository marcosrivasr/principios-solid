// Interface segregation in TypeScript
interface Printable {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class SimplePrinter implements Printable {
  print() {
    console.log("Printing...");
  }
}

class SimpleScanner implements Scanner {
  scan() {
    console.log("Scanning...");
  }
}
