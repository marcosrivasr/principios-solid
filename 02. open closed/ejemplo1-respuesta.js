// Base class
class RichTextElement {
  constructor(content) {
    this.content = content;
  }

  render() {
    console.log("Abstract method: Rendering a rich text element");
  }
}

// Subclase
class Paragraph extends RichTextElement {
  constructor(content) {
    super(content);
  }

  render() {
    console.log(`<p>${this.content}</p>`);
  }
}

// Subclass for headings, extending the RichTextElement class
class Heading extends RichTextElement {
  constructor(content, level) {
    super(content);
    this.level = level;
  }

  render() {
    console.log(`<h${this.level}>${this.content}</h${this.level}>`);
  }
}

class Editor {
  constructor() {
    this.document = [];
  }

  addElement(element) {
    this.document.push(element);
  }

  renderDocument() {
    console.log("Rendering the document:");
    this.document.forEach((element) => {
      element.render();
    });
  }
}

// Uso
const editor = new Editor();

const paragraph = new Paragraph("This is a simple paragraph.");
const heading = new Heading("Heading 1", 1);

editor.addElement(paragraph);
editor.addElement(heading);

editor.renderDocument();
