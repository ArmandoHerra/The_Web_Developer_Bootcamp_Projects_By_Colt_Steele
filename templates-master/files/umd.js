/**
 * @author <name>, <year>
 * @license <license>
 * @file Supports module (AMD/CJS) and window use.
 */

(function (win) {
  "use strict";

  /**
   * Defines the modular object. Do not rename this function as it is used as
   * the export for modules and the window object. Place all logic inside this
   * function and pass in dependencies as arguments.
   */
  function modular() {
    var MyClass;

    /**
     * [[Description]]
     * @class
     */
    MyClass = function () {
      //start here
    };

    return MyClass;
  }

  //========================================================================================

  /**
   * Adds support for module and window use. Pass in dependency paths into the modulePaths
   * array and include the matching window object paths in the windowObjects array. The
   * windowName param expects your Class name. No need to edit anything in the if statement.
   */
  var modulesPaths = [],
      windowObjects = [],
      windowName = "MyClass";

  if ((win.define || {}).amd) {
    win.define(modulesPaths, function () { return modular.apply(null, arguments); });
  } else if (typeof module === "object" && module.exports) {
    modulesPaths.forEach(function (el, i) { modulesPaths[i] = require(el); });
    module.exports = modular.apply(null, modulesPaths);
  } else {
    win[windowName] = modular.apply(null, windowObjects);
  }
}(this));
