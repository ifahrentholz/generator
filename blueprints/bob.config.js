module.exports = {
  folderStructure: {
    components: {
      /**
       * You can specify sources for each file if it's different from the default value.
       * Default value would be the singularized string of the folderStructure key.
       *
       * For example: component
       *
       * If no source could be found an empty file will be created.
       */
      files: [{
        file: "%cName%.spec.js",
        source: "component"
      }, {
        file: "%cName%.js",
        source: "component"
      }, {
        file: "%cName%.hbs",
        source: "component"
      }],


    },
    stylesheets: {
      "files": ["%cName%.css"]
    },
    layout: {
      files: ["%cName.hbs%"],
    },
    example: {
      files: ["%cName%.spec.js", "%cName%.js", "%cName%.hbs"],
    }
  }
};
