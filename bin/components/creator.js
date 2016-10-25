"use strict";
var Creator = (function () {
    function Creator() {
    }
    Creator.prototype.generate = function (cName, target, structure) {
        this.cName = cName;
        this.structure = structure;
        this.target = target;
        var _file, _folder, _fileName;
        if (!target) {
            target = cName + "/";
        }
        console.log("should generate:", cName);
    };
    return Creator;
}());
exports.Creator = Creator;
