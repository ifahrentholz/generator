/**
 * ============================================================================
 * DESCRIPTION:
 * ============================================================================
 *
 * You can specify sources for each file if it's different
 * from the default value.
 * Default value would be the singularized string of the folderStructure key.
 *
 * If no source could be found an empty file will be created.
 *
 *
 * ============================================================================
 * EXAMPLE:
 * ============================================================================
 *
 * folderStructure: {
 *   components: {
 *     files: [{
 *       file: "%cName%.spec.js",
 *       source: "component/template.spec.js"
 *     }, {
 *       file: "%cName%.js",
 *       source: "component/template.js"
 *     }, {
 *       file: "%cName%.hbs",
 *       source: "component/template.hbs"
 *     }],
 *
 *
 *   },
 *   stylesheets: {
 *     "files": ["%cName%.css"]
 *   },
 *   layout: {
 *     files: ["%cName.hbs%"],
 *   },
 *   example: {
 *     files: ["%cName%.spec.js", "%cName%.js", "%cName%.hbs"],
 *   }
 * }
 * 
 *
 */

module.exports = {
  folderStructure: {
    components: {
      files: [{
        file: "%cName%.spec.js",
        source: "component/template.spec.js"
      }, {
        file: "%cName%.js",
        source: "component/template.js"
      }, {
        file: "%cName%.hbs",
        source: "component/template.hbs"
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
