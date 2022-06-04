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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/images/hills.png":
/*!******************************!*\
  !*** ./src/images/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/images/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/images/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hills.png */ "./src/images/hills.png");
/* harmony import */ var _images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/platformSmallTall.png */ "./src/images/platformSmallTall.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var scrollOffSet = 0;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.velocity.y + this.height <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y,
      image: image
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y,
      image: image
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImg(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  return img;
}

var platformImg = createImg(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImg = createImg(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var backgroundImg = createImg(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var hillsImg = createImg(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  },
  down: {
    pressed: false
  }
};

function init() {
  scrollOffSet = 0;

  function createImg(imgSrc) {
    var img = new Image();
    img.src = imgSrc;
    return img;
  }

  platformImg = createImg(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformSmallTallImg = createImg(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  backgroundImg = createImg(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  hillsImg = createImg(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImg.width * 2.5,
    y: 360,
    image: platformSmallTallImg
  }), new Platform({
    x: platformImg.width * 4 + 340,
    y: 360,
    image: platformSmallTallImg
  }), new Platform({
    x: platformImg.width * 5 + 100,
    y: 200,
    image: platformSmallTallImg
  }), new Platform({
    x: platformImg.width * 8 - 150,
    y: 360,
    image: platformSmallTallImg
  }), new Platform({
    x: -1,
    y: 460,
    image: platformImg
  }), new Platform({
    x: platformImg.width + 100,
    y: 460,
    image: platformImg
  }), new Platform({
    x: platformImg.width * 3.5 + 50,
    y: 460,
    image: platformImg
  }), new Platform({
    x: platformImg.width * 6 + 150,
    y: 460,
    image: platformImg
  }), new Platform({
    x: platformImg.width * 7 + 150 - 10,
    y: 460,
    image: platformImg
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: backgroundImg
  }), new GenericObject({
    x: -1,
    y: -1,
    image: hillsImg
  }), new GenericObject({
    x: backgroundImg.width - 10,
    y: -1,
    image: backgroundImg
  }), new GenericObject({
    x: hillsImg.width - 10,
    y: -1,
    image: hillsImg
  })];
  keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    },
    up: {
      pressed: false
    },
    down: {
      pressed: false
    }
  };
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  platforms.forEach(function (platform) {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffSet === 0 && player.position.x > 0) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffSet += player.speed;
        platform.position.x -= player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * 0.5;
        });
      } else if (keys.left.pressed && scrollOffSet > 0) {
        scrollOffSet -= player.speed;
        platform.position.x += player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed * 0.5;
        });
      }
    }
  });
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x & player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (scrollOffSet > platformImg.width * 7 + 150 - 10) {
    console.log("you win");
  }

  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();
addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 87:
      console.log("up");
      keys.up.pressed = true;
      player.velocity.y = -14;
      break;
  }
});
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
      console.log("up");
      keys.up.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map