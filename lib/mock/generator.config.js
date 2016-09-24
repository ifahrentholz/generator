var structure = {
  "core": {
    "assets": {},
    "data": {},
    "javascripts": {},
    "stylesheets": {},
    "templates": {}
  },
  "components": {
    "componentA": {
      "files": ["js.js", "style.css", "template.hbs"]
    },
    "__boilerplate": {
      "%component%": {
        "files": ["%component%.js", "%component%.scss", "%component%.hbs"]
      }
    },
    "componentB": {
      "__boilerplate": {
        "files": ["f1.js", "f2.js"]
      }
    }
  }
};

module.exports = {
  "boilerplateIdentifier": "__",
  "boilerplateReplaceIdentifier": "%",
  "structure": structure
};