export const projectStructure = {
  files: ["index.js", "app.module.js", "app.component.js", "app.component.html", "app.component.css"],
  components: {
    "files": ["%cName%.js", "%cName%.css", "%cName%.hbs"]
  },
  services: {
    "files": ["%cName%.js", "%cName%.spec.js"]
  }
};
export const generators = {
  component: {
    path: "./components",
    "files": ["%cName%.js", "%cName%.css", "%cName%.hbs"]
  },
  services: {
    path: "./services",
    "files": ["%cName%.js", "%cName%.spec.js"]
  }
};
