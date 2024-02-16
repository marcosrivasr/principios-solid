function addRichTextElement(content, elementType, level) {
  if (elementType === "paragraph") {
    console.log(`<p>${content}</p>`);
  } else if (elementType === "heading") {
    console.log(`<h${level}>${content}</h${level}>`);
  } else {
    console.log("Unsupported element type.");
  }
}

addRichTextElement("This is a simple paragraph.", "paragraph");
addRichTextElement("Heading 1", "heading", 1);
