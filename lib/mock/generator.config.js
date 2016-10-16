var structure = {
  files: ["index.js", "app.module.js", "app.component.js", "app.component.html", "app.component.css"],
  component: {
    "files": ["%cName%.js", "%cName%.css", "%cName%.hbs"]
  }
};

module.exports = {
  "interpolationIdentifier": "%",
  "structure": structure,
  "component": structure.component
};