function addParagraph(content) {
  console.log(`<p>${content}</p>`);
}

function addHeading(content, level) {
  console.log(`<h${level}>${content}</h${level}>`);
}

function addImage(src, alt) {
  console.log(`<img src="${src}" alt="${alt}" />`);
}

addParagraph("This is a simple paragraph.");
addHeading("Heading 1", 1);
addImage("image.jpg", "Image Alt Text");
