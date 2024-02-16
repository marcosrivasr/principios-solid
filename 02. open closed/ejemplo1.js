class ModifiedEditor {
  constructor() {
    this.document = [];
  }

  addElement(content, elementType, level) {
    if (elementType === "paragraph") {
      this.document.push(`<p>${content}</p>`);
    } else if (elementType === "heading") {
      this.document.push(`<h${level}>${content}</h${level}>`);
    } else {
      console.log("Unsupported element type.");
    }
  }

  renderDocument() {
    console.log("Rendering the document:");
    this.document.forEach((element) => {
      console.log(element);
    });
  }
}

// Uso
const modifiedEditor = new ModifiedEditor();

modifiedEditor.addElement("This is a simple paragraph.", "paragraph");
modifiedEditor.addElement("Heading 1", "heading", 1);

modifiedEditor.renderDocument();
