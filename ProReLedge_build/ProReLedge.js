/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/INDEX.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/INDEX.js":
/*!**********************!*\
  !*** ./src/INDEX.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProReLedgeLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProReLedgeLibrary */ "./src/ProReLedgeLibrary.js");


(function () {
  if (typeof window.ReAb === "undefined") window.ReAb = _ProReLedgeLibrary__WEBPACK_IMPORTED_MODULE_0__["ReAb"];
})();

/***/ }),

/***/ "./src/ProReLedgeLibrary.js":
/*!**********************************!*\
  !*** ./src/ProReLedgeLibrary.js ***!
  \**********************************/
/*! exports provided: ReAb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAb", function() { return ReAb; });
/* harmony import */ var _createReAbs_CreateReAbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReAbs/__CreateReAbs.js */ "./src/createReAbs/__CreateReAbs.js");
/* harmony import */ var _select_ReAbSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select/__ReAbSelect.js */ "./src/select/__ReAbSelect.js");


/**  ReAb.create()
 * 
 * @return {ReAbCollectionObjectArray} 
 * 
 * solo certificará que los argumentos sean validos y retornara console.error si no
 * La redirección de los procesos se hará en createReAb() o en una función que convierte el
 * parametro sin importar que sea, y retorna siempre un array con 1 o más objetos dentro para
 * manejar el resultado en ReAb.create()
 * 
 */

var ReAb = {
  create: function create(collection, positionInCollection, objectOrString) {
    if (Array.isArray(collection) && typeof positionInCollection == "string" || Array.isArray(collection) && typeof positionInCollection == "number") {
      // newReAbs debe devolver siempre un array
      var newReAbs = Object(_createReAbs_CreateReAbs_js__WEBPACK_IMPORTED_MODULE_0__["createReAbs"])(objectOrString);
      var collectionCopy = JSON.parse(JSON.stringify(collection)); // esto calibra el valor de positionInCollection para evitar errores

      var positionInCollectionArgument = positionInCollection == "first" ? 0 : positionInCollection == "last" ? collection.length : typeof positionInCollection == "number" && positionInCollection <= collection.length ? positionInCollection : typeof positionInCollection == "number" && positionInCollection > collection.length ? collection.length : 0;

      for (var i = 0; i <= newReAbs.length; i++) {
        collectionCopy.splice(positionInCollectionArgument, 0, newReAbs[i]);

        if (i == newReAbs.length - 1) {
          collectionCopy.map(function (ReAb, index) {
            return ReAb.rank.preferenceOfLearning = index + 1;
          });
          return collectionCopy;
        }
      }
    } else {
      throw console.error('The first argument can be only a "array" and the second argument can be "string" or a "number" for more information visit https://opensourceducation.github.io/ProReLedge/docs');
    }
  },
  select: function select(collection, searchParameters) {
    collection.map(function (ReAb, index) {
      return ReAb.rank.preferenceOfLearning = index + 1;
    });
    return Object(_select_ReAbSelect_js__WEBPACK_IMPORTED_MODULE_1__["ReAbSelect"])(collection, searchParameters);
  },
  score: function score() {},
  share: function share() {},
  convertTo: function convertTo() {}
};

/***/ }),

/***/ "./src/createReAbs/__CreateReAbs.js":
/*!******************************************!*\
  !*** ./src/createReAbs/__CreateReAbs.js ***!
  \******************************************/
/*! exports provided: createReAbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReAbs", function() { return createReAbs; });
/* harmony import */ var _typeValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeValidator.js */ "./src/createReAbs/typeValidator.js");
/* harmony import */ var _argumentValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./argumentValidator.js */ "./src/createReAbs/argumentValidator.js");
/* harmony import */ var _processes_branchInstantiator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processes&branchInstantiator.js */ "./src/createReAbs/processes&branchInstantiator.js");
/* harmony import */ var _branchNamer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branchNamer.js */ "./src/createReAbs/branchNamer.js");



 //////////////////      MAIN      ////////////////////

/** 				createReAbs()                 
 * Función principal que coordina la creación de ReAbs
 * @param {string,object or arrayObjects} contentToTurnIntoReAbs 
 */

var createReAbs = function createReAbs(contentToTurnIntoReAbs) {
  var ReAbPseudoObject = Object(_argumentValidator_js__WEBPACK_IMPORTED_MODULE_1__["argumentValidator"])(contentToTurnIntoReAbs);
  return ReAbPseudoObject.map(function (element) {
    return createReAb(element);
  });
};
/**    					2.-	createReAb()
 * Función que crea uno a uno los ReAbs a partir de un objeto más sencillo
 * 
 * @param {Object ArrayObject} ReAbPseudoObject 
 * @return {ReAbNestedObject}
 */

var createReAb = function createReAb(ReAbPseudoObject) {
  var ReAblicense = ReAbPseudoObject[0].license ? ReAbPseudoObject[0].license : ReAbPseudoObject[0].licencia ? ReAbPseudoObject[0].licencia : "MIT";
  var ReAbType = ReAbPseudoObject[0].type ? ReAbPseudoObject[0].type : ReAbPseudoObject[0].types ? ReAbPseudoObject[0].types : ReAbPseudoObject[0].tipo ? ReAbPseudoObject[0].tipo : ReAbPseudoObject[0].tipos ? ReAbPseudoObject[0].tipos : null;
  var ReAbTags = ReAbPseudoObject[0].tags ? ReAbPseudoObject[0].tags : ReAbPseudoObject[0].tag ? ReAbPseudoObject[0].tag : ReAbPseudoObject[0].etiqueta ? ReAbPseudoObject[0].etiqueta : ReAbPseudoObject[0].etiquetas ? ReAbPseudoObject[0].etiquetas : null;
  var ReAbSchool = ReAbPseudoObject[0].school ? ReAbPseudoObject[0].school : ReAbPseudoObject[0]["school?"] ? ReAbPseudoObject[0]["school?"] : null;
  var ReabIdentificatorOrQr = ReAbPseudoObject[0].identificatorOrQr ? ReAbPseudoObject[0].identificatorOrQr : null;
  var ReAbGroupIdentifier = ReAbPseudoObject[0].groupIdentifier ? ReAbPseudoObject[0].groupIdentifier : null;
  var tagsOfReAb = Object(_typeValidator_js__WEBPACK_IMPORTED_MODULE_0__["typeValidator"])(ReAbType, ReAbTags);
  var ReAbProcess = Object(_processes_branchInstantiator_js__WEBPACK_IMPORTED_MODULE_2__["createReAbProcesses"])(ReAbPseudoObject);
  return ReAbCreator(ReAbProcess, tagsOfReAb, ReAbSchool, ReabIdentificatorOrQr, ReAbGroupIdentifier, ReAblicense);
};
/**     		3.-	ReAbCreator()
 * Retorna el objeto ReAb base sin los procesos ni 
 * bifurcaciones con preguntas y respuestas
 * 
 * @param {ObjectArray} ReAbProcess 
 * @param {Array} tagsOfReAb 
 * @param {Array} ReAbSchool 
 * @param {Array} ReabIdentificatorOrQr 
 * @param {Array} ReAbGroupIdentifier 
 * @param {string} ReAblicense 
 */


var ReAbCreator = function ReAbCreator(ReAbProcess, tagsOfReAb, ReAbSchool, ReabIdentificatorOrQr, ReAbGroupIdentifier, ReAblicense) {
  return {
    "process": ReAbProcess.map(function (process) {
      return Object(_branchNamer_js__WEBPACK_IMPORTED_MODULE_3__["branchNamer"])(process);
    }),
    "rank": {
      "preferenceOfLearning": 1,
      /// EL ORDEN DE PRIORIDAD DE APRENDIZAJE QUE LE DA EL USUARIO
      "turn": 0,
      /// TURNO DE EJECUCIÓN DEL ReAb 
      "priority": null /// ESTE PARAMETRO SOLO SE ACTIVA CON "AAA" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. "AA" y "A" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN "null" NO SE TOMA EN CUENTA.  De la "Z a la U" indican tiempos prolongados de descanso.

    },
    "info": {
      "license": ReAblicense,
      "score": {
        interiorization: 0,
        /// SE PONDERA EL SCORE DE TODOS LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
        allBranchesInteriorization: 0,
        /// SE PONDERA EL SCORE DE TODOS LOS BRANCH DE LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
        frequency: 0,
        /// Se calcula incrementalmente las semanas y periodos trimestrales de uso  ::  decrementa por desuso
        record: [] /// historial de 2 meses de uso basado en días

      },
      "tags": tagsOfReAb,
      /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN
      "school?": ReAbSchool,
      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
      "groupIdentifier?": ReAbGroupIdentifier,
      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
      "identificatorOrQr?": ReabIdentificatorOrQr,
      /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
      "internalization?": null,
      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
      "href?": null,
      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" 
      "route": "1"
    }
  };
};

/***/ }),

/***/ "./src/createReAbs/argumentValidator.js":
/*!**********************************************!*\
  !*** ./src/createReAbs/argumentValidator.js ***!
  \**********************************************/
/*! exports provided: argumentValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentValidator", function() { return argumentValidator; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fastWritingStandardConverter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fastWritingStandardConverter.js */ "./src/createReAbs/fastWritingStandardConverter.js");
/* harmony import */ var _fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fastArrayStandardConverter.js */ "./src/createReAbs/fastArrayStandardConverter.js");
/* harmony import */ var _fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2__);



/**       1.-         argumentValidator()
 * Convierte el argumento del usuario en un array con objetos 
 * que el método createReAbs acepta como argumento
 * 
 * @param {string array or Object} argumentToValidate 
 * @return{array}
 */

var argumentValidator = function argumentValidator(argumentToValidate) {
  if (Array.isArray(argumentToValidate) && argumentToValidate[0] == 1) {
    //let PseudoReAbObject = fastArrayStandardConverter(argumentToValidate);
    return console.log("array fast writing");
  } else if (Array.isArray(argumentToValidate) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(argumentToValidate[0]) == "object") {
    var argumentToValidateCopy = accomodateKeyArgumentsInArrayZero(argumentToValidate);
    return [argumentToValidateCopy];
  } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(argumentToValidate) === "object" && !Array.isArray(argumentToValidate)) {
    return [[argumentToValidate]];
  } else if (typeof argumentToValidate === "string") {
    // let PseudoReAbObject = fastWritingStandardConverter(argumentToValidate);
    return console.log("string :)");
  } else {
    return console.error('The third argument can be only a "string" "array" or an "object" for more information visit https://opensourceducation.github.io/ProReLedge/docs');
  }
};
/**     2.-   accomodateKeyArgumentsInArrayZero()
 * Si hay type, tags, license o identificators fuera del 
 * primer objeto del array, este método los pasa al primer objeto.
 * 
 * @param {array with objects colection} arrayArgument "el mismo argumentToValidate que pasa el usuario"
 * @return {array with objects colection}
 */

var accomodateKeyArgumentsInArrayZero = function accomodateKeyArgumentsInArrayZero(arrayArgument) {
  var arrayArgumentCopy = arrayArgument;
  var ReAbTags = arrayArgument[0].tags ? arrayArgument[0].tags : arrayArgument[0].tag ? arrayArgument[0].tag : arrayArgument[0].etiqueta ? arrayArgument[0].etiqueta : arrayArgument[0].etiquetas ? arrayArgument[0].etiquetas : null;
  var ReAbLicense = arrayArgument[0].license ? arrayArgument[0].license : arrayArgument[0].licencia ? arrayArgument[0].licencia : "MIT";
  var ReAbType = arrayArgument[0].type ? arrayArgument[0].type : arrayArgument[0].types ? arrayArgument[0].types : arrayArgument[0].tipo ? arrayArgument[0].tipo : arrayArgument[0].tipos ? arrayArgument[0].tipos : null;
  var ReAbSchool = arrayArgument[0].school ? arrayArgument[0].school : null;
  var ReabIdentificatorOrQr = arrayArgument[0].identificatorOrQr ? arrayArgument[0].identificatorOrQr : null;
  var ReAbGroupIdentifier = arrayArgument[0].groupIdentifier ? arrayArgument[0].groupIdentifier : null;
  var ternaryElements = [ReAbTags, ReAbLicense, ReAbType, ReAbSchool, ReabIdentificatorOrQr, ReAbGroupIdentifier];
  var objectElements = {
    tags: ReAbTags == null ? [] : Array.isArray(ReAbTags) ? ReAbTags : [ReAbTags],
    license: ReAbLicense == null ? [] : Array.isArray(ReAbLicense) ? ReAbLicense : [ReAbLicense],
    type: ReAbType == null ? [] : Array.isArray(ReAbType) ? ReAbType : [ReAbType],
    school: ReAbSchool == null ? [] : Array.isArray(ReAbSchool) ? ReAbSchool : [ReAbSchool],
    identificatorOrQr: ReabIdentificatorOrQr == null ? [] : Array.isArray(ReabIdentificatorOrQr) ? ReabIdentificatorOrQr : [ReabIdentificatorOrQr],
    groupIdentifier: ReAbGroupIdentifier == null ? [] : Array.isArrary(ReAbGroupIdentifier) ? ReAbGroupIdentifier : [ReAbGroupIdentifier]
  };
  var stringElements = ["tags", "license", "type", "school", "identificatorOrQr", "groupIdentifier"];
  var diferentNamedForParameters = new Array(6);
  diferentNamedForParameters[0] = ["tags", "tag", "etiqueta", "etiquetas"];
  diferentNamedForParameters[1] = ["license", "liscence", "lisence", "licencia"];
  diferentNamedForParameters[2] = ["type", "types", "tipo", "tipos"];
  diferentNamedForParameters[3] = ["school", "escuela", "colegio", "instituto"];
  diferentNamedForParameters[4] = ["id", "Id", "identificator", "identificatorOrQr"];
  diferentNamedForParameters[5] = ["groupIdentifier", "groupId", "groups", "grupos"];

  for (var i = 0; i < ternaryElements.length; i++) {
    objectElements[stringElements[i]] = passDispersedElementsToTheArrayZero(arrayArgument, diferentNamedForParameters[i], objectElements[stringElements[i]]);
    arrayArgumentCopy[0][stringElements[i]] = objectElements[stringElements[i]];

    if (arrayArgumentCopy[0][stringElements[i]] == null) {
      delete arrayArgumentCopy[0][stringElements[i]];
    }

    if (i == ternaryElements.length - 1) {
      return arrayArgumentCopy;
    }
  }
};
/**      3.-  passDispersedElementsToTheArrayZero()
 * Esta funcion itera sobre cada uno de los argumentos de la colección para juntarlos,
 * y entregarlos a la función "accomodateKeyArgumentsInArrayZero"
 * 
 * @param {array with objects colection} objectsArray 
 * @param {bidimensional array} diferentNamedFor 
 * @param {array} outputArray 
 * @return {array}
 */


var passDispersedElementsToTheArrayZero = function passDispersedElementsToTheArrayZero(objectsArray, diferentNamedFor, outputArray) {
  var newOutputArray = outputArray;
  var elementIterator;

  for (var i = 1; i < objectsArray.length; i++) {
    elementIterator = objectsArray[i][diferentNamedFor[0]] ? objectsArray[i][diferentNamedFor[0]] : objectsArray[i][diferentNamedFor[1]] ? objectsArray[i][diferentNamedFor[1]] : objectsArray[i][diferentNamedFor[2]] ? objectsArray[i][diferentNamedFor[2]] : objectsArray[i][diferentNamedFor[3]] ? objectsArray[i][diferentNamedFor[3]] : null;

    if (elementIterator != null) {
      newOutputArray.push(elementIterator);
    }

    if (i == objectsArray.length - 1) {
      if (newOutputArray.length == 0) {
        newOutputArray = null;
      }

      return newOutputArray;
    }
  }
};

/***/ }),

/***/ "./src/createReAbs/branchNamer.js":
/*!****************************************!*\
  !*** ./src/createReAbs/branchNamer.js ***!
  \****************************************/
/*! exports provided: branchNamer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branchNamer", function() { return branchNamer; });
var branchNamer = function branchNamer(process) {
  if (process.branch == null) {
    return process;
  } else {
    return processIdBranchNamer(process);
  }
};

var processIdBranchNamer = function processIdBranchNamer(process) {
  var totalBranches = parseInt(process.branch.length) + 1;
  var processNumber = process.processId;
  process.processId = processNumber + ", " + 1 + "-" + totalBranches;
  process.branch.map(function (branch, index) {
    return branch.processId = processNumber + ", " + (index + 2) + "-" + totalBranches;
  });
  process.branch.map(function (branch) {
    return branchNamer(branch);
  });
  return process;
};

/***/ }),

/***/ "./src/createReAbs/fastArrayStandardConverter.js":
/*!*******************************************************!*\
  !*** ./src/createReAbs/fastArrayStandardConverter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var fastArrayStandardConverter = function fastArrayStandardConverter() {};

/***/ }),

/***/ "./src/createReAbs/fastWritingStandardConverter.js":
/*!*********************************************************!*\
  !*** ./src/createReAbs/fastWritingStandardConverter.js ***!
  \*********************************************************/
/*! exports provided: fastWritingStandardConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fastWritingStandardConverter", function() { return fastWritingStandardConverter; });
var fastWritingStandardConverter = function fastWritingStandardConverter() {};

/***/ }),

/***/ "./src/createReAbs/processes&branchInstantiator.js":
/*!*********************************************************!*\
  !*** ./src/createReAbs/processes&branchInstantiator.js ***!
  \*********************************************************/
/*! exports provided: createReAbProcesses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReAbProcesses", function() { return createReAbProcesses; });
/**        1.- createReAbProcesses()
 *             Función princicpal
 * Retorna todos los procesos y bifurcaciones 
 * para colocarlos en el ReAb principal
 * 
 * @param {arrayObject} arrayObject
 * @return {ReAbProcessArrayObject} 
 */
var createReAbProcesses = function createReAbProcesses(arrayObject) {
  return arrayObject.map(function (process, i) {
    return createReAbProcess(process, (i + 1).toString());
  });
};
/**             2.-  createReAbProcess()
 * Interpreta los datos introducidos por el usuario para 
 * crear los procesos y las bifurcaciones necesarias
 * 
 * @param {*} objectOrString 
 */

var createReAbProcess = function createReAbProcess(objectOrString, processIdName) {
  var ReAbQuestions = objectOrString.pregunta ? objectOrString.pregunta : objectOrString.preguntas ? objectOrString.preguntas : objectOrString.question ? objectOrString.question : objectOrString["question?"] ? objectOrString["question?"] : objectOrString.questions ? objectOrString.questions : objectOrString.quest ? objectOrString.quest : null;
  var ReAbCanvas = objectOrString.canvas ? objectOrString.canvas : null;
  var ReAbAnswers = objectOrString.respuesta ? objectOrString.respuesta : objectOrString.respuestas ? objectOrString.respuestas : objectOrString.answer ? objectOrString.answer : objectOrString.answers ? objectOrString.answers : null;
  var ReAbWrongAnswers = objectOrString.preguntaIncorrecta ? objectOrString.preguntaIncorrecta : objectOrString.preguntasIncorrectas ? objectOrString.preguntasIncorrectas : objectOrString.wrongAnswer ? objectOrString.wrongAnswer : objectOrString.wrongAnswers ? objectOrString.wrongAnswers : null;
  var ReAbOperations = objectOrString.operations ? objectOrString.operations : null;
  var ReAbSpace = objectOrString.space ? objectOrString.space : null;
  var ReAbResults = objectOrString.result ? objectOrString.result : objectOrString.results ? objectOrString.results : objectOrString.resultado ? objectOrString.resultado : objectOrString.resultados ? objectOrString.resultados : null;
  var ReAbAnotations = objectOrString.anotations ? objectOrString.anotations : objectOrString.anotation ? objectOrString.anotation : objectOrString.anotacion ? objectOrString.anotacion : objectOrString.anotaciones ? objectOrString.anotaciones : null;
  var ReAbMnemonics = objectOrString.mnemonics ? objectOrString.mnemonics : null;
  var ReAbQuestionAnswer = objectOrString.questionAnswer ? objectOrString.questionAnswer : objectOrString.questAnswer ? objectOrString.questAnswer : objectOrString.questAns ? objectOrString.questAns : null;
  var ReAbQuestOutResources = objectOrString.questOutResources ? objectOrString.questOutResources : null;
  var ReAbReaction = objectOrString.reaction ? objectOrString.reaction : null;
  var ReAbProcessReactionMap = objectOrString.processReactionMap ? objectOrString.processReactionMap : null;
  var ReAbBranches = objectOrString.branch ? objectOrString.branch : objectOrString.branches ? objectOrString.branches : objectOrString.rama ? objectOrString.rama : objectOrString.ramas ? objectOrString.ramas : objectOrString.fork ? objectOrString.fork : objectOrString.forks ? objectOrString.forks : null;
  var ReabProcessId = processIdName;
  return ReAbProcessCreator(ReAbQuestions, ReAbCanvas, ReAbAnswers, ReAbWrongAnswers, ReAbResults, ReAbOperations, ReAbSpace, ReAbAnotations, ReAbMnemonics, ReAbQuestionAnswer, ReAbQuestOutResources, ReAbReaction, ReAbProcessReactionMap, ReAbBranches, ReabProcessId);
};
/**      3.-  ReAbProcessCreator()
 * Función que entrega todos los procesos y 
 * bifurcaciones requeridas
 * 
 * @param {stringOrNumberArray} ReAbQuestions 
 * @param {stringOrNumberArray} ReAbCanvas 
 * @param {stringOrNumberArray} ReAbAnswers 
 * @param {stringOrNumberArray} ReAbWrongAnswers 
 * @param {stringOrNumberArray} ReAbOperations 
 * @param {stringOrNumberArray} ReAbSpace 
 * @param {stringOrNumberArray} ReAbAnotations 
 * @param {stringOrNumberArray} ReAbMnemonics 
 * @param {stringOrNumberArray} ReAbQuestionAnswer 
 * @param {stringOrNumberArray} ReAbQuestOutResources 
 * @param {stringArray} ReAbReaction 
 * @param {stringArray} ReAbProcessReactionMap 
 * @param {objectArray} ReAbBranches 
 */


var ReAbProcessCreator = function ReAbProcessCreator(ReAbQuestions, ReAbCanvas, ReAbAnswers, ReAbWrongAnswers, ReAbResults, ReAbOperations, ReAbSpace, ReAbAnotations, ReAbMnemonics, ReAbQuestionAnswer, ReAbQuestOutResources, ReAbReaction, ReAbProcessReactionMap, ReAbBranches, ReAbProcessId) {
  return {
    "processId": ReAbProcessId,
    "question": ReAbQuestions,
    "canvas": ReAbCanvas,
    "answer": ReAbAnswers,
    "wrong": ReAbWrongAnswers,
    "results": ReAbResults,
    "anScore": [0, 0],
    "interconections": {
      "anotations": ReAbAnotations,
      "mnemonics": ReAbMnemonics,
      "questionAnswer": ReAbQuestionAnswer,
      /// ELEMENTOS QUE AL AZAR PUEDEN FUNGIR COMO PREGUNTA O COMO RESPUESTA
      "questAuxResources": ReAbQuestOutResources,
      /// Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO
      "reaction": ReAbReaction,
      "processReactionMap": ReAbProcessReactionMap //// Programas rutas entre los elementos answer activados y bifurcaciones específicas "branch" en los siguientes procesos  // la ruta destino es la indicada despues de  " :: "

    },
    "operations": ReAbOperations,
    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA
    "space": ReAbSpace,
    ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO
    "branch": ReAbBranches ? createReAbProcesses(ReAbBranches) : null /// La ramificación de objetos subprocesos en caso de que los haya, son guardados aquí

  };
};

/***/ }),

/***/ "./src/createReAbs/typeValidator.js":
/*!******************************************!*\
  !*** ./src/createReAbs/typeValidator.js ***!
  \******************************************/
/*! exports provided: typeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeValidator", function() { return typeValidator; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


// LO DE DETECTAR TAGS Y TYPE EN OTROS OBJETOS DEL ARRAY IMPLEMENTARLO DESPUÉS DE REFACTORIZAR CreateReAbs

/**
 * Para validar si el valor de ReAbType se encuentra dentro de los tipos posibles
 * Trabaja con los valores de type y tags para retornar el array listo para colocarse en el ReAb.info.tags
 * Si no existe type ni null, o algun elemento que ayude a definir el tipo, retorna ["Concepts"]
 * 
 * @param {array or string} ReAbType 
 * @param {array or string} tags 
 * @return {array}
 * 
 */
var typeValidator = function typeValidator(ReAbType, tags) {
  var tagsArray = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(tags) != "object" ? [tags] : tags;

  if (ReAbType === null && tags === null) {
    console.log("ambos son null");
    return ["Concepts"];
  } else if (ReAbType != null && tags != null) {
    // If ReAbType is not an array, this operator makes it one
    ReAbType = !Array.isArray(ReAbType) ? [ReAbType] : ReAbType;
    console.log("type y tags existen");
    ReAbType.map(function (type) {
      return tagsArray.push(type);
    });
    return foundReAbType(tagsArray); // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
  } else if (ReAbType === null) {
    console.log("ReAbType null");
    return foundReAbType(tagsArray); // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
  } else if (tags === null) {
    // If ReAbType is not an array, this operator makes it one
    ReAbType = !Array.isArray(ReAbType) ? [ReAbType] : ReAbType;
    console.log("tags null");
    var ReAbTypeArray = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(ReAbType) != "object" ? [ReAbType] : ReAbType;
    return foundReAbType(ReAbTypeArray); // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
  }
};

var foundReAbType = function foundReAbType(arrayToFound) {
  var newArrayToFound = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(arrayToFound);

  if (typeMatch(arrayToFound, typeCode)) {
    return removeDuplicate(["Code"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newArrayToFound)));
  } else if (typeMatch(arrayToFound, typeMath)) {
    return removeDuplicate(["Math"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newArrayToFound)));
  } else {
    return removeDuplicate(["Concepts"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newArrayToFound)));
  }
};

var typeCode = ["code", "codigo", "javascript", "phyton", "git", "java", "ruby"];
var typeMath = ["math", "matematicas", "suma", "sumas", "resta", "restas", "multiplicacion", "division", "algebra"];
var typeSpace = ["space"];

var typeMatch = function typeMatch(arrayTags, arrayTypeMatch) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var KeyWordElement = _step.value;
      var ReAbTypeFounded = arrayTags.filter(function (element) {
        return element.toLowerCase().match(new RegExp(KeyWordElement));
      });

      if (ReAbTypeFounded.length >= 1) {
        return {
          v: true
        };
      }
    };

    for (var _iterator = arrayTypeMatch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop();

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(_ret) === "object") return _ret.v;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
/**  REMUEVE EL "TAG" SIMILAR AL "TYPE" EN CASO DE QUE LO HAYA 
 * 
 * @param {array} arrayToReview 
 * @return {array}
 * 
 * removeDuplicate POR AHORA NO FUNCIONA
 * .splice se comporta muy diferente a lo que dice el manual de Mozilla de como se comporta
 * 
 * arrayToReview.splice(1,4)  
 * primer argumento "1" a partir de donde se quiere borrar
 * segundo argumento "4" los que se quieren conservar a partir de la posicion donde se borra
 */


var removeDuplicate = function removeDuplicate(arrayToReview) {
  /*    for(let i=0; i<= arrayToReview.length; i++){ 
  		console.log("i = " + i)        
          if (arrayToReview[0].toLowerCase == arrayToReview[i].toLowerCase){   // cambiarlo a .match para que sea case sensitive
              console.log("i = " + i) 
  			//arrayToReview.splice((i+1),1); 
  			return arrayToReview
              //break
          }
  	}  */
  return arrayToReview;
};

/***/ }),

/***/ "./src/select/ParseRouter.js":
/*!***********************************!*\
  !*** ./src/select/ParseRouter.js ***!
  \***********************************/
/*! exports provided: parseRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRouter", function() { return parseRouter; });
/**  parseRouter()
 * 
 * Used in: [processRouter.js, ReAbScore.js]
 * 
 * @param {*} collection 
 */
var parseRouter = function parseRouter(collection, route) {
  switch (route.length) {
    case 2:
      return collection[route[0]][route[1]];

    case 3:
      return collection[route[0]][route[1]][route[2]];

    case 4:
      return collection[route[0]][route[1]][route[2]][route[3]];

    case 5:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]];

    case 6:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]];

    case 7:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]];

    case 8:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]];

    case 9:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]];

    case 10:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]];

    case 11:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]];

    case 12:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]];

    case 13:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]];

    case 14:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]];

    case 15:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]];

    case 16:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]];

    case 17:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]];

    case 18:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]];

    case 19:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]];

    case 20:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]];

    case 21:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]][route[20]];

    case 22:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]][route[20]][route[21]];

    case 23:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]][route[20]][route[21]][route[22]];

    case 24:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]][route[20]][route[21]][route[22]][route[23]];

    case 25:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]][route[20]][route[21]][route[22]][route[23]][route[24]];

    case 26:
      return collection[route[0]][route[1]][route[2]][route[3]][route[4]][route[5]][route[6]][route[7]][route[8]][route[9]][route[10]][route[11]][route[12]][route[13]][route[14]][route[15]][route[16]][route[17]][route[18]][route[19]][route[20]][route[21]][route[22]][route[23]][route[24]][route[25]];
  }
};

/***/ }),

/***/ "./src/select/ReAbSelector.js":
/*!************************************!*\
  !*** ./src/select/ReAbSelector.js ***!
  \************************************/
/*! exports provided: ReAbSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAbSelector", function() { return ReAbSelector; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**   1.-  ReAbSelector()
 * 
 * @param {ObjectsArray} collection 
 */
var ReAbSelector = function ReAbSelector(collection) {
  return chooseForPreferenceOfLearning(chooseForRankTurn(chooseRankPriorityHighest(collection)));
};
/**   2.- chooseRankPriorityHighest()
 * 
 * @param {*} collection 
 */

var chooseRankPriorityHighest = function chooseRankPriorityHighest(collection) {
  var CicloPriority = ["AAA", "AA", "A", "Learning in Process..", null];

  var _loop = function _loop() {
    var priority = _CicloPriority[_i];
    var filterCollection = collection.filter(function (ReAb) {
      return ReAb.rank.priority == priority;
    });

    if (filterCollection.length >= 2) {
      return {
        v: filterCollection
      };
    } else if (filterCollection.length == 1) {
      return {
        v: filterCollection
      };
    }
  };

  for (var _i = 0, _CicloPriority = CicloPriority; _i < _CicloPriority.length; _i++) {
    var _ret = _loop();

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === "object") return _ret.v;
  }
};
/**    3.-  chooseForRankTurn()
 * 
 * @param {*} collection 
 */


var chooseForRankTurn = function chooseForRankTurn(collection) {
  if (collection.length >= 2) {
    var _loop2 = function _loop2(i) {
      var ReAbWithMinimunRankTurn = collection.filter(function (ReabSelecTurn) {
        return ReabSelecTurn.rank.turn == i;
      });

      if (ReAbWithMinimunRankTurn.length >= 1) {
        return {
          v: ReAbWithMinimunRankTurn
        };
      }
    };

    for (var i = 0; i <= Infinity; i++) {
      var _ret2 = _loop2(i);

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret2) === "object") return _ret2.v;
    }
  } else return collection;
};
/**    4.-  chooseForPreferenceOfLearning()
 * 
 * @param {*} collection 
 */


var chooseForPreferenceOfLearning = function chooseForPreferenceOfLearning(collection) {
  var position = [0, collection[0].rank.chooseForPreferenceOfLearning];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].rank.chooseForPreferenceOfLearning < position[1]) {
      position = [i, collection[i].rank.chooseForPreferenceOfLearning];
    }

    if (i == collection.length - 1) {
      return collection[position[0]];
    }
  }
};

/***/ }),

/***/ "./src/select/__ReAbSelect.js":
/*!************************************!*\
  !*** ./src/select/__ReAbSelect.js ***!
  \************************************/
/*! exports provided: ReAbSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAbSelect", function() { return ReAbSelect; });
/* harmony import */ var _customFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customFilter.js */ "./src/select/customFilter.js");
/* harmony import */ var _extractInformation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractInformation.js */ "./src/select/extractInformation.js");


var ReAbSelect = function ReAbSelect(collection, searchParameters) {
  var filterCollection = Object(_customFilter_js__WEBPACK_IMPORTED_MODULE_0__["customFilter"])(collection, searchParameters);
  return Object(_extractInformation_js__WEBPACK_IMPORTED_MODULE_1__["extractInformation"])(collection, filterCollection, searchParameters); // el router se ejecuta aqui dentro       
}; //ReAbSelector se ejecuta desde customFilter de ReAb.create  y desde algun modulo de ReAb.score()
// la baja de interiorizacion al comparar la seleccion tradicional con la escogida se hará en ReAb.score() para no dañar el retorno de esta función

/***/ }),

/***/ "./src/select/customFilter.js":
/*!************************************!*\
  !*** ./src/select/customFilter.js ***!
  \************************************/
/*! exports provided: customFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customFilter", function() { return customFilter; });
/* harmony import */ var _ReAbSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReAbSelector.js */ "./src/select/ReAbSelector.js");

var customFilter = function customFilter(collection, searchParameters) {
  if (!searchParameters) {
    return Object(_ReAbSelector_js__WEBPACK_IMPORTED_MODULE_0__["ReAbSelector"])(collection);
  } else {
    console.log("operacion de filtrado de busqueda más complejo");
  }
};

/***/ }),

/***/ "./src/select/extractInformation.js":
/*!******************************************!*\
  !*** ./src/select/extractInformation.js ***!
  \******************************************/
/*! exports provided: extractInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractInformation", function() { return extractInformation; });
/* harmony import */ var _processRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processRouter.js */ "./src/select/processRouter.js");
/* harmony import */ var _ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParseRouter.js */ "./src/select/ParseRouter.js");


/** 
 * 
 * @param {*} collection 
 * @param {*} filterCollection 
 * @param {*} searchParameters 
 */

var extractInformation = function extractInformation(collection, filterCollection, searchParameters) {
  var positionInCollection = positionInCollectionMatch(collection, filterCollection);
  var routeDirection = Object(_processRouter_js__WEBPACK_IMPORTED_MODULE_0__["processRouter"])(filterCollection.info.route);
  routeDirection.splice(0, 0, positionInCollection);
  var question = routeDirection.concat('question');
  var mnemonics = routeDirection.concat('mnemonics');
  var questAuxResources = routeDirection.concat('interconections', 'questAuxResources');
  var canvas = routeDirection.concat('canvas');
  var anotations = routeDirection.concat('interconections', 'anotations');
  var space = routeDirection.concat('space');
  return {
    route: routeDirection,
    question: questionSelector(Object(_ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__["parseRouter"])(collection, question)),
    Id: filterCollection.info.route,
    multipleChoiceAnswers: ["no disponible por ahora"],
    mnemonics: Object(_ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__["parseRouter"])(collection, mnemonics),
    questAuxResources: Object(_ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__["parseRouter"])(collection, questAuxResources),
    canvas: Object(_ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__["parseRouter"])(collection, canvas),
    anotations: Object(_ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__["parseRouter"])(collection, anotations),
    space: Object(_ParseRouter_js__WEBPACK_IMPORTED_MODULE_1__["parseRouter"])(collection, space)
  };
};

var questionSelector = function questionSelector(questions) {
  if (questions.length == 1) {
    return questions[0];
  } else {
    return questions[Math.floor(Math.random() * questions.length)];
  }
};

var positionInCollectionMatch = function positionInCollectionMatch(collection, filterCollection) {
  for (var i = 0; i <= collection.length; i++) {
    if (filterCollection == collection[i]) {
      return i;
    }
  }
};

/***/ }),

/***/ "./src/select/processRouter.js":
/*!*************************************!*\
  !*** ./src/select/processRouter.js ***!
  \*************************************/
/*! exports provided: processRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processRouter", function() { return processRouter; });
/**                 1.-  processRouter()
 *      convierte el processId de un string, o el router de un ReAb 
 *      en una ruta de acceso valida a un proceso y/o bifurcación
 * 
 * @param {string} argumentToRoute 
 * @return {array}
 */
var processRouter = function processRouter(argumentToRoute) {
  return routeConverter(argumentToRoute);
};

var routeConverter = function routeConverter(argumentToRoute) {
  var route = [];
  var splitArgumentToRoute = argumentToRoute.split(', ');

  if (splitArgumentToRoute.length == 1) {
    route[0] = 'process';
    route[1] = parseInt(splitArgumentToRoute[0]) - 1;
    return route;
  } else {
    route[0] = 'process';
    route[1] = parseInt(splitArgumentToRoute[0]) - 1;

    for (var i = 1; i <= splitArgumentToRoute + 1; i++) {
      if (splitArgumentToRoute[i].subString(0) != "1") {
        route.push('branch');
        route.push(parseInt(splitArgumentToRoute[i].subString(0)) - 2);
      }

      if (i == splitArgumentToRoute) {
        return route;
      }
    }
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSU5ERVguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb1JlTGVkZ2VMaWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9fX0NyZWF0ZVJlQWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9hcmd1bWVudFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlUmVBYnMvYnJhbmNoTmFtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZVJlQWJzL2Zhc3RBcnJheVN0YW5kYXJkQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9mYXN0V3JpdGluZ1N0YW5kYXJkQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9wcm9jZXNzZXMmYnJhbmNoSW5zdGFudGlhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy90eXBlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3QvUGFyc2VSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9SZUFiU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9fX1JlQWJTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9jdXN0b21GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9leHRyYWN0SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9wcm9jZXNzUm91dGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIlJlQWIiLCJjcmVhdGUiLCJjb2xsZWN0aW9uIiwicG9zaXRpb25JbkNvbGxlY3Rpb24iLCJvYmplY3RPclN0cmluZyIsIkFycmF5IiwiaXNBcnJheSIsIm5ld1JlQWJzIiwiY3JlYXRlUmVBYnMiLCJjb2xsZWN0aW9uQ29weSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInBvc2l0aW9uSW5Db2xsZWN0aW9uQXJndW1lbnQiLCJsZW5ndGgiLCJpIiwic3BsaWNlIiwibWFwIiwiaW5kZXgiLCJyYW5rIiwicHJlZmVyZW5jZU9mTGVhcm5pbmciLCJjb25zb2xlIiwiZXJyb3IiLCJzZWxlY3QiLCJzZWFyY2hQYXJhbWV0ZXJzIiwiUmVBYlNlbGVjdCIsInNjb3JlIiwic2hhcmUiLCJjb252ZXJ0VG8iLCJjb250ZW50VG9UdXJuSW50b1JlQWJzIiwiUmVBYlBzZXVkb09iamVjdCIsImFyZ3VtZW50VmFsaWRhdG9yIiwiZWxlbWVudCIsImNyZWF0ZVJlQWIiLCJSZUFibGljZW5zZSIsImxpY2Vuc2UiLCJsaWNlbmNpYSIsIlJlQWJUeXBlIiwidHlwZSIsInR5cGVzIiwidGlwbyIsInRpcG9zIiwiUmVBYlRhZ3MiLCJ0YWdzIiwidGFnIiwiZXRpcXVldGEiLCJldGlxdWV0YXMiLCJSZUFiU2Nob29sIiwic2Nob29sIiwiUmVhYklkZW50aWZpY2F0b3JPclFyIiwiaWRlbnRpZmljYXRvck9yUXIiLCJSZUFiR3JvdXBJZGVudGlmaWVyIiwiZ3JvdXBJZGVudGlmaWVyIiwidGFnc09mUmVBYiIsInR5cGVWYWxpZGF0b3IiLCJSZUFiUHJvY2VzcyIsImNyZWF0ZVJlQWJQcm9jZXNzZXMiLCJSZUFiQ3JlYXRvciIsInByb2Nlc3MiLCJicmFuY2hOYW1lciIsImludGVyaW9yaXphdGlvbiIsImFsbEJyYW5jaGVzSW50ZXJpb3JpemF0aW9uIiwiZnJlcXVlbmN5IiwicmVjb3JkIiwiYXJndW1lbnRUb1ZhbGlkYXRlIiwibG9nIiwiYXJndW1lbnRUb1ZhbGlkYXRlQ29weSIsImFjY29tb2RhdGVLZXlBcmd1bWVudHNJbkFycmF5WmVybyIsImFycmF5QXJndW1lbnQiLCJhcnJheUFyZ3VtZW50Q29weSIsIlJlQWJMaWNlbnNlIiwidGVybmFyeUVsZW1lbnRzIiwib2JqZWN0RWxlbWVudHMiLCJpc0FycmFyeSIsInN0cmluZ0VsZW1lbnRzIiwiZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnMiLCJwYXNzRGlzcGVyc2VkRWxlbWVudHNUb1RoZUFycmF5WmVybyIsIm9iamVjdHNBcnJheSIsImRpZmVyZW50TmFtZWRGb3IiLCJvdXRwdXRBcnJheSIsIm5ld091dHB1dEFycmF5IiwiZWxlbWVudEl0ZXJhdG9yIiwicHVzaCIsImJyYW5jaCIsInByb2Nlc3NJZEJyYW5jaE5hbWVyIiwidG90YWxCcmFuY2hlcyIsInBhcnNlSW50IiwicHJvY2Vzc051bWJlciIsInByb2Nlc3NJZCIsImZhc3RBcnJheVN0YW5kYXJkQ29udmVydGVyIiwiZmFzdFdyaXRpbmdTdGFuZGFyZENvbnZlcnRlciIsImFycmF5T2JqZWN0IiwiY3JlYXRlUmVBYlByb2Nlc3MiLCJ0b1N0cmluZyIsInByb2Nlc3NJZE5hbWUiLCJSZUFiUXVlc3Rpb25zIiwicHJlZ3VudGEiLCJwcmVndW50YXMiLCJxdWVzdGlvbiIsInF1ZXN0aW9ucyIsInF1ZXN0IiwiUmVBYkNhbnZhcyIsImNhbnZhcyIsIlJlQWJBbnN3ZXJzIiwicmVzcHVlc3RhIiwicmVzcHVlc3RhcyIsImFuc3dlciIsImFuc3dlcnMiLCJSZUFiV3JvbmdBbnN3ZXJzIiwicHJlZ3VudGFJbmNvcnJlY3RhIiwicHJlZ3VudGFzSW5jb3JyZWN0YXMiLCJ3cm9uZ0Fuc3dlciIsIndyb25nQW5zd2VycyIsIlJlQWJPcGVyYXRpb25zIiwib3BlcmF0aW9ucyIsIlJlQWJTcGFjZSIsInNwYWNlIiwiUmVBYlJlc3VsdHMiLCJyZXN1bHQiLCJyZXN1bHRzIiwicmVzdWx0YWRvIiwicmVzdWx0YWRvcyIsIlJlQWJBbm90YXRpb25zIiwiYW5vdGF0aW9ucyIsImFub3RhdGlvbiIsImFub3RhY2lvbiIsImFub3RhY2lvbmVzIiwiUmVBYk1uZW1vbmljcyIsIm1uZW1vbmljcyIsIlJlQWJRdWVzdGlvbkFuc3dlciIsInF1ZXN0aW9uQW5zd2VyIiwicXVlc3RBbnN3ZXIiLCJxdWVzdEFucyIsIlJlQWJRdWVzdE91dFJlc291cmNlcyIsInF1ZXN0T3V0UmVzb3VyY2VzIiwiUmVBYlJlYWN0aW9uIiwicmVhY3Rpb24iLCJSZUFiUHJvY2Vzc1JlYWN0aW9uTWFwIiwicHJvY2Vzc1JlYWN0aW9uTWFwIiwiUmVBYkJyYW5jaGVzIiwiYnJhbmNoZXMiLCJyYW1hIiwicmFtYXMiLCJmb3JrIiwiZm9ya3MiLCJSZWFiUHJvY2Vzc0lkIiwiUmVBYlByb2Nlc3NDcmVhdG9yIiwiUmVBYlByb2Nlc3NJZCIsInRhZ3NBcnJheSIsImZvdW5kUmVBYlR5cGUiLCJSZUFiVHlwZUFycmF5IiwiYXJyYXlUb0ZvdW5kIiwibmV3QXJyYXlUb0ZvdW5kIiwidHlwZU1hdGNoIiwidHlwZUNvZGUiLCJyZW1vdmVEdXBsaWNhdGUiLCJ0eXBlTWF0aCIsInR5cGVTcGFjZSIsImFycmF5VGFncyIsImFycmF5VHlwZU1hdGNoIiwiS2V5V29yZEVsZW1lbnQiLCJSZUFiVHlwZUZvdW5kZWQiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiUmVnRXhwIiwiYXJyYXlUb1JldmlldyIsInBhcnNlUm91dGVyIiwicm91dGUiLCJSZUFiU2VsZWN0b3IiLCJjaG9vc2VGb3JQcmVmZXJlbmNlT2ZMZWFybmluZyIsImNob29zZUZvclJhbmtUdXJuIiwiY2hvb3NlUmFua1ByaW9yaXR5SGlnaGVzdCIsIkNpY2xvUHJpb3JpdHkiLCJwcmlvcml0eSIsImZpbHRlckNvbGxlY3Rpb24iLCJSZUFiV2l0aE1pbmltdW5SYW5rVHVybiIsIlJlYWJTZWxlY1R1cm4iLCJ0dXJuIiwiSW5maW5pdHkiLCJwb3NpdGlvbiIsImN1c3RvbUZpbHRlciIsImV4dHJhY3RJbmZvcm1hdGlvbiIsInBvc2l0aW9uSW5Db2xsZWN0aW9uTWF0Y2giLCJyb3V0ZURpcmVjdGlvbiIsInByb2Nlc3NSb3V0ZXIiLCJpbmZvIiwiY29uY2F0IiwicXVlc3RBdXhSZXNvdXJjZXMiLCJxdWVzdGlvblNlbGVjdG9yIiwiSWQiLCJtdWx0aXBsZUNob2ljZUFuc3dlcnMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhcmd1bWVudFRvUm91dGUiLCJyb3V0ZUNvbnZlcnRlciIsInNwbGl0QXJndW1lbnRUb1JvdXRlIiwic3BsaXQiLCJzdWJTdHJpbmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7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ckIsQ0FBUixHQUFtQyxDQUEvQzs7QUFFRSxTQUFJLElBQUl0TCxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLElBQUtzTCxvQkFBb0IsR0FBQyxDQUF4QyxFQUE0Q3RMLENBQUMsRUFBN0MsRUFBZ0Q7QUFFNUMsVUFBR3NMLG9CQUFvQixDQUFDdEwsQ0FBRCxDQUFwQixDQUF3QndMLFNBQXhCLENBQWtDLENBQWxDLEtBQXdDLEdBQTNDLEVBQStDO0FBQzNDL0IsYUFBSyxDQUFDdEYsSUFBTixDQUFXLFFBQVg7QUFDQXNGLGFBQUssQ0FBQ3RGLElBQU4sQ0FBYUksUUFBUSxDQUFDK0csb0JBQW9CLENBQUN0TCxDQUFELENBQXBCLENBQXdCd0wsU0FBeEIsQ0FBa0MsQ0FBbEMsQ0FBRCxDQUFSLEdBQWdELENBQTdEO0FBQ0g7O0FBRUQsVUFBR3hMLENBQUMsSUFBSXNMLG9CQUFSLEVBQTZCO0FBQ3pCLGVBQU83QixLQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0osQ0F6QkQsQyIsImZpbGUiOiJQcm9SZUxlZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSU5ERVguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHtSZUFifSBmcm9tICcuL1Byb1JlTGVkZ2VMaWJyYXJ5JztcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LlJlQWIgPT09IFwidW5kZWZpbmVkXCIpIHdpbmRvdy5SZUFiID0gUmVBYjtcclxufSkoKTsiLCJpbXBvcnQge2NyZWF0ZVJlQWJzfSBmcm9tICcuL2NyZWF0ZVJlQWJzL19fQ3JlYXRlUmVBYnMuanMnO1xyXG5pbXBvcnQge1JlQWJTZWxlY3R9IGZyb20gJy4vc2VsZWN0L19fUmVBYlNlbGVjdC5qcyc7XHJcblxyXG4vKiogIFJlQWIuY3JlYXRlKClcclxuICogXHJcbiAqIEByZXR1cm4ge1JlQWJDb2xsZWN0aW9uT2JqZWN0QXJyYXl9IFxyXG4gKiBcclxuICogc29sbyBjZXJ0aWZpY2Fyw6EgcXVlIGxvcyBhcmd1bWVudG9zIHNlYW4gdmFsaWRvcyB5IHJldG9ybmFyYSBjb25zb2xlLmVycm9yIHNpIG5vXHJcbiAqIExhIHJlZGlyZWNjacOzbiBkZSBsb3MgcHJvY2Vzb3Mgc2UgaGFyw6EgZW4gY3JlYXRlUmVBYigpIG8gZW4gdW5hIGZ1bmNpw7NuIHF1ZSBjb252aWVydGUgZWxcclxuICogcGFyYW1ldHJvIHNpbiBpbXBvcnRhciBxdWUgc2VhLCB5IHJldG9ybmEgc2llbXByZSB1biBhcnJheSBjb24gMSBvIG3DoXMgb2JqZXRvcyBkZW50cm8gcGFyYVxyXG4gKiBtYW5lamFyIGVsIHJlc3VsdGFkbyBlbiBSZUFiLmNyZWF0ZSgpXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlQWIgPSB7ICBcclxuXHRjcmVhdGU6IChjb2xsZWN0aW9uLHBvc2l0aW9uSW5Db2xsZWN0aW9uLG9iamVjdE9yU3RyaW5nKSA9PiB7XHJcblx0XHRpZihBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pICYmIHR5cGVvZiBwb3NpdGlvbkluQ29sbGVjdGlvbiA9PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbikgJiYgdHlwZW9mIHBvc2l0aW9uSW5Db2xsZWN0aW9uID09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gbmV3UmVBYnMgZGViZSBkZXZvbHZlciBzaWVtcHJlIHVuIGFycmF5XHJcblx0XHRcdGNvbnN0IG5ld1JlQWJzID0gY3JlYXRlUmVBYnMob2JqZWN0T3JTdHJpbmcpO1xyXG5cdFx0XHR2YXIgY29sbGVjdGlvbkNvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbGxlY3Rpb24pKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGVzdG8gY2FsaWJyYSBlbCB2YWxvciBkZSBwb3NpdGlvbkluQ29sbGVjdGlvbiBwYXJhIGV2aXRhciBlcnJvcmVzXHJcblx0XHRcdHZhciBwb3NpdGlvbkluQ29sbGVjdGlvbkFyZ3VtZW50ID0gcG9zaXRpb25JbkNvbGxlY3Rpb24gPT0gXCJmaXJzdFwiID8gMCA6IFxyXG5cdFx0XHRcdHBvc2l0aW9uSW5Db2xsZWN0aW9uID09IFwibGFzdFwiID8gY29sbGVjdGlvbi5sZW5ndGggOiBcclxuXHRcdFx0XHR0eXBlb2YgcG9zaXRpb25JbkNvbGxlY3Rpb24gPT0gXCJudW1iZXJcIiAmJiBwb3NpdGlvbkluQ29sbGVjdGlvbiA8PSBjb2xsZWN0aW9uLmxlbmd0aCA/IHBvc2l0aW9uSW5Db2xsZWN0aW9uIDpcclxuXHRcdFx0XHR0eXBlb2YgcG9zaXRpb25JbkNvbGxlY3Rpb24gPT0gXCJudW1iZXJcIiAmJiBwb3NpdGlvbkluQ29sbGVjdGlvbiA+IGNvbGxlY3Rpb24ubGVuZ3RoID8gY29sbGVjdGlvbi5sZW5ndGggOiAwO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRmb3IodmFyIGk9MDsgaTw9bmV3UmVBYnMubGVuZ3RoOyBpKyspe1x0XHRcdFx0XHJcblx0XHRcdFx0Y29sbGVjdGlvbkNvcHkuc3BsaWNlKHBvc2l0aW9uSW5Db2xsZWN0aW9uQXJndW1lbnQsMCxuZXdSZUFic1tpXSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoaSA9PSAobmV3UmVBYnMubGVuZ3RoLTEpKXtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjb2xsZWN0aW9uQ29weS5tYXAoKFJlQWIsaW5kZXgpPT57cmV0dXJuIFJlQWIucmFuay5wcmVmZXJlbmNlT2ZMZWFybmluZyA9IChpbmRleCsxKX0pXHJcblx0XHRcdFx0XHRyZXR1cm4gY29sbGVjdGlvbkNvcHk7IFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBjb25zb2xlLmVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgY2FuIGJlIG9ubHkgYSBcImFycmF5XCIgYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgY2FuIGJlIFwic3RyaW5nXCIgb3IgYSBcIm51bWJlclwiIGZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0IGh0dHBzOi8vb3BlbnNvdXJjZWR1Y2F0aW9uLmdpdGh1Yi5pby9Qcm9SZUxlZGdlL2RvY3MnKTtcclxuXHRcdH0gICAgXHJcblx0fSxcclxuXHRzZWxlY3Q6IChjb2xsZWN0aW9uLHNlYXJjaFBhcmFtZXRlcnMpID0+IHtcclxuXHRcdGNvbGxlY3Rpb24ubWFwKChSZUFiLGluZGV4KT0+e3JldHVybiBSZUFiLnJhbmsucHJlZmVyZW5jZU9mTGVhcm5pbmcgPSAoaW5kZXgrMSl9KVxyXG5cdFx0cmV0dXJuIFJlQWJTZWxlY3QoY29sbGVjdGlvbixzZWFyY2hQYXJhbWV0ZXJzKTtcclxuXHR9LFxyXG5cdHNjb3JlOiAoKSA9PiB7fSxcclxuXHRzaGFyZTogKCkgPT4ge30sXHJcblx0Y29udmVydFRvOiAoKSA9PiB7fVxyXG59OyBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB0eXBlVmFsaWRhdG9yIH0gZnJvbSAnLi90eXBlVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgYXJndW1lbnRWYWxpZGF0b3IgfSBmcm9tICcuL2FyZ3VtZW50VmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlUmVBYlByb2Nlc3NlcyB9IGZyb20gJy4vcHJvY2Vzc2VzJmJyYW5jaEluc3RhbnRpYXRvci5qcyc7XHJcbmltcG9ydCB7IGJyYW5jaE5hbWVyIH0gZnJvbSAnLi9icmFuY2hOYW1lci5qcyc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLyAgICAgIE1BSU4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vKiogXHRcdFx0XHRjcmVhdGVSZUFicygpICAgICAgICAgICAgICAgICBcclxuICogRnVuY2nDs24gcHJpbmNpcGFsIHF1ZSBjb29yZGluYSBsYSBjcmVhY2nDs24gZGUgUmVBYnNcclxuICogQHBhcmFtIHtzdHJpbmcsb2JqZWN0IG9yIGFycmF5T2JqZWN0c30gY29udGVudFRvVHVybkludG9SZUFicyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZUFicyA9IChjb250ZW50VG9UdXJuSW50b1JlQWJzKSA9PiB7XHJcblx0XHJcblx0bGV0IFJlQWJQc2V1ZG9PYmplY3QgPSBhcmd1bWVudFZhbGlkYXRvcihjb250ZW50VG9UdXJuSW50b1JlQWJzKTtcclxuXHRyZXR1cm4gUmVBYlBzZXVkb09iamVjdC5tYXAoZWxlbWVudCA9PiBjcmVhdGVSZUFiKGVsZW1lbnQpKTsgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqICAgIFx0XHRcdFx0XHQyLi1cdGNyZWF0ZVJlQWIoKVxyXG4gKiBGdW5jacOzbiBxdWUgY3JlYSB1bm8gYSB1bm8gbG9zIFJlQWJzIGEgcGFydGlyIGRlIHVuIG9iamV0byBtw6FzIHNlbmNpbGxvXHJcbiAqIFxyXG4gKiBAcGFyYW0ge09iamVjdCBBcnJheU9iamVjdH0gUmVBYlBzZXVkb09iamVjdCBcclxuICogQHJldHVybiB7UmVBYk5lc3RlZE9iamVjdH1cclxuICovXHJcbmNvbnN0IGNyZWF0ZVJlQWIgPSAoUmVBYlBzZXVkb09iamVjdCkgPT4ge1xyXG5cclxuXHRjb25zdCBSZUFibGljZW5zZSA9IFJlQWJQc2V1ZG9PYmplY3RbMF0ubGljZW5zZSA/IFJlQWJQc2V1ZG9PYmplY3RbMF0ubGljZW5zZSA6IFJlQWJQc2V1ZG9PYmplY3RbMF0ubGljZW5jaWEgPyBSZUFiUHNldWRvT2JqZWN0WzBdLmxpY2VuY2lhIDogXCJNSVRcIjtcclxuXHRjb25zdCBSZUFiVHlwZSA9IFJlQWJQc2V1ZG9PYmplY3RbMF0udHlwZSA/IFJlQWJQc2V1ZG9PYmplY3RbMF0udHlwZSA6IFJlQWJQc2V1ZG9PYmplY3RbMF0udHlwZXMgPyBSZUFiUHNldWRvT2JqZWN0WzBdLnR5cGVzIDogUmVBYlBzZXVkb09iamVjdFswXS50aXBvID8gUmVBYlBzZXVkb09iamVjdFswXS50aXBvIDogUmVBYlBzZXVkb09iamVjdFswXS50aXBvcyA/IFJlQWJQc2V1ZG9PYmplY3RbMF0udGlwb3MgOiBudWxsO1xyXG5cdGNvbnN0IFJlQWJUYWdzID0gUmVBYlBzZXVkb09iamVjdFswXS50YWdzID8gUmVBYlBzZXVkb09iamVjdFswXS50YWdzIDogUmVBYlBzZXVkb09iamVjdFswXS50YWcgPyBSZUFiUHNldWRvT2JqZWN0WzBdLnRhZyA6IFJlQWJQc2V1ZG9PYmplY3RbMF0uZXRpcXVldGEgPyBSZUFiUHNldWRvT2JqZWN0WzBdLmV0aXF1ZXRhIDogUmVBYlBzZXVkb09iamVjdFswXS5ldGlxdWV0YXMgPyBSZUFiUHNldWRvT2JqZWN0WzBdLmV0aXF1ZXRhcyA6IG51bGw7XHJcblx0Y29uc3QgUmVBYlNjaG9vbCA9IFJlQWJQc2V1ZG9PYmplY3RbMF0uc2Nob29sID8gUmVBYlBzZXVkb09iamVjdFswXS5zY2hvb2wgOiBSZUFiUHNldWRvT2JqZWN0WzBdW1wic2Nob29sP1wiXSA/IFJlQWJQc2V1ZG9PYmplY3RbMF1bXCJzY2hvb2w/XCJdIDogbnVsbDtcclxuXHRjb25zdCBSZWFiSWRlbnRpZmljYXRvck9yUXIgPSBSZUFiUHNldWRvT2JqZWN0WzBdLmlkZW50aWZpY2F0b3JPclFyID8gUmVBYlBzZXVkb09iamVjdFswXS5pZGVudGlmaWNhdG9yT3JRciA6IG51bGw7XHJcblx0Y29uc3QgUmVBYkdyb3VwSWRlbnRpZmllciA9IFJlQWJQc2V1ZG9PYmplY3RbMF0uZ3JvdXBJZGVudGlmaWVyID8gUmVBYlBzZXVkb09iamVjdFswXS5ncm91cElkZW50aWZpZXI6IG51bGw7XHJcblx0XHJcblx0Y29uc3QgdGFnc09mUmVBYiA9IHR5cGVWYWxpZGF0b3IoUmVBYlR5cGUsUmVBYlRhZ3MpO1xyXG5cclxuXHRjb25zdCBSZUFiUHJvY2VzcyA9IGNyZWF0ZVJlQWJQcm9jZXNzZXMoUmVBYlBzZXVkb09iamVjdCk7ICAgXHJcblx0XHJcblx0cmV0dXJuIFJlQWJDcmVhdG9yKFJlQWJQcm9jZXNzLHRhZ3NPZlJlQWIsUmVBYlNjaG9vbCxSZWFiSWRlbnRpZmljYXRvck9yUXIsUmVBYkdyb3VwSWRlbnRpZmllcixSZUFibGljZW5zZSk7IFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiogICAgIFx0XHQzLi1cdFJlQWJDcmVhdG9yKClcclxuICogUmV0b3JuYSBlbCBvYmpldG8gUmVBYiBiYXNlIHNpbiBsb3MgcHJvY2Vzb3MgbmkgXHJcbiAqIGJpZnVyY2FjaW9uZXMgY29uIHByZWd1bnRhcyB5IHJlc3B1ZXN0YXNcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0QXJyYXl9IFJlQWJQcm9jZXNzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0YWdzT2ZSZUFiIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBSZUFiU2Nob29sIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBSZWFiSWRlbnRpZmljYXRvck9yUXIgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFJlQWJHcm91cElkZW50aWZpZXIgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBSZUFibGljZW5zZSBcclxuICovXHJcbmNvbnN0IFJlQWJDcmVhdG9yID0gKFJlQWJQcm9jZXNzLHRhZ3NPZlJlQWIsUmVBYlNjaG9vbCxSZWFiSWRlbnRpZmljYXRvck9yUXIsUmVBYkdyb3VwSWRlbnRpZmllcixSZUFibGljZW5zZSkgPT4ge1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdCAgXCJwcm9jZXNzXCIgOiBSZUFiUHJvY2Vzcy5tYXAocHJvY2VzcyA9PiBicmFuY2hOYW1lcihwcm9jZXNzKSksXHJcblx0ICBcInJhbmtcIiA6IHtcclxuXHRcdFwicHJlZmVyZW5jZU9mTGVhcm5pbmdcIiA6IDEsICAgICAgLy8vIEVMIE9SREVOIERFIFBSSU9SSURBRCBERSBBUFJFTkRJWkFKRSBRVUUgTEUgREEgRUwgVVNVQVJJT1xyXG5cdFx0XCJ0dXJuXCIgOiAwLCAgICAgICAgICAgIC8vLyBUVVJOTyBERSBFSkVDVUNJw5NOIERFTCBSZUFiIFxyXG5cdFx0XCJwcmlvcml0eVwiIDogbnVsbCAgICAvLy8gRVNURSBQQVJBTUVUUk8gU09MTyBTRSBBQ1RJVkEgQ09OIFwiQUFBXCIgQ1VBTkRPIEVMIFJlQWIgSEEgU0lETyBDT05URVNUQURPIERFIE1BTkVSQSBJTkNPUlJFQ1RBLiBcIkFBXCIgeSBcIkFcIiBzaWduaWZpY2EgcXVlIGVsIFJlQWIgdHV2byBpbnRlcmFjY2lvbmVzIHBvc2l0aXZhcyBsdWVnbyBkZSBsYSBmYWxsYS4gIENVQU5ETyBFU1RBIEVOIFwibnVsbFwiIE5PIFNFIFRPTUEgRU4gQ1VFTlRBLiAgRGUgbGEgXCJaIGEgbGEgVVwiIGluZGljYW4gdGllbXBvcyBwcm9sb25nYWRvcyBkZSBkZXNjYW5zby5cclxuXHQgIH0sXHJcblx0ICBcImluZm9cIiA6IHtcclxuXHRcdFwibGljZW5zZVwiOiBSZUFibGljZW5zZSxcclxuXHRcdFwic2NvcmVcIiA6ICB7ICAgIFx0ICAgICAgICBcclxuXHRcdCAgaW50ZXJpb3JpemF0aW9uOjAsICAgLy8vIFNFIFBPTkRFUkEgRUwgU0NPUkUgREUgVE9ET1MgTE9TIFBST0NFU09TIFBBUkEgU0FDQVIgRVNUQSBQVU5UVUFDScOTTlxyXG5cdFx0ICBhbGxCcmFuY2hlc0ludGVyaW9yaXphdGlvbjowLCAgLy8vIFNFIFBPTkRFUkEgRUwgU0NPUkUgREUgVE9ET1MgTE9TIEJSQU5DSCBERSBMT1MgUFJPQ0VTT1MgUEFSQSBTQUNBUiBFU1RBIFBVTlRVQUNJw5NOXHJcblx0XHQgIGZyZXF1ZW5jeTowLCAgIC8vLyBTZSBjYWxjdWxhIGluY3JlbWVudGFsbWVudGUgbGFzIHNlbWFuYXMgeSBwZXJpb2RvcyB0cmltZXN0cmFsZXMgZGUgdXNvICA6OiAgZGVjcmVtZW50YSBwb3IgZGVzdXNvXHJcblx0XHQgIHJlY29yZDpbXSAgICAvLy8gaGlzdG9yaWFsIGRlIDIgbWVzZXMgZGUgdXNvIGJhc2FkbyBlbiBkw61hc1xyXG5cdCAgXHR9LFxyXG5cdFx0XCJ0YWdzXCIgOiB0YWdzT2ZSZUFiLCAgICAgICAgICAgIC8vLyBFVElRVUVUQVMgUVVFIEdVQVJEQU4gSU5GT1JNQUNJw5NOIERFTCBSZUFiLCBERSBFSkVDVUNJT04sIFkgREUgTEEgVkVSU0lPTiBQQVJBIEZBQ0lMSVRBUiBPIFNVR0VSSVIgU1UgQUNUVUFMSVpBQ0nDk05cclxuXHRcdFwic2Nob29sP1wiIDogUmVBYlNjaG9vbCwgICAgICAvLy8gICoqKiAgSWRlbnRpZmljYWRvcmVzIGFjYWTDqW1pY29zIGVuIGNhc28gZGUgcXVlIGxvcyBoYXlhLCBjb21vIG5vbWJyZSBkZSBsYSBpbnN0aXR1Y2nDs24sIGVzY3VkbywgZXRjLi5cclxuXHRcdFwiZ3JvdXBJZGVudGlmaWVyP1wiIDogUmVBYkdyb3VwSWRlbnRpZmllciwgICAgICAvLy8gR1VBUkRBIFVOIEhJU1RPUklBTCBERSBMT1MgR1JVUE9TIERFIEVTVFVESU8gUE9SIExPUyBRVUUgSEEgUEFTQURPIEVMIFJlQWIuICBBTEdVTkEgREUgRVNUQSBJTkZPUk1BQ0nDk04gRU5SSVFVRUNFIExBUyBFVElRVUVUQVMgKFwidGFnc1wiKSBwYXJhIGVsIGFuYWxpc2lzIGRlIGRhdG9zXHJcblx0XHRcImlkZW50aWZpY2F0b3JPclFyP1wiIDogUmVhYklkZW50aWZpY2F0b3JPclFyLCAgICAgLy8vIEdVQVJEQSBVTiBDw5NESUdPIEVOIENBREEgQVJSQVkgUVVFIElERU5USUZJQ0EgRUwgVVNVQVJJTyBDUkVBRE9SIERFTCBTSVNPLCBMT1MgVVNVQVJJT1MgUVVFIEhBTiBNT0RJRklDQURPIFNVIENPTlRFTklETywgWSBFTCBVTFRJTU8gVVNVQVJJTyBURU5FRE9SIERFTCBNSVNNT1xyXG5cdFx0XCJpbnRlcm5hbGl6YXRpb24/XCIgOiBudWxsLCAgICAgIC8vLyBQVU5UQUpFIEdMT0JBTCBSRUFMIE9DVUxUTyBFTiBVTiBDw5NESUdPIEhBU0ggREUgXCJpbmZvLnNjb3JlXCJcclxuXHRcdFwiaHJlZj9cIiA6IG51bGwsICAgICAgLy8vIFNFIFVTQSBDT01PIFNFR1VORE8gRklMVFJPIENPUlJBQk9SQVRJVk8gREVMIExBRE8gREVMIEJBQ0tFTkQgUVVFIExPUyBEQVRPUyBERSBcImludGVybmFsaXphdGlvblwiLCBcInNjb3JlXCIgRSBcImlkZW50aWZpY2F0b3JPclFyXCIgXHJcblx0XHRcInJvdXRlXCIgOiBcIjFcIlxyXG5cdCAgfVxyXG5cdH07XHJcbn0iLCJpbXBvcnQge2Zhc3RXcml0aW5nU3RhbmRhcmRDb252ZXJ0ZXJ9IGZyb20gJy4vZmFzdFdyaXRpbmdTdGFuZGFyZENvbnZlcnRlci5qcyc7XHJcbmltcG9ydCB7ZmFzdEFycmF5U3RhbmRhcmRDb252ZXJ0ZXJ9IGZyb20gJy4vZmFzdEFycmF5U3RhbmRhcmRDb252ZXJ0ZXIuanMnO1xyXG5cclxuXHJcblxyXG4vKiogICAgICAgMS4tICAgICAgICAgYXJndW1lbnRWYWxpZGF0b3IoKVxyXG4gKiBDb252aWVydGUgZWwgYXJndW1lbnRvIGRlbCB1c3VhcmlvIGVuIHVuIGFycmF5IGNvbiBvYmpldG9zIFxyXG4gKiBxdWUgZWwgbcOpdG9kbyBjcmVhdGVSZUFicyBhY2VwdGEgY29tbyBhcmd1bWVudG9cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nIGFycmF5IG9yIE9iamVjdH0gYXJndW1lbnRUb1ZhbGlkYXRlIFxyXG4gKiBAcmV0dXJue2FycmF5fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFyZ3VtZW50VmFsaWRhdG9yID0gKGFyZ3VtZW50VG9WYWxpZGF0ZSkgPT4ge1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudFRvVmFsaWRhdGUpICYmIGFyZ3VtZW50VG9WYWxpZGF0ZVswXSA9PSAxKXsgIFxyXG4gICAgICAgIC8vbGV0IFBzZXVkb1JlQWJPYmplY3QgPSBmYXN0QXJyYXlTdGFuZGFyZENvbnZlcnRlcihhcmd1bWVudFRvVmFsaWRhdGUpO1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImFycmF5IGZhc3Qgd3JpdGluZ1wiKTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRUb1ZhbGlkYXRlKSAmJiB0eXBlb2YgYXJndW1lbnRUb1ZhbGlkYXRlWzBdID09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgIGNvbnN0IGFyZ3VtZW50VG9WYWxpZGF0ZUNvcHkgPSBhY2NvbW9kYXRlS2V5QXJndW1lbnRzSW5BcnJheVplcm8oYXJndW1lbnRUb1ZhbGlkYXRlKTtcclxuICAgICAgICByZXR1cm4gW2FyZ3VtZW50VG9WYWxpZGF0ZUNvcHldOyAgXHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZih0eXBlb2YgYXJndW1lbnRUb1ZhbGlkYXRlID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGFyZ3VtZW50VG9WYWxpZGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBbW2FyZ3VtZW50VG9WYWxpZGF0ZV1dO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50VG9WYWxpZGF0ZSA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAvLyBsZXQgUHNldWRvUmVBYk9iamVjdCA9IGZhc3RXcml0aW5nU3RhbmRhcmRDb252ZXJ0ZXIoYXJndW1lbnRUb1ZhbGlkYXRlKTtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJzdHJpbmcgOilcIik7IFxyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgdGhpcmQgYXJndW1lbnQgY2FuIGJlIG9ubHkgYSBcInN0cmluZ1wiIFwiYXJyYXlcIiBvciBhbiBcIm9iamVjdFwiIGZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0IGh0dHBzOi8vb3BlbnNvdXJjZWR1Y2F0aW9uLmdpdGh1Yi5pby9Qcm9SZUxlZGdlL2RvY3MnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKiAgICAgMi4tICAgYWNjb21vZGF0ZUtleUFyZ3VtZW50c0luQXJyYXlaZXJvKClcclxuICogU2kgaGF5IHR5cGUsIHRhZ3MsIGxpY2Vuc2UgbyBpZGVudGlmaWNhdG9ycyBmdWVyYSBkZWwgXHJcbiAqIHByaW1lciBvYmpldG8gZGVsIGFycmF5LCBlc3RlIG3DqXRvZG8gbG9zIHBhc2EgYWwgcHJpbWVyIG9iamV0by5cclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXkgd2l0aCBvYmplY3RzIGNvbGVjdGlvbn0gYXJyYXlBcmd1bWVudCBcImVsIG1pc21vIGFyZ3VtZW50VG9WYWxpZGF0ZSBxdWUgcGFzYSBlbCB1c3VhcmlvXCJcclxuICogQHJldHVybiB7YXJyYXkgd2l0aCBvYmplY3RzIGNvbGVjdGlvbn1cclxuICovXHJcbmNvbnN0IGFjY29tb2RhdGVLZXlBcmd1bWVudHNJbkFycmF5WmVybyA9IChhcnJheUFyZ3VtZW50KSA9PiB7XHJcbiAgICBsZXQgYXJyYXlBcmd1bWVudENvcHkgPSBhcnJheUFyZ3VtZW50O1xyXG5cclxuICAgIGNvbnN0IFJlQWJUYWdzID0gYXJyYXlBcmd1bWVudFswXS50YWdzID8gYXJyYXlBcmd1bWVudFswXS50YWdzIDogYXJyYXlBcmd1bWVudFswXS50YWcgPyBhcnJheUFyZ3VtZW50WzBdLnRhZyA6IGFycmF5QXJndW1lbnRbMF0uZXRpcXVldGEgPyBhcnJheUFyZ3VtZW50WzBdLmV0aXF1ZXRhIDogYXJyYXlBcmd1bWVudFswXS5ldGlxdWV0YXMgPyBhcnJheUFyZ3VtZW50WzBdLmV0aXF1ZXRhcyA6IG51bGw7XHJcbiAgICBjb25zdCBSZUFiTGljZW5zZSA9IGFycmF5QXJndW1lbnRbMF0ubGljZW5zZSA/IGFycmF5QXJndW1lbnRbMF0ubGljZW5zZSA6IGFycmF5QXJndW1lbnRbMF0ubGljZW5jaWEgPyBhcnJheUFyZ3VtZW50WzBdLmxpY2VuY2lhIDogXCJNSVRcIjtcclxuXHRjb25zdCBSZUFiVHlwZSA9IGFycmF5QXJndW1lbnRbMF0udHlwZSA/IGFycmF5QXJndW1lbnRbMF0udHlwZSA6IGFycmF5QXJndW1lbnRbMF0udHlwZXMgPyBhcnJheUFyZ3VtZW50WzBdLnR5cGVzIDogYXJyYXlBcmd1bWVudFswXS50aXBvID8gYXJyYXlBcmd1bWVudFswXS50aXBvIDogYXJyYXlBcmd1bWVudFswXS50aXBvcyA/IGFycmF5QXJndW1lbnRbMF0udGlwb3MgOiBudWxsO1xyXG5cdGNvbnN0IFJlQWJTY2hvb2wgPSBhcnJheUFyZ3VtZW50WzBdLnNjaG9vbCA/IGFycmF5QXJndW1lbnRbMF0uc2Nob29sIDogbnVsbDtcclxuXHRjb25zdCBSZWFiSWRlbnRpZmljYXRvck9yUXIgPSBhcnJheUFyZ3VtZW50WzBdLmlkZW50aWZpY2F0b3JPclFyID8gYXJyYXlBcmd1bWVudFswXS5pZGVudGlmaWNhdG9yT3JRciA6IG51bGw7XHJcbiAgICBjb25zdCBSZUFiR3JvdXBJZGVudGlmaWVyID0gYXJyYXlBcmd1bWVudFswXS5ncm91cElkZW50aWZpZXIgPyBhcnJheUFyZ3VtZW50WzBdLmdyb3VwSWRlbnRpZmllcjogbnVsbDtcclxuICAgIGNvbnN0IHRlcm5hcnlFbGVtZW50cyA9IFtSZUFiVGFncyxSZUFiTGljZW5zZSxSZUFiVHlwZSxSZUFiU2Nob29sLFJlYWJJZGVudGlmaWNhdG9yT3JRcixSZUFiR3JvdXBJZGVudGlmaWVyXTtcclxuICAgIGxldCBvYmplY3RFbGVtZW50cyA9IHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogUmVBYlRhZ3MgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheShSZUFiVGFncykgPyBSZUFiVGFncyA6IFtSZUFiVGFnc10sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGljZW5zZTogUmVBYkxpY2Vuc2UgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheShSZUFiTGljZW5zZSkgPyBSZUFiTGljZW5zZSA6IFtSZUFiTGljZW5zZV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUmVBYlR5cGUgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheShSZUFiVHlwZSkgPyBSZUFiVHlwZSA6IFtSZUFiVHlwZV0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nob29sOiBSZUFiU2Nob29sID09IG51bGwgPyBbXSA6IEFycmF5LmlzQXJyYXkoUmVBYlNjaG9vbCkgPyBSZUFiU2Nob29sIDogW1JlQWJTY2hvb2xdLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWZpY2F0b3JPclFyOiBSZWFiSWRlbnRpZmljYXRvck9yUXIgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheShSZWFiSWRlbnRpZmljYXRvck9yUXIpID8gUmVhYklkZW50aWZpY2F0b3JPclFyIDogW1JlYWJJZGVudGlmaWNhdG9yT3JRcl0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZGVudGlmaWVyOiBSZUFiR3JvdXBJZGVudGlmaWVyID09IG51bGwgPyBbXSA6IEFycmF5LmlzQXJyYXJ5KFJlQWJHcm91cElkZW50aWZpZXIpID8gUmVBYkdyb3VwSWRlbnRpZmllciA6IFtSZUFiR3JvdXBJZGVudGlmaWVyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgY29uc3Qgc3RyaW5nRWxlbWVudHMgPSBbXCJ0YWdzXCIsXCJsaWNlbnNlXCIsXCJ0eXBlXCIsXCJzY2hvb2xcIixcImlkZW50aWZpY2F0b3JPclFyXCIsXCJncm91cElkZW50aWZpZXJcIl07XHJcblxyXG4gICAgbGV0IGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzID0gbmV3IEFycmF5KDYpO1xyXG4gICAgZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnNbMF0gPSBbXCJ0YWdzXCIsXCJ0YWdcIixcImV0aXF1ZXRhXCIsXCJldGlxdWV0YXNcIl07XHJcbiAgICBkaWZlcmVudE5hbWVkRm9yUGFyYW1ldGVyc1sxXSA9IFtcImxpY2Vuc2VcIixcImxpc2NlbmNlXCIsXCJsaXNlbmNlXCIsXCJsaWNlbmNpYVwiXTtcclxuICAgIGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzWzJdID0gW1widHlwZVwiLFwidHlwZXNcIixcInRpcG9cIixcInRpcG9zXCJdO1xyXG4gICAgZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnNbM10gPSBbXCJzY2hvb2xcIixcImVzY3VlbGFcIixcImNvbGVnaW9cIixcImluc3RpdHV0b1wiXTtcclxuICAgIGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzWzRdID0gW1wiaWRcIixcIklkXCIsXCJpZGVudGlmaWNhdG9yXCIsXCJpZGVudGlmaWNhdG9yT3JRclwiXTtcclxuICAgIGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzWzVdID0gW1wiZ3JvdXBJZGVudGlmaWVyXCIsXCJncm91cElkXCIsXCJncm91cHNcIixcImdydXBvc1wiXTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaSA8IHRlcm5hcnlFbGVtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb2JqZWN0RWxlbWVudHNbc3RyaW5nRWxlbWVudHNbaV1dID0gcGFzc0Rpc3BlcnNlZEVsZW1lbnRzVG9UaGVBcnJheVplcm8gKGFycmF5QXJndW1lbnQsZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnNbaV0sb2JqZWN0RWxlbWVudHNbc3RyaW5nRWxlbWVudHNbaV1dKTtcclxuICAgICAgICBhcnJheUFyZ3VtZW50Q29weVswXVtzdHJpbmdFbGVtZW50c1tpXV0gPSBvYmplY3RFbGVtZW50c1tzdHJpbmdFbGVtZW50c1tpXV07XHJcblxyXG4gICAgICAgIGlmKGFycmF5QXJndW1lbnRDb3B5WzBdW3N0cmluZ0VsZW1lbnRzW2ldXSA9PSBudWxsKSB7IGRlbGV0ZSBhcnJheUFyZ3VtZW50Q29weVswXVtzdHJpbmdFbGVtZW50c1tpXV07fVxyXG4gICAgICAgIGlmKGkgPT0gKHRlcm5hcnlFbGVtZW50cy5sZW5ndGgtMSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlBcmd1bWVudENvcHk7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAgICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqICAgICAgMy4tICBwYXNzRGlzcGVyc2VkRWxlbWVudHNUb1RoZUFycmF5WmVybygpXHJcbiAqIEVzdGEgZnVuY2lvbiBpdGVyYSBzb2JyZSBjYWRhIHVubyBkZSBsb3MgYXJndW1lbnRvcyBkZSBsYSBjb2xlY2Npw7NuIHBhcmEganVudGFybG9zLFxyXG4gKiB5IGVudHJlZ2FybG9zIGEgbGEgZnVuY2nDs24gXCJhY2NvbW9kYXRlS2V5QXJndW1lbnRzSW5BcnJheVplcm9cIlxyXG4gKiBcclxuICogQHBhcmFtIHthcnJheSB3aXRoIG9iamVjdHMgY29sZWN0aW9ufSBvYmplY3RzQXJyYXkgXHJcbiAqIEBwYXJhbSB7YmlkaW1lbnNpb25hbCBhcnJheX0gZGlmZXJlbnROYW1lZEZvciBcclxuICogQHBhcmFtIHthcnJheX0gb3V0cHV0QXJyYXkgXHJcbiAqIEByZXR1cm4ge2FycmF5fVxyXG4gKi8gXHJcbmNvbnN0IHBhc3NEaXNwZXJzZWRFbGVtZW50c1RvVGhlQXJyYXlaZXJvID0gKG9iamVjdHNBcnJheSxkaWZlcmVudE5hbWVkRm9yLG91dHB1dEFycmF5KSA9PiB7XHJcblxyXG52YXIgbmV3T3V0cHV0QXJyYXkgPSBvdXRwdXRBcnJheTtcclxudmFyIGVsZW1lbnRJdGVyYXRvcjtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IG9iamVjdHNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZWxlbWVudEl0ZXJhdG9yID0gb2JqZWN0c0FycmF5W2ldW2RpZmVyZW50TmFtZWRGb3JbMF1dID8gb2JqZWN0c0FycmF5W2ldW2RpZmVyZW50TmFtZWRGb3JbMF1dIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0c0FycmF5W2ldW2RpZmVyZW50TmFtZWRGb3JbMV1dID8gb2JqZWN0c0FycmF5W2ldW2RpZmVyZW50TmFtZWRGb3JbMV1dIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzQXJyYXlbaV1bZGlmZXJlbnROYW1lZEZvclsyXV0gPyBvYmplY3RzQXJyYXlbaV1bZGlmZXJlbnROYW1lZEZvclsyXV0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdHNBcnJheVtpXVtkaWZlcmVudE5hbWVkRm9yWzNdXSA/IG9iamVjdHNBcnJheVtpXVtkaWZlcmVudE5hbWVkRm9yWzNdXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuXHJcbiAgICAgICAgaWYoZWxlbWVudEl0ZXJhdG9yICE9IG51bGwpe1xyXG4gICAgICAgICAgICBuZXdPdXRwdXRBcnJheS5wdXNoKGVsZW1lbnRJdGVyYXRvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpID09IChvYmplY3RzQXJyYXkubGVuZ3RoLTEpKXtcclxuICAgICAgICAgICAgaWYobmV3T3V0cHV0QXJyYXkubGVuZ3RoID09IDApIHsgbmV3T3V0cHV0QXJyYXkgPSBudWxsOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPdXRwdXRBcnJheTtcclxuICAgICAgICB9IFxyXG4gICAgfSAgIFxyXG59IiwiZXhwb3J0IGNvbnN0IGJyYW5jaE5hbWVyID0gKHByb2Nlc3MpID0+e1xyXG5cclxuICAgIGlmKHByb2Nlc3MuYnJhbmNoID09IG51bGwpe1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NJZEJyYW5jaE5hbWVyKHByb2Nlc3MpO1xyXG4gICAgfVxyXG59IFxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcHJvY2Vzc0lkQnJhbmNoTmFtZXIgPSAocHJvY2VzcykgPT4ge1xyXG4gICAgY29uc3QgdG90YWxCcmFuY2hlcyA9IHBhcnNlSW50KHByb2Nlc3MuYnJhbmNoLmxlbmd0aCkgKyAxO1xyXG4gICAgY29uc3QgcHJvY2Vzc051bWJlciA9IHByb2Nlc3MucHJvY2Vzc0lkO1xyXG5cclxuICAgIHByb2Nlc3MucHJvY2Vzc0lkID0gcHJvY2Vzc051bWJlciArIFwiLCBcIiArIDEgKyBcIi1cIiArIHRvdGFsQnJhbmNoZXM7XHJcbiAgICBwcm9jZXNzLmJyYW5jaC5tYXAoKGJyYW5jaCxpbmRleCkgPT4gYnJhbmNoLnByb2Nlc3NJZCA9IHByb2Nlc3NOdW1iZXIgKyBcIiwgXCIgKyAoaW5kZXgrMikgKyBcIi1cIiArIHRvdGFsQnJhbmNoZXMpXHJcbiAgICBwcm9jZXNzLmJyYW5jaC5tYXAoYnJhbmNoID0+IGJyYW5jaE5hbWVyKGJyYW5jaCkpXHJcblxyXG4gICAgcmV0dXJuIHByb2Nlc3M7XHJcbn0iLCJjb25zdCBmYXN0QXJyYXlTdGFuZGFyZENvbnZlcnRlciA9ICgpID0+IHt9IiwiZXhwb3J0IGNvbnN0IGZhc3RXcml0aW5nU3RhbmRhcmRDb252ZXJ0ZXIgPSAoKSA9PiB7XHJcblxyXG59IiwiLyoqICAgICAgICAxLi0gY3JlYXRlUmVBYlByb2Nlc3NlcygpXHJcbiAqICAgICAgICAgICAgIEZ1bmNpw7NuIHByaW5jaWNwYWxcclxuICogUmV0b3JuYSB0b2RvcyBsb3MgcHJvY2Vzb3MgeSBiaWZ1cmNhY2lvbmVzIFxyXG4gKiBwYXJhIGNvbG9jYXJsb3MgZW4gZWwgUmVBYiBwcmluY2lwYWxcclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXlPYmplY3R9IGFycmF5T2JqZWN0XHJcbiAqIEByZXR1cm4ge1JlQWJQcm9jZXNzQXJyYXlPYmplY3R9IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlQWJQcm9jZXNzZXMgPSBhcnJheU9iamVjdCA9PiBhcnJheU9iamVjdC5tYXAoKHByb2Nlc3MsaSkgPT4gY3JlYXRlUmVBYlByb2Nlc3MocHJvY2VzcywoaSsxKS50b1N0cmluZygpKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKiAgICAgICAgICAgICAyLi0gIGNyZWF0ZVJlQWJQcm9jZXNzKClcclxuICogSW50ZXJwcmV0YSBsb3MgZGF0b3MgaW50cm9kdWNpZG9zIHBvciBlbCB1c3VhcmlvIHBhcmEgXHJcbiAqIGNyZWFyIGxvcyBwcm9jZXNvcyB5IGxhcyBiaWZ1cmNhY2lvbmVzIG5lY2VzYXJpYXNcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0T3JTdHJpbmcgXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVSZUFiUHJvY2VzcyA9IChvYmplY3RPclN0cmluZyxwcm9jZXNzSWROYW1lKSA9PiB7XHJcblx0Y29uc3QgUmVBYlF1ZXN0aW9ucyA9IG9iamVjdE9yU3RyaW5nLnByZWd1bnRhID8gb2JqZWN0T3JTdHJpbmcucHJlZ3VudGEgOiBvYmplY3RPclN0cmluZy5wcmVndW50YXMgPyBvYmplY3RPclN0cmluZy5wcmVndW50YXMgOiBvYmplY3RPclN0cmluZy5xdWVzdGlvbiA/IG9iamVjdE9yU3RyaW5nLnF1ZXN0aW9uIDogb2JqZWN0T3JTdHJpbmdbXCJxdWVzdGlvbj9cIl0gPyBvYmplY3RPclN0cmluZ1tcInF1ZXN0aW9uP1wiXSA6IG9iamVjdE9yU3RyaW5nLnF1ZXN0aW9ucyA/IG9iamVjdE9yU3RyaW5nLnF1ZXN0aW9ucyA6IG9iamVjdE9yU3RyaW5nLnF1ZXN0ID8gb2JqZWN0T3JTdHJpbmcucXVlc3QgOiBudWxsO1xyXG5cdGNvbnN0IFJlQWJDYW52YXMgPSBvYmplY3RPclN0cmluZy5jYW52YXMgPyBvYmplY3RPclN0cmluZy5jYW52YXMgOiBudWxsIDtcclxuXHRjb25zdCBSZUFiQW5zd2VycyA9IG9iamVjdE9yU3RyaW5nLnJlc3B1ZXN0YSA/IG9iamVjdE9yU3RyaW5nLnJlc3B1ZXN0YSA6IG9iamVjdE9yU3RyaW5nLnJlc3B1ZXN0YXMgPyBvYmplY3RPclN0cmluZy5yZXNwdWVzdGFzIDogb2JqZWN0T3JTdHJpbmcuYW5zd2VyID8gb2JqZWN0T3JTdHJpbmcuYW5zd2VyIDogb2JqZWN0T3JTdHJpbmcuYW5zd2VycyA/IG9iamVjdE9yU3RyaW5nLmFuc3dlcnMgOiBudWxsO1xyXG5cdGNvbnN0IFJlQWJXcm9uZ0Fuc3dlcnMgPSBvYmplY3RPclN0cmluZy5wcmVndW50YUluY29ycmVjdGEgPyBvYmplY3RPclN0cmluZy5wcmVndW50YUluY29ycmVjdGEgOiBvYmplY3RPclN0cmluZy5wcmVndW50YXNJbmNvcnJlY3RhcyA/IG9iamVjdE9yU3RyaW5nLnByZWd1bnRhc0luY29ycmVjdGFzIDogb2JqZWN0T3JTdHJpbmcud3JvbmdBbnN3ZXIgPyBvYmplY3RPclN0cmluZy53cm9uZ0Fuc3dlciA6IG9iamVjdE9yU3RyaW5nLndyb25nQW5zd2VycyA/IG9iamVjdE9yU3RyaW5nLndyb25nQW5zd2VycyA6IG51bGw7XHJcblx0Y29uc3QgUmVBYk9wZXJhdGlvbnMgPSBvYmplY3RPclN0cmluZy5vcGVyYXRpb25zID8gb2JqZWN0T3JTdHJpbmcub3BlcmF0aW9ucyA6IG51bGw7XHJcblx0Y29uc3QgUmVBYlNwYWNlID0gb2JqZWN0T3JTdHJpbmcuc3BhY2UgPyBvYmplY3RPclN0cmluZy5zcGFjZSA6IG51bGw7XHJcblx0Y29uc3QgUmVBYlJlc3VsdHMgPSBvYmplY3RPclN0cmluZy5yZXN1bHQgPyBvYmplY3RPclN0cmluZy5yZXN1bHQgOiBvYmplY3RPclN0cmluZy5yZXN1bHRzID8gb2JqZWN0T3JTdHJpbmcucmVzdWx0cyA6IG9iamVjdE9yU3RyaW5nLnJlc3VsdGFkbyA/IG9iamVjdE9yU3RyaW5nLnJlc3VsdGFkbyA6IG9iamVjdE9yU3RyaW5nLnJlc3VsdGFkb3MgPyBvYmplY3RPclN0cmluZy5yZXN1bHRhZG9zIDogbnVsbDtcclxuXHJcblx0Y29uc3QgUmVBYkFub3RhdGlvbnMgPSBvYmplY3RPclN0cmluZy5hbm90YXRpb25zID8gb2JqZWN0T3JTdHJpbmcuYW5vdGF0aW9ucyA6IG9iamVjdE9yU3RyaW5nLmFub3RhdGlvbiA/IG9iamVjdE9yU3RyaW5nLmFub3RhdGlvbiA6IG9iamVjdE9yU3RyaW5nLmFub3RhY2lvbiA/IG9iamVjdE9yU3RyaW5nLmFub3RhY2lvbiA6ICBvYmplY3RPclN0cmluZy5hbm90YWNpb25lcyA/IG9iamVjdE9yU3RyaW5nLmFub3RhY2lvbmVzIDogbnVsbDtcclxuXHRjb25zdCBSZUFiTW5lbW9uaWNzID0gb2JqZWN0T3JTdHJpbmcubW5lbW9uaWNzID8gb2JqZWN0T3JTdHJpbmcubW5lbW9uaWNzIDogbnVsbDtcclxuXHRjb25zdCBSZUFiUXVlc3Rpb25BbnN3ZXIgPSBvYmplY3RPclN0cmluZy5xdWVzdGlvbkFuc3dlciA/IG9iamVjdE9yU3RyaW5nLnF1ZXN0aW9uQW5zd2VyIDogb2JqZWN0T3JTdHJpbmcucXVlc3RBbnN3ZXIgPyBvYmplY3RPclN0cmluZy5xdWVzdEFuc3dlciA6IG9iamVjdE9yU3RyaW5nLnF1ZXN0QW5zID8gb2JqZWN0T3JTdHJpbmcucXVlc3RBbnMgOiBudWxsOyAgICBcclxuXHRjb25zdCBSZUFiUXVlc3RPdXRSZXNvdXJjZXMgPSBvYmplY3RPclN0cmluZy5xdWVzdE91dFJlc291cmNlcyA/IG9iamVjdE9yU3RyaW5nLnF1ZXN0T3V0UmVzb3VyY2VzIDogbnVsbDtcclxuXHRjb25zdCBSZUFiUmVhY3Rpb24gPSBvYmplY3RPclN0cmluZy5yZWFjdGlvbiA/IG9iamVjdE9yU3RyaW5nLnJlYWN0aW9uIDogbnVsbDtcclxuXHRjb25zdCBSZUFiUHJvY2Vzc1JlYWN0aW9uTWFwID0gb2JqZWN0T3JTdHJpbmcucHJvY2Vzc1JlYWN0aW9uTWFwID8gb2JqZWN0T3JTdHJpbmcucHJvY2Vzc1JlYWN0aW9uTWFwIDogbnVsbDtcclxuXHJcblx0Y29uc3QgUmVBYkJyYW5jaGVzID0gb2JqZWN0T3JTdHJpbmcuYnJhbmNoID8gb2JqZWN0T3JTdHJpbmcuYnJhbmNoIDogb2JqZWN0T3JTdHJpbmcuYnJhbmNoZXMgPyBvYmplY3RPclN0cmluZy5icmFuY2hlcyA6IG9iamVjdE9yU3RyaW5nLnJhbWEgPyBvYmplY3RPclN0cmluZy5yYW1hIDogb2JqZWN0T3JTdHJpbmcucmFtYXMgPyBvYmplY3RPclN0cmluZy5yYW1hcyA6IG9iamVjdE9yU3RyaW5nLmZvcmsgPyBvYmplY3RPclN0cmluZy5mb3JrIDogb2JqZWN0T3JTdHJpbmcuZm9ya3MgPyBvYmplY3RPclN0cmluZy5mb3JrcyA6IG51bGw7XHJcblx0Y29uc3QgUmVhYlByb2Nlc3NJZCA9IHByb2Nlc3NJZE5hbWU7XHJcblxyXG5cdHJldHVybiBSZUFiUHJvY2Vzc0NyZWF0b3IoUmVBYlF1ZXN0aW9ucyxSZUFiQ2FudmFzLFJlQWJBbnN3ZXJzLFJlQWJXcm9uZ0Fuc3dlcnMsUmVBYlJlc3VsdHMsUmVBYk9wZXJhdGlvbnMsUmVBYlNwYWNlLFJlQWJBbm90YXRpb25zLFJlQWJNbmVtb25pY3MsUmVBYlF1ZXN0aW9uQW5zd2VyLFJlQWJRdWVzdE91dFJlc291cmNlcyxSZUFiUmVhY3Rpb24sUmVBYlByb2Nlc3NSZWFjdGlvbk1hcCxSZUFiQnJhbmNoZXMsUmVhYlByb2Nlc3NJZCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqICAgICAgMy4tICBSZUFiUHJvY2Vzc0NyZWF0b3IoKVxyXG4gKiBGdW5jacOzbiBxdWUgZW50cmVnYSB0b2RvcyBsb3MgcHJvY2Vzb3MgeSBcclxuICogYmlmdXJjYWNpb25lcyByZXF1ZXJpZGFzXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ09yTnVtYmVyQXJyYXl9IFJlQWJRdWVzdGlvbnMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nT3JOdW1iZXJBcnJheX0gUmVBYkNhbnZhcyBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiQW5zd2VycyBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiV3JvbmdBbnN3ZXJzIFxyXG4gKiBAcGFyYW0ge3N0cmluZ09yTnVtYmVyQXJyYXl9IFJlQWJPcGVyYXRpb25zIFxyXG4gKiBAcGFyYW0ge3N0cmluZ09yTnVtYmVyQXJyYXl9IFJlQWJTcGFjZSBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiQW5vdGF0aW9ucyBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiTW5lbW9uaWNzIFxyXG4gKiBAcGFyYW0ge3N0cmluZ09yTnVtYmVyQXJyYXl9IFJlQWJRdWVzdGlvbkFuc3dlciBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiUXVlc3RPdXRSZXNvdXJjZXMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nQXJyYXl9IFJlQWJSZWFjdGlvbiBcclxuICogQHBhcmFtIHtzdHJpbmdBcnJheX0gUmVBYlByb2Nlc3NSZWFjdGlvbk1hcCBcclxuICogQHBhcmFtIHtvYmplY3RBcnJheX0gUmVBYkJyYW5jaGVzIFxyXG4gKi9cclxuY29uc3QgUmVBYlByb2Nlc3NDcmVhdG9yID0gKFJlQWJRdWVzdGlvbnMsUmVBYkNhbnZhcyxSZUFiQW5zd2VycyxSZUFiV3JvbmdBbnN3ZXJzLFJlQWJSZXN1bHRzLFJlQWJPcGVyYXRpb25zLFJlQWJTcGFjZSxSZUFiQW5vdGF0aW9ucyxSZUFiTW5lbW9uaWNzLFJlQWJRdWVzdGlvbkFuc3dlcixSZUFiUXVlc3RPdXRSZXNvdXJjZXMsUmVBYlJlYWN0aW9uLFJlQWJQcm9jZXNzUmVhY3Rpb25NYXAsUmVBYkJyYW5jaGVzLFJlQWJQcm9jZXNzSWQpID0+e1xyXG5cdHJldHVybiB7IFxyXG5cdFx0XCJwcm9jZXNzSWRcIiA6IFJlQWJQcm9jZXNzSWQsXHJcblx0XHRcInF1ZXN0aW9uXCIgOiBSZUFiUXVlc3Rpb25zLFxyXG5cdFx0XCJjYW52YXNcIiA6IFJlQWJDYW52YXMsXHJcblx0XHRcImFuc3dlclwiIDogUmVBYkFuc3dlcnMsXHJcblx0XHRcIndyb25nXCIgOiBSZUFiV3JvbmdBbnN3ZXJzLFxyXG5cdFx0XCJyZXN1bHRzXCI6IFJlQWJSZXN1bHRzLFxyXG5cdFx0XCJhblNjb3JlXCIgOiBbICAgICAgICBcclxuXHRcdCAgMCwwXHJcblx0XHRdLFxyXG5cdFx0XCJpbnRlcmNvbmVjdGlvbnNcIiA6IHtcclxuXHRcdCAgXCJhbm90YXRpb25zXCI6IFJlQWJBbm90YXRpb25zLFxyXG5cdFx0ICBcIm1uZW1vbmljc1wiOiBSZUFiTW5lbW9uaWNzLFxyXG5cdFx0ICBcInF1ZXN0aW9uQW5zd2VyXCI6IFJlQWJRdWVzdGlvbkFuc3dlciwgICAgICAvLy8gRUxFTUVOVE9TIFFVRSBBTCBBWkFSIFBVRURFTiBGVU5HSVIgQ09NTyBQUkVHVU5UQSBPIENPTU8gUkVTUFVFU1RBXHJcblx0XHQgIFwicXVlc3RBdXhSZXNvdXJjZXNcIjogUmVBYlF1ZXN0T3V0UmVzb3VyY2VzLCAgICAvLy8gUmVjdXJzb3MgY29tcGxlbWVudGFyaW9zIGEgbGEgcHJlc2VudGFjacOzbiBkZSBsYSBwcmVndW50YSAgLy8gIFJVVEEoUykgREUgSU1BR0VOLCBWSURFTywgU09OSURPLCBFVEMgWSBFTCBBUlJBWSBERSBRVUVTVElPTiBBTCBRVUUgRVNUw4EgQVNJR05BRE9cclxuXHRcdCAgXCJyZWFjdGlvblwiOiBSZUFiUmVhY3Rpb24sXHJcblx0XHQgIFwicHJvY2Vzc1JlYWN0aW9uTWFwXCI6IFJlQWJQcm9jZXNzUmVhY3Rpb25NYXAgICAvLy8vIFByb2dyYW1hcyBydXRhcyBlbnRyZSBsb3MgZWxlbWVudG9zIGFuc3dlciBhY3RpdmFkb3MgeSBiaWZ1cmNhY2lvbmVzIGVzcGVjw61maWNhcyBcImJyYW5jaFwiIGVuIGxvcyBzaWd1aWVudGVzIHByb2Nlc29zICAvLyBsYSBydXRhIGRlc3Rpbm8gZXMgbGEgaW5kaWNhZGEgZGVzcHVlcyBkZSAgXCIgOjogXCJcclxuXHRcdH0sXHJcblx0XHRcIm9wZXJhdGlvbnNcIiA6IFJlQWJPcGVyYXRpb25zLCAgICAvLy8gICogICBBUVVJIFNFIEdVQVJEQSBMQSBESURBQ1RJQ0EgSU5URVJOQSBlc3BhY2lhbC9yZWxhY2lvbmFsIFBBUkEgRU5TRcORQVIgQUwgUmVBYiBBIEVKRUNVVEFSIExBIE9QRVJBQ0nDk04gTUFURU3DgVRJQ0FcclxuXHRcdFwic3BhY2VcIiA6IFJlQWJTcGFjZSwgICAgICAvLy8gICogIEFRVcONIFNFIEdVQVJEQU4gQ09PUkRFTkFEQVMgWSBBUkVBUyBERSBMQSBQQU5UQUxMQSBDT04gRk9STUFTIEdFT01FVFJJQ0FTIFFVRSBBTCBQVUxTQVIgTyBJTlRFUkFDVFVBUiBERSBNQU5FUkEgQ09SUkVDVEEsIFJFU1VFTFZFIEVMIFJlQWIgTyBQQVNBIEFMIFNJR1VJRU5URSBQUk9DRVNPXHJcblx0XHRcImJyYW5jaFwiIDogUmVBYkJyYW5jaGVzID8gY3JlYXRlUmVBYlByb2Nlc3NlcyhSZUFiQnJhbmNoZXMpIDogbnVsbCAgIC8vLyBMYSByYW1pZmljYWNpw7NuIGRlIG9iamV0b3Mgc3VicHJvY2Vzb3MgZW4gY2FzbyBkZSBxdWUgbG9zIGhheWEsIHNvbiBndWFyZGFkb3MgYXF1w61cclxuXHQgIH0gXHJcbn0gXHJcbiIsIi8vIExPIERFIERFVEVDVEFSIFRBR1MgWSBUWVBFIEVOIE9UUk9TIE9CSkVUT1MgREVMIEFSUkFZIElNUExFTUVOVEFSTE8gREVTUFXDiVMgREUgUkVGQUNUT1JJWkFSIENyZWF0ZVJlQWJzXHJcbi8qKlxyXG4gKiBQYXJhIHZhbGlkYXIgc2kgZWwgdmFsb3IgZGUgUmVBYlR5cGUgc2UgZW5jdWVudHJhIGRlbnRybyBkZSBsb3MgdGlwb3MgcG9zaWJsZXNcclxuICogVHJhYmFqYSBjb24gbG9zIHZhbG9yZXMgZGUgdHlwZSB5IHRhZ3MgcGFyYSByZXRvcm5hciBlbCBhcnJheSBsaXN0byBwYXJhIGNvbG9jYXJzZSBlbiBlbCBSZUFiLmluZm8udGFnc1xyXG4gKiBTaSBubyBleGlzdGUgdHlwZSBuaSBudWxsLCBvIGFsZ3VuIGVsZW1lbnRvIHF1ZSBheXVkZSBhIGRlZmluaXIgZWwgdGlwbywgcmV0b3JuYSBbXCJDb25jZXB0c1wiXVxyXG4gKiBcclxuICogQHBhcmFtIHthcnJheSBvciBzdHJpbmd9IFJlQWJUeXBlIFxyXG4gKiBAcGFyYW0ge2FycmF5IG9yIHN0cmluZ30gdGFncyBcclxuICogQHJldHVybiB7YXJyYXl9XHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHR5cGVWYWxpZGF0b3IgPSAoUmVBYlR5cGUsdGFncykgPT4ge1xyXG5cdGxldCB0YWdzQXJyYXkgPSAgdHlwZW9mIHRhZ3MgIT0gXCJvYmplY3RcIiA/IFt0YWdzXSA6ICB0YWdzOyAgXHJcblxyXG5cdFxyXG5cclxuXHRpZiAoUmVBYlR5cGUgPT09IG51bGwgJiYgdGFncyA9PT0gbnVsbCl7XHJcblx0XHRjb25zb2xlLmxvZyhcImFtYm9zIHNvbiBudWxsXCIpO1xyXG5cdFx0cmV0dXJuIFtcIkNvbmNlcHRzXCJdXHJcblx0fSBcclxuXHRcclxuXHRlbHNlIGlmIChSZUFiVHlwZSAhPSBudWxsICYmIHRhZ3MgIT0gbnVsbCl7XHJcblx0XHQvLyBJZiBSZUFiVHlwZSBpcyBub3QgYW4gYXJyYXksIHRoaXMgb3BlcmF0b3IgbWFrZXMgaXQgb25lXHJcblx0XHRSZUFiVHlwZSA9ICFBcnJheS5pc0FycmF5KFJlQWJUeXBlKSA/IFtSZUFiVHlwZV0gOiBSZUFiVHlwZTtcclxuXHRcdGNvbnNvbGUubG9nKFwidHlwZSB5IHRhZ3MgZXhpc3RlblwiKVxyXG5cdFx0UmVBYlR5cGUubWFwKHR5cGUgPT4gdGFnc0FycmF5LnB1c2godHlwZSkpXHRcdFxyXG5cdFx0cmV0dXJuIGZvdW5kUmVBYlR5cGUodGFnc0FycmF5KSAgLy8gRlVOQ0lPTiBRVUUgUFJJTUVSTyBCVVNDQSBFTCBNQVRDSCBFWENBQ1RPIFkgU0kgTk8gTE8gRU5DVUVOVFJBLCBsbGFtYSBhIG90cmEgZnVuY2lvbiBxdWUgYWdyZWdhIGVsIHRpcG8gcG9yIHBhbGFicmFzIGNsYXZlXHJcblx0fSBcclxuXHRcclxuXHRlbHNlIGlmKFJlQWJUeXBlID09PSBudWxsKXtcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJSZUFiVHlwZSBudWxsXCIpXHRcclxuXHRcdHJldHVybiBmb3VuZFJlQWJUeXBlKHRhZ3NBcnJheSkgIC8vIEZVTkNJT04gUVVFIFBSSU1FUk8gQlVTQ0EgRUwgTUFUQ0ggRVhDQUNUTyBZIFNJIE5PIExPIEVOQ1VFTlRSQSwgbGxhbWEgYSBvdHJhIGZ1bmNpb24gcXVlIGFncmVnYSBlbCB0aXBvIHBvciBwYWxhYnJhcyBjbGF2ZVxyXG5cdH0gXHJcblx0XHJcblx0ZWxzZSBpZih0YWdzID09PSBudWxsKXtcclxuXHRcdC8vIElmIFJlQWJUeXBlIGlzIG5vdCBhbiBhcnJheSwgdGhpcyBvcGVyYXRvciBtYWtlcyBpdCBvbmVcclxuXHRcdFJlQWJUeXBlID0gIUFycmF5LmlzQXJyYXkoUmVBYlR5cGUpID8gW1JlQWJUeXBlXSA6IFJlQWJUeXBlO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ0YWdzIG51bGxcIilcclxuICAgICAgICBsZXQgUmVBYlR5cGVBcnJheSA9IHR5cGVvZiBSZUFiVHlwZSAhPSBcIm9iamVjdFwiID8gW1JlQWJUeXBlXSA6IFJlQWJUeXBlO1xyXG5cdFx0cmV0dXJuIGZvdW5kUmVBYlR5cGUoUmVBYlR5cGVBcnJheSkgIC8vIEZVTkNJT04gUVVFIFBSSU1FUk8gQlVTQ0EgRUwgTUFUQ0ggRVhDQUNUTyBZIFNJIE5PIExPIEVOQ1VFTlRSQSwgbGxhbWEgYSBvdHJhIGZ1bmNpb24gcXVlIGFncmVnYSBlbCB0aXBvIHBvciBwYWxhYnJhcyBjbGF2ZVxyXG5cdH0gXHJcbn1cclxuXHJcblxyXG5jb25zdCBmb3VuZFJlQWJUeXBlID0gKGFycmF5VG9Gb3VuZCkgPT4ge1xyXG5cdGNvbnN0IG5ld0FycmF5VG9Gb3VuZCA9IFsuLi5hcnJheVRvRm91bmRdO1xyXG5cclxuXHRpZih0eXBlTWF0Y2goYXJyYXlUb0ZvdW5kLHR5cGVDb2RlKSl7XHJcblx0XHRyZXR1cm4gcmVtb3ZlRHVwbGljYXRlKFtcIkNvZGVcIiwgLi4ubmV3QXJyYXlUb0ZvdW5kXSkgICBcclxuXHR9ZWxzZSBpZih0eXBlTWF0Y2goYXJyYXlUb0ZvdW5kLHR5cGVNYXRoKSl7XHJcblx0XHRyZXR1cm4gcmVtb3ZlRHVwbGljYXRlKFtcIk1hdGhcIiwgLi4ubmV3QXJyYXlUb0ZvdW5kXSkgICAgXHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gcmVtb3ZlRHVwbGljYXRlKFtcIkNvbmNlcHRzXCIsIC4uLm5ld0FycmF5VG9Gb3VuZF0pICAgXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHR5cGVDb2RlID0gW1wiY29kZVwiLFwiY29kaWdvXCIsXCJqYXZhc2NyaXB0XCIsXCJwaHl0b25cIixcImdpdFwiLFwiamF2YVwiLFwicnVieVwiXTtcclxuY29uc3QgdHlwZU1hdGggPSBbXCJtYXRoXCIsXCJtYXRlbWF0aWNhc1wiLFwic3VtYVwiLFwic3VtYXNcIixcInJlc3RhXCIsXCJyZXN0YXNcIixcIm11bHRpcGxpY2FjaW9uXCIsXCJkaXZpc2lvblwiLFwiYWxnZWJyYVwiXTtcclxuY29uc3QgdHlwZVNwYWNlID0gW1wic3BhY2VcIl07XHJcblxyXG5jb25zdCB0eXBlTWF0Y2ggPSAoYXJyYXlUYWdzLGFycmF5VHlwZU1hdGNoKSA9PiB7XHJcblxyXG5cdGZvcihsZXQgS2V5V29yZEVsZW1lbnQgb2YgYXJyYXlUeXBlTWF0Y2gpe1xyXG5cdFx0bGV0IFJlQWJUeXBlRm91bmRlZCA9IGFycmF5VGFncy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LnRvTG93ZXJDYXNlKCkubWF0Y2gobmV3IFJlZ0V4cChLZXlXb3JkRWxlbWVudCkpKVxyXG5cdFx0XHJcbiAgICAgICAgaWYgKFJlQWJUeXBlRm91bmRlZC5sZW5ndGggPj0gMSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG5cdH0gIFxyXG59IFxyXG5cclxuXHJcblxyXG4vKiogIFJFTVVFVkUgRUwgXCJUQUdcIiBTSU1JTEFSIEFMIFwiVFlQRVwiIEVOIENBU08gREUgUVVFIExPIEhBWUEgXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVRvUmV2aWV3IFxyXG4gKiBAcmV0dXJuIHthcnJheX1cclxuICogXHJcbiAqIHJlbW92ZUR1cGxpY2F0ZSBQT1IgQUhPUkEgTk8gRlVOQ0lPTkFcclxuICogLnNwbGljZSBzZSBjb21wb3J0YSBtdXkgZGlmZXJlbnRlIGEgbG8gcXVlIGRpY2UgZWwgbWFudWFsIGRlIE1vemlsbGEgZGUgY29tbyBzZSBjb21wb3J0YVxyXG4gKiBcclxuICogYXJyYXlUb1Jldmlldy5zcGxpY2UoMSw0KSAgXHJcbiAqIHByaW1lciBhcmd1bWVudG8gXCIxXCIgYSBwYXJ0aXIgZGUgZG9uZGUgc2UgcXVpZXJlIGJvcnJhclxyXG4gKiBzZWd1bmRvIGFyZ3VtZW50byBcIjRcIiBsb3MgcXVlIHNlIHF1aWVyZW4gY29uc2VydmFyIGEgcGFydGlyIGRlIGxhIHBvc2ljaW9uIGRvbmRlIHNlIGJvcnJhXHJcbiAqL1xyXG5jb25zdCByZW1vdmVEdXBsaWNhdGUgPSAoYXJyYXlUb1JldmlldykgPT4ge1xyXG4vKiAgICBmb3IobGV0IGk9MDsgaTw9IGFycmF5VG9SZXZpZXcubGVuZ3RoOyBpKyspeyBcclxuXHRcdGNvbnNvbGUubG9nKFwiaSA9IFwiICsgaSkgICAgICAgIFxyXG4gICAgICAgIGlmIChhcnJheVRvUmV2aWV3WzBdLnRvTG93ZXJDYXNlID09IGFycmF5VG9SZXZpZXdbaV0udG9Mb3dlckNhc2UpeyAgIC8vIGNhbWJpYXJsbyBhIC5tYXRjaCBwYXJhIHF1ZSBzZWEgY2FzZSBzZW5zaXRpdmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpID0gXCIgKyBpKSBcclxuXHRcdFx0Ly9hcnJheVRvUmV2aWV3LnNwbGljZSgoaSsxKSwxKTsgXHJcblx0XHRcdHJldHVybiBhcnJheVRvUmV2aWV3XHJcbiAgICAgICAgICAgIC8vYnJlYWtcclxuICAgICAgICB9XHJcblx0fSAgKi9cclxuICAgIHJldHVybiBhcnJheVRvUmV2aWV3XHJcbn1cclxuIiwiXHJcbi8qKiAgcGFyc2VSb3V0ZXIoKVxyXG4gKiBcclxuICogVXNlZCBpbjogW3Byb2Nlc3NSb3V0ZXIuanMsIFJlQWJTY29yZS5qc11cclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJzZVJvdXRlciA9IChjb2xsZWN0aW9uLHJvdXRlKSA9PiB7XHJcbiAgICBzd2l0Y2gocm91dGUubGVuZ3RoKXsgXHJcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gY29sbGVjdGlvbiBbcm91dGVbMF1dIFtyb3V0ZVsxXV07ICBcclxuICAgICAgICBjYXNlIDM6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dO1xyXG4gICAgICAgIGNhc2UgNDogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXTtcclxuICAgICAgICBjYXNlIDU6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXTtcclxuICAgICAgICBjYXNlIDY6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dO1xyXG4gICAgICAgIGNhc2UgNzogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXTtcclxuICAgICAgICBjYXNlIDg6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXTtcclxuICAgICAgICBjYXNlIDk6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dO1xyXG4gICAgICAgIGNhc2UgMTA6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dIFtyb3V0ZVs5XV07XHJcbiAgICAgICAgY2FzZSAxMTogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXSBbcm91dGVbN11dIFtyb3V0ZVs4XV0gW3JvdXRlWzldXSBbcm91dGVbMTBdXTtcclxuICAgICAgICBjYXNlIDEyOiByZXR1cm4gY29sbGVjdGlvbiBbcm91dGVbMF1dIFtyb3V0ZVsxXV0gW3JvdXRlWzJdXSBbcm91dGVbM11dIFtyb3V0ZVs0XV0gW3JvdXRlWzVdXSBbcm91dGVbNl1dIFtyb3V0ZVs3XV0gW3JvdXRlWzhdXSBbcm91dGVbOV1dIFtyb3V0ZVsxMF1dIFtyb3V0ZVsxMV1dO1xyXG4gICAgICAgIGNhc2UgMTM6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dIFtyb3V0ZVs5XV0gW3JvdXRlWzEwXV0gW3JvdXRlWzExXV0gW3JvdXRlWzEyXV07XHJcbiAgICAgICAgY2FzZSAxNDogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXSBbcm91dGVbN11dIFtyb3V0ZVs4XV0gW3JvdXRlWzldXSBbcm91dGVbMTBdXSBbcm91dGVbMTFdXSBbcm91dGVbMTJdXSBbcm91dGVbMTNdXTtcclxuICAgICAgICBjYXNlIDE1OiByZXR1cm4gY29sbGVjdGlvbiBbcm91dGVbMF1dIFtyb3V0ZVsxXV0gW3JvdXRlWzJdXSBbcm91dGVbM11dIFtyb3V0ZVs0XV0gW3JvdXRlWzVdXSBbcm91dGVbNl1dIFtyb3V0ZVs3XV0gW3JvdXRlWzhdXSBbcm91dGVbOV1dIFtyb3V0ZVsxMF1dIFtyb3V0ZVsxMV1dIFtyb3V0ZVsxMl1dIFtyb3V0ZVsxM11dIFtyb3V0ZVsxNF1dO1xyXG4gICAgICAgIGNhc2UgMTY6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dIFtyb3V0ZVs5XV0gW3JvdXRlWzEwXV0gW3JvdXRlWzExXV0gW3JvdXRlWzEyXV0gW3JvdXRlWzEzXV0gW3JvdXRlWzE0XV0gW3JvdXRlWzE1XV07XHJcbiAgICAgICAgY2FzZSAxNzogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXSBbcm91dGVbN11dIFtyb3V0ZVs4XV0gW3JvdXRlWzldXSBbcm91dGVbMTBdXSBbcm91dGVbMTFdXSBbcm91dGVbMTJdXSBbcm91dGVbMTNdXSBbcm91dGVbMTRdXSBbcm91dGVbMTVdXSBbcm91dGVbMTZdXTtcclxuICAgICAgICBjYXNlIDE4OiByZXR1cm4gY29sbGVjdGlvbiBbcm91dGVbMF1dIFtyb3V0ZVsxXV0gW3JvdXRlWzJdXSBbcm91dGVbM11dIFtyb3V0ZVs0XV0gW3JvdXRlWzVdXSBbcm91dGVbNl1dIFtyb3V0ZVs3XV0gW3JvdXRlWzhdXSBbcm91dGVbOV1dIFtyb3V0ZVsxMF1dIFtyb3V0ZVsxMV1dIFtyb3V0ZVsxMl1dIFtyb3V0ZVsxM11dIFtyb3V0ZVsxNF1dIFtyb3V0ZVsxNV1dIFtyb3V0ZVsxNl1dIFtyb3V0ZVsxN11dO1xyXG4gICAgICAgIGNhc2UgMTk6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dIFtyb3V0ZVs5XV0gW3JvdXRlWzEwXV0gW3JvdXRlWzExXV0gW3JvdXRlWzEyXV0gW3JvdXRlWzEzXV0gW3JvdXRlWzE0XV0gW3JvdXRlWzE1XV0gW3JvdXRlWzE2XV0gW3JvdXRlWzE3XV0gW3JvdXRlWzE4XV07XHJcbiAgICAgICAgY2FzZSAyMDogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXSBbcm91dGVbN11dIFtyb3V0ZVs4XV0gW3JvdXRlWzldXSBbcm91dGVbMTBdXSBbcm91dGVbMTFdXSBbcm91dGVbMTJdXSBbcm91dGVbMTNdXSBbcm91dGVbMTRdXSBbcm91dGVbMTVdXSBbcm91dGVbMTZdXSBbcm91dGVbMTddXSBbcm91dGVbMThdXSBbcm91dGVbMTldXTtcclxuICAgICAgICBjYXNlIDIxOiByZXR1cm4gY29sbGVjdGlvbiBbcm91dGVbMF1dIFtyb3V0ZVsxXV0gW3JvdXRlWzJdXSBbcm91dGVbM11dIFtyb3V0ZVs0XV0gW3JvdXRlWzVdXSBbcm91dGVbNl1dIFtyb3V0ZVs3XV0gW3JvdXRlWzhdXSBbcm91dGVbOV1dIFtyb3V0ZVsxMF1dIFtyb3V0ZVsxMV1dIFtyb3V0ZVsxMl1dIFtyb3V0ZVsxM11dIFtyb3V0ZVsxNF1dIFtyb3V0ZVsxNV1dIFtyb3V0ZVsxNl1dIFtyb3V0ZVsxN11dIFtyb3V0ZVsxOF1dIFtyb3V0ZVsxOV1dIFtyb3V0ZVsyMF1dO1xyXG4gICAgICAgIGNhc2UgMjI6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dIFtyb3V0ZVs5XV0gW3JvdXRlWzEwXV0gW3JvdXRlWzExXV0gW3JvdXRlWzEyXV0gW3JvdXRlWzEzXV0gW3JvdXRlWzE0XV0gW3JvdXRlWzE1XV0gW3JvdXRlWzE2XV0gW3JvdXRlWzE3XV0gW3JvdXRlWzE4XV0gW3JvdXRlWzE5XV0gW3JvdXRlWzIwXV0gW3JvdXRlWzIxXV07XHJcbiAgICAgICAgY2FzZSAyMzogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXSBbcm91dGVbN11dIFtyb3V0ZVs4XV0gW3JvdXRlWzldXSBbcm91dGVbMTBdXSBbcm91dGVbMTFdXSBbcm91dGVbMTJdXSBbcm91dGVbMTNdXSBbcm91dGVbMTRdXSBbcm91dGVbMTVdXSBbcm91dGVbMTZdXSBbcm91dGVbMTddXSBbcm91dGVbMThdXSBbcm91dGVbMTldXSBbcm91dGVbMjBdXSBbcm91dGVbMjFdXSBbcm91dGVbMjJdXTtcclxuICAgICAgICBjYXNlIDI0OiByZXR1cm4gY29sbGVjdGlvbiBbcm91dGVbMF1dIFtyb3V0ZVsxXV0gW3JvdXRlWzJdXSBbcm91dGVbM11dIFtyb3V0ZVs0XV0gW3JvdXRlWzVdXSBbcm91dGVbNl1dIFtyb3V0ZVs3XV0gW3JvdXRlWzhdXSBbcm91dGVbOV1dIFtyb3V0ZVsxMF1dIFtyb3V0ZVsxMV1dIFtyb3V0ZVsxMl1dIFtyb3V0ZVsxM11dIFtyb3V0ZVsxNF1dIFtyb3V0ZVsxNV1dIFtyb3V0ZVsxNl1dIFtyb3V0ZVsxN11dIFtyb3V0ZVsxOF1dIFtyb3V0ZVsxOV1dIFtyb3V0ZVsyMF1dIFtyb3V0ZVsyMV1dIFtyb3V0ZVsyMl1dIFtyb3V0ZVsyM11dO1xyXG4gICAgICAgIGNhc2UgMjU6IHJldHVybiBjb2xsZWN0aW9uIFtyb3V0ZVswXV0gW3JvdXRlWzFdXSBbcm91dGVbMl1dIFtyb3V0ZVszXV0gW3JvdXRlWzRdXSBbcm91dGVbNV1dIFtyb3V0ZVs2XV0gW3JvdXRlWzddXSBbcm91dGVbOF1dIFtyb3V0ZVs5XV0gW3JvdXRlWzEwXV0gW3JvdXRlWzExXV0gW3JvdXRlWzEyXV0gW3JvdXRlWzEzXV0gW3JvdXRlWzE0XV0gW3JvdXRlWzE1XV0gW3JvdXRlWzE2XV0gW3JvdXRlWzE3XV0gW3JvdXRlWzE4XV0gW3JvdXRlWzE5XV0gW3JvdXRlWzIwXV0gW3JvdXRlWzIxXV0gW3JvdXRlWzIyXV0gW3JvdXRlWzIzXV0gW3JvdXRlWzI0XV07XHJcbiAgICAgICAgY2FzZSAyNjogcmV0dXJuIGNvbGxlY3Rpb24gW3JvdXRlWzBdXSBbcm91dGVbMV1dIFtyb3V0ZVsyXV0gW3JvdXRlWzNdXSBbcm91dGVbNF1dIFtyb3V0ZVs1XV0gW3JvdXRlWzZdXSBbcm91dGVbN11dIFtyb3V0ZVs4XV0gW3JvdXRlWzldXSBbcm91dGVbMTBdXSBbcm91dGVbMTFdXSBbcm91dGVbMTJdXSBbcm91dGVbMTNdXSBbcm91dGVbMTRdXSBbcm91dGVbMTVdXSBbcm91dGVbMTZdXSBbcm91dGVbMTddXSBbcm91dGVbMThdXSBbcm91dGVbMTldXSBbcm91dGVbMjBdXSBbcm91dGVbMjFdXSBbcm91dGVbMjJdXSBbcm91dGVbMjNdXSBbcm91dGVbMjRdXSBbcm91dGVbMjVdXTtcclxuICAgIH1cclxufSIsIi8qKiAgIDEuLSAgUmVBYlNlbGVjdG9yKClcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0c0FycmF5fSBjb2xsZWN0aW9uIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlQWJTZWxlY3RvciA9IChjb2xsZWN0aW9uKSA9PiB7ICAgXHJcbiAgICByZXR1cm4gIGNob29zZUZvclByZWZlcmVuY2VPZkxlYXJuaW5nKGNob29zZUZvclJhbmtUdXJuKGNob29zZVJhbmtQcmlvcml0eUhpZ2hlc3QoY29sbGVjdGlvbikpKTsgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqICAgMi4tIGNob29zZVJhbmtQcmlvcml0eUhpZ2hlc3QoKVxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFxyXG4gKi9cclxuY29uc3QgY2hvb3NlUmFua1ByaW9yaXR5SGlnaGVzdCA9IChjb2xsZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBDaWNsb1ByaW9yaXR5ID0gW1wiQUFBXCIsXCJBQVwiLFwiQVwiLFwiTGVhcm5pbmcgaW4gUHJvY2Vzcy4uXCIsbnVsbF07XHJcblxyXG4gICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgQ2ljbG9Qcmlvcml0eSl7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmlsdGVyKFJlQWIgPT4gUmVBYi5yYW5rLnByaW9yaXR5ID09IHByaW9yaXR5KVxyXG5cclxuICAgICAgICBpZiAoZmlsdGVyQ29sbGVjdGlvbi5sZW5ndGggPj0gMikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckNvbGxlY3Rpb247XHJcblxyXG4gICAgICAgIH0gIGVsc2UgaWYgKGZpbHRlckNvbGxlY3Rpb24ubGVuZ3RoID09IDEpIHsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyQ29sbGVjdGlvbjtcclxuXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqICAgIDMuLSAgY2hvb3NlRm9yUmFua1R1cm4oKVxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFxyXG4gKi9cclxuY29uc3QgY2hvb3NlRm9yUmFua1R1cm4gPSAoY29sbGVjdGlvbikgPT4ge1xyXG5cclxuICAgIGlmKGNvbGxlY3Rpb24ubGVuZ3RoID49Mil7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPD0gSW5maW5pdHk7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IFJlQWJXaXRoTWluaW11blJhbmtUdXJuID0gY29sbGVjdGlvbi5maWx0ZXIoUmVhYlNlbGVjVHVybiA9PiBSZWFiU2VsZWNUdXJuLnJhbmsudHVybiA9PSBpKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKFJlQWJXaXRoTWluaW11blJhbmtUdXJuLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVBYldpdGhNaW5pbXVuUmFua1R1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgIHJldHVybiBjb2xsZWN0aW9uO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiogICAgNC4tICBjaG9vc2VGb3JQcmVmZXJlbmNlT2ZMZWFybmluZygpXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gXHJcbiAqL1xyXG5jb25zdCBjaG9vc2VGb3JQcmVmZXJlbmNlT2ZMZWFybmluZyA9IChjb2xsZWN0aW9uKSA9PiB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBbMCxjb2xsZWN0aW9uWzBdLnJhbmsuY2hvb3NlRm9yUHJlZmVyZW5jZU9mTGVhcm5pbmddO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICBpZihjb2xsZWN0aW9uW2ldLnJhbmsuY2hvb3NlRm9yUHJlZmVyZW5jZU9mTGVhcm5pbmcgPCBwb3NpdGlvblsxXSl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gW2ksY29sbGVjdGlvbltpXS5yYW5rLmNob29zZUZvclByZWZlcmVuY2VPZkxlYXJuaW5nXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaSA9PSAoY29sbGVjdGlvbi5sZW5ndGgtMSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbltwb3NpdGlvblswXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7Y3VzdG9tRmlsdGVyfSBmcm9tICcuL2N1c3RvbUZpbHRlci5qcyc7XHJcbmltcG9ydCB7ZXh0cmFjdEluZm9ybWF0aW9ufSBmcm9tICcuL2V4dHJhY3RJbmZvcm1hdGlvbi5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJlQWJTZWxlY3QgPSAoY29sbGVjdGlvbixzZWFyY2hQYXJhbWV0ZXJzKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJDb2xsZWN0aW9uID0gY3VzdG9tRmlsdGVyKGNvbGxlY3Rpb24sc2VhcmNoUGFyYW1ldGVycyk7XHJcblxyXG4gICAgcmV0dXJuIGV4dHJhY3RJbmZvcm1hdGlvbihjb2xsZWN0aW9uLGZpbHRlckNvbGxlY3Rpb24sc2VhcmNoUGFyYW1ldGVycyk7ICAvLyBlbCByb3V0ZXIgc2UgZWplY3V0YSBhcXVpIGRlbnRybyAgICAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vUmVBYlNlbGVjdG9yIHNlIGVqZWN1dGEgZGVzZGUgY3VzdG9tRmlsdGVyIGRlIFJlQWIuY3JlYXRlICB5IGRlc2RlIGFsZ3VuIG1vZHVsbyBkZSBSZUFiLnNjb3JlKClcclxuXHJcbiAgLy8gbGEgYmFqYSBkZSBpbnRlcmlvcml6YWNpb24gYWwgY29tcGFyYXIgbGEgc2VsZWNjaW9uIHRyYWRpY2lvbmFsIGNvbiBsYSBlc2NvZ2lkYSBzZSBoYXLDoSBlbiBSZUFiLnNjb3JlKCkgcGFyYSBubyBkYcOxYXIgZWwgcmV0b3JubyBkZSBlc3RhIGZ1bmNpw7NuIiwiaW1wb3J0IHtSZUFiU2VsZWN0b3J9IGZyb20gJy4vUmVBYlNlbGVjdG9yLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjdXN0b21GaWx0ZXIgPSAoY29sbGVjdGlvbixzZWFyY2hQYXJhbWV0ZXJzKSA9PiB7XHJcbiAgICBpZighc2VhcmNoUGFyYW1ldGVycyl7cmV0dXJuIFJlQWJTZWxlY3Rvcihjb2xsZWN0aW9uKX1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVyYWNpb24gZGUgZmlsdHJhZG8gZGUgYnVzcXVlZGEgbcOhcyBjb21wbGVqb1wiKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtwcm9jZXNzUm91dGVyfSBmcm9tICcuL3Byb2Nlc3NSb3V0ZXIuanMnO1xyXG5pbXBvcnQge3BhcnNlUm91dGVyfSBmcm9tICcuL1BhcnNlUm91dGVyLmpzJztcclxuXHJcblxyXG5cclxuLyoqIFxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFxyXG4gKiBAcGFyYW0geyp9IGZpbHRlckNvbGxlY3Rpb24gXHJcbiAqIEBwYXJhbSB7Kn0gc2VhcmNoUGFyYW1ldGVycyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0SW5mb3JtYXRpb24gPSAoY29sbGVjdGlvbixmaWx0ZXJDb2xsZWN0aW9uLHNlYXJjaFBhcmFtZXRlcnMpID0+IHtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbkluQ29sbGVjdGlvbiA9IHBvc2l0aW9uSW5Db2xsZWN0aW9uTWF0Y2goY29sbGVjdGlvbixmaWx0ZXJDb2xsZWN0aW9uKTtcclxuICAgIGxldCByb3V0ZURpcmVjdGlvbiA9IHByb2Nlc3NSb3V0ZXIoZmlsdGVyQ29sbGVjdGlvbi5pbmZvLnJvdXRlKTsgICBcclxuXHJcbiAgICByb3V0ZURpcmVjdGlvbi5zcGxpY2UoMCwwLHBvc2l0aW9uSW5Db2xsZWN0aW9uKTsgIFxyXG4gICAgY29uc3QgcXVlc3Rpb24gPSByb3V0ZURpcmVjdGlvbi5jb25jYXQoJ3F1ZXN0aW9uJyk7XHJcbiAgICBjb25zdCBtbmVtb25pY3MgPSByb3V0ZURpcmVjdGlvbi5jb25jYXQoJ21uZW1vbmljcycpO1xyXG4gICAgY29uc3QgcXVlc3RBdXhSZXNvdXJjZXMgPSByb3V0ZURpcmVjdGlvbi5jb25jYXQoJ2ludGVyY29uZWN0aW9ucycsJ3F1ZXN0QXV4UmVzb3VyY2VzJyk7XHJcbiAgICBjb25zdCBjYW52YXMgPSByb3V0ZURpcmVjdGlvbi5jb25jYXQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgYW5vdGF0aW9ucyA9IHJvdXRlRGlyZWN0aW9uLmNvbmNhdCgnaW50ZXJjb25lY3Rpb25zJywnYW5vdGF0aW9ucycpO1xyXG4gICAgY29uc3Qgc3BhY2UgPSByb3V0ZURpcmVjdGlvbi5jb25jYXQoJ3NwYWNlJyk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcm91dGU6IHJvdXRlRGlyZWN0aW9uLFxyXG4gICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblNlbGVjdG9yKHBhcnNlUm91dGVyKGNvbGxlY3Rpb24scXVlc3Rpb24pKSwgICBcclxuICAgICAgICBJZDogZmlsdGVyQ29sbGVjdGlvbi5pbmZvLnJvdXRlLFxyXG4gICAgICAgIG11bHRpcGxlQ2hvaWNlQW5zd2VyczogW1wibm8gZGlzcG9uaWJsZSBwb3IgYWhvcmFcIl0sICAgICAgIFxyXG4gICAgICAgIG1uZW1vbmljczogcGFyc2VSb3V0ZXIoY29sbGVjdGlvbixtbmVtb25pY3MpLFxyXG4gICAgICAgIHF1ZXN0QXV4UmVzb3VyY2VzOiBwYXJzZVJvdXRlcihjb2xsZWN0aW9uLHF1ZXN0QXV4UmVzb3VyY2VzKSxcclxuICAgICAgICBjYW52YXM6IHBhcnNlUm91dGVyKGNvbGxlY3Rpb24sY2FudmFzKSxcclxuICAgICAgICBhbm90YXRpb25zOiBwYXJzZVJvdXRlcihjb2xsZWN0aW9uLGFub3RhdGlvbnMpLFxyXG4gICAgICAgIHNwYWNlOiBwYXJzZVJvdXRlcihjb2xsZWN0aW9uLHNwYWNlKSxcclxuICAgICAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHF1ZXN0aW9uU2VsZWN0b3IgPSAocXVlc3Rpb25zKSA9PiB7XHJcbiAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb25zWzBdO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHJldHVybiBxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnF1ZXN0aW9ucy5sZW5ndGgpXTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwb3NpdGlvbkluQ29sbGVjdGlvbk1hdGNoID0gKGNvbGxlY3Rpb24sZmlsdGVyQ29sbGVjdGlvbikgPT4ge1xyXG4gICAgZm9yKGxldCBpPTA7IGk8PSBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihmaWx0ZXJDb2xsZWN0aW9uID09IGNvbGxlY3Rpb25baV0pe1xyXG4gICAgICAgICAgICByZXR1cm4gIGkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqICAgICAgICAgICAgICAgICAxLi0gIHByb2Nlc3NSb3V0ZXIoKVxyXG4gKiAgICAgIGNvbnZpZXJ0ZSBlbCBwcm9jZXNzSWQgZGUgdW4gc3RyaW5nLCBvIGVsIHJvdXRlciBkZSB1biBSZUFiIFxyXG4gKiAgICAgIGVuIHVuYSBydXRhIGRlIGFjY2VzbyB2YWxpZGEgYSB1biBwcm9jZXNvIHkvbyBiaWZ1cmNhY2nDs25cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmd1bWVudFRvUm91dGUgXHJcbiAqIEByZXR1cm4ge2FycmF5fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSb3V0ZXIgPSAoYXJndW1lbnRUb1JvdXRlKSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGVDb252ZXJ0ZXIoYXJndW1lbnRUb1JvdXRlKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCByb3V0ZUNvbnZlcnRlciA9IChhcmd1bWVudFRvUm91dGUpID0+IHsgICBcclxuICAgIGxldCByb3V0ZSA9IFtdO1xyXG4gICAgbGV0IHNwbGl0QXJndW1lbnRUb1JvdXRlID0gYXJndW1lbnRUb1JvdXRlLnNwbGl0KCcsICcpOyBcclxuXHJcbiAgICBpZihzcGxpdEFyZ3VtZW50VG9Sb3V0ZS5sZW5ndGggPT0gMSl7XHJcbiAgICAgIHJvdXRlWzBdID0gJ3Byb2Nlc3MnO1xyXG4gICAgICByb3V0ZVsxXSA9ICBwYXJzZUludChzcGxpdEFyZ3VtZW50VG9Sb3V0ZVswXSkgLTEgOyAgXHJcbiAgICAgIHJldHVybiByb3V0ZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZVswXSA9ICdwcm9jZXNzJzsgIFxyXG4gICAgICByb3V0ZVsxXSA9ICBwYXJzZUludChzcGxpdEFyZ3VtZW50VG9Sb3V0ZVswXSkgLTEgOyAgXHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0xOyBpIDw9IChzcGxpdEFyZ3VtZW50VG9Sb3V0ZSsxKTsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHNwbGl0QXJndW1lbnRUb1JvdXRlW2ldLnN1YlN0cmluZygwKSAhPSBcIjFcIil7XHJcbiAgICAgICAgICAgICAgICByb3V0ZS5wdXNoKCdicmFuY2gnKTsgXHJcbiAgICAgICAgICAgICAgICByb3V0ZS5wdXNoKCAocGFyc2VJbnQoc3BsaXRBcmd1bWVudFRvUm91dGVbaV0uc3ViU3RyaW5nKDApKSAtMikgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaSA9PSBzcGxpdEFyZ3VtZW50VG9Sb3V0ZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==