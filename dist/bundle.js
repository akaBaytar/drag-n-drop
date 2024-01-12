/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base.ts":
/*!********************************!*\
  !*** ./src/components/base.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
var Component = (function () {
    function Component(templateID, appID, insertAtStart, newElementID) {
        this.templateDOM = document.querySelector("#".concat(templateID));
        this.appDOM = document.querySelector("#".concat(appID));
        var importedNode = document.importNode(this.templateDOM.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementID)
            this.element.id = newElementID;
        this.attach(insertAtStart);
    }
    Component.prototype.attach = function (insertAtBegin) {
        this.appDOM.insertAdjacentElement(insertAtBegin ? 'afterbegin' : 'beforeend', this.element);
    };
    return Component;
}());



/***/ }),

/***/ "./src/components/form-inputs.ts":
/*!***************************************!*\
  !*** ./src/components/form-inputs.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectInput: () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/components/base.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/validation */ "./src/util/validation.ts");
/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/index */ "./src/state/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectInput = (function (_super) {
    __extends(ProjectInput, _super);
    function ProjectInput() {
        var _this = _super.call(this, 'project-input', 'app', true, 'user-input') || this;
        _this.titleDOM = _this.element.querySelector('#title');
        _this.descriptionDOM = _this.element.querySelector('#description');
        _this.peopleDOM = _this.element.querySelector('#people');
        _this.configure();
        return _this;
    }
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler);
    };
    ProjectInput.prototype.renderContent = function () { };
    ProjectInput.prototype.getUserInput = function () {
        var title = this.titleDOM.value;
        var description = this.descriptionDOM.value;
        var people = this.peopleDOM.value;
        var titleValidation = {
            value: title,
            required: true,
        };
        var descriptionValidation = {
            value: description,
            required: true,
            minLength: 5,
        };
        var peopleValidation = {
            value: +people,
            required: true,
            min: 1,
            max: 10,
        };
        if (!(0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.validate)(titleValidation) ||
            !(0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.validate)(descriptionValidation) ||
            !(0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.validate)(peopleValidation)) {
            alert('Invalid input, please fill all inputs.');
            return;
        }
        else {
            return [title, description, +people];
        }
    };
    ProjectInput.prototype.clearInputs = function () {
        this.titleDOM.value = '';
        this.descriptionDOM.value = '';
        this.peopleDOM.value = '';
    };
    ProjectInput.prototype.submitHandler = function (e) {
        e.preventDefault();
        var userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            var title = userInput[0], desc = userInput[1], people = userInput[2];
            _state_index__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    };
    __decorate([
        _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.bindDecorator
    ], ProjectInput.prototype, "submitHandler", null);
    return ProjectInput;
}(_base__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/components/item.ts":
/*!********************************!*\
  !*** ./src/components/item.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/components/base.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProjectItem = (function (_super) {
    __extends(ProjectItem, _super);
    function ProjectItem(appID, project) {
        var _this = _super.call(this, 'single-project', appID, false, project.id) || this;
        _this.project = project;
        _this.configure();
        _this.renderContent();
        return _this;
    }
    Object.defineProperty(ProjectItem.prototype, "people", {
        get: function () {
            if (this.project.people === 1) {
                return '1 person';
            }
            else {
                return "".concat(this.project.people, " people");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProjectItem.prototype.dragStartHandler = function (e) {
        e.dataTransfer.setData('text/plain', this.project.id);
        e.dataTransfer.effectAllowed = 'copy';
    };
    ProjectItem.prototype.dragEndHandler = function (_) { };
    ProjectItem.prototype.configure = function () {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    };
    ProjectItem.prototype.renderContent = function () {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('span').textContent = this.people + ' assigned';
        this.element.querySelector('p').textContent = this.project.description;
    };
    __decorate([
        _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.bindDecorator
    ], ProjectItem.prototype, "dragStartHandler", null);
    return ProjectItem;
}(_base__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/components/lists.ts":
/*!*********************************!*\
  !*** ./src/components/lists.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/components/base.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/components/item.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/index */ "./src/state/index.ts");
/* harmony import */ var _models_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/type */ "./src/models/type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectList = (function (_super) {
    __extends(ProjectList, _super);
    function ProjectList(type) {
        var _this = _super.call(this, 'project-list', 'app', false, "".concat(type, "-projects")) || this;
        _this.type = type;
        _this.assignedProjects = [];
        _this.configure();
        _this.renderContent();
        return _this;
    }
    ProjectList.prototype.renderContent = function () {
        var id = "".concat(this.type, "-projects-list");
        this.element.querySelector('ul').id = id;
        this.element.querySelector('h2').textContent = this.type + ' Projects';
    };
    ProjectList.prototype.dragOverHandler = function (e) {
        if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
            e.preventDefault();
            this.element.querySelector('ul').classList.add('droppable');
        }
    };
    ProjectList.prototype.dropHandler = function (e) {
        var id = e.dataTransfer.getData('text/plain');
        _state_index__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(id, this.type === 'Active' ? _models_type__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Active : _models_type__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Finished);
        this.element.querySelector('ul').classList.remove('droppable');
    };
    ProjectList.prototype.dragLeaveHandler = function (_) {
        this.element.querySelector('ul').classList.remove('droppable');
    };
    ProjectList.prototype.configure = function () {
        var _this = this;
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        _state_index__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener(function (projects) {
            var relevantProjects = projects.filter(function (project) {
                if (_this.type === 'Active') {
                    return project.status === _models_type__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Active;
                }
                return project.status === _models_type__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Finished;
            });
            _this.assignedProjects = relevantProjects;
            _this.renderProjects();
        });
    };
    ProjectList.prototype.renderProjects = function () {
        var listDOM = document.querySelector("#".concat(this.type, "-projects-list"));
        listDOM.innerHTML = '';
        for (var _i = 0, _a = this.assignedProjects; _i < _a.length; _i++) {
            var project = _a[_i];
            new _item__WEBPACK_IMPORTED_MODULE_1__.ProjectItem(this.element.querySelector('ul').id, project);
        }
    };
    __decorate([
        _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.bindDecorator
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.bindDecorator
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.bindDecorator
    ], ProjectList.prototype, "dragLeaveHandler", null);
    return ProjectList;
}(_base__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindDecorator: () => (/* binding */ bindDecorator)
/* harmony export */ });
var bindDecorator = function (_, __, desriptor) {
    var originalMethod = desriptor.value;
    var adjustDesriptor = {
        configurable: true,
        get: function () {
            var boundFunc = originalMethod.bind(this);
            return boundFunc;
        },
    };
    return adjustDesriptor;
};


/***/ }),

/***/ "./src/models/type.ts":
/*!****************************!*\
  !*** ./src/models/type.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectStatus: () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
var Project = (function () {
    function Project(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
    return Project;
}());



/***/ }),

/***/ "./src/state/index.ts":
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectState: () => (/* binding */ ProjectState),
/* harmony export */   projectState: () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/type */ "./src/models/type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var State = (function () {
    function State() {
        this.listeners = [];
    }
    State.prototype.addListener = function (listenerFunc) {
        this.listeners.push(listenerFunc);
    };
    return State;
}());
var ProjectState = (function (_super) {
    __extends(ProjectState, _super);
    function ProjectState() {
        var _this = _super.call(this) || this;
        _this.projects = [];
        return _this;
    }
    ProjectState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    };
    ProjectState.prototype.addProject = function (title, description, people) {
        var newProject = new _models_type__WEBPACK_IMPORTED_MODULE_0__.Project(Math.floor(Math.random() * 100000).toString(), title, description, people, _models_type__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    };
    ProjectState.prototype.moveProject = function (id, newStatus) {
        var project = this.projects.find(function (project) { return project.id === id; });
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    };
    ProjectState.prototype.updateListeners = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFunc = _a[_i];
            listenerFunc(this.projects.slice());
        }
    };
    return ProjectState;
}(State));

var projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
var validate = function (input) {
    var isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0;
    }
    if (input.minLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length >= input.minLength;
    }
    if (input.maxLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length <= input.maxLength;
    }
    if (input.min != null && typeof input.value === 'number') {
        isValid = isValid && input.value >= input.min;
    }
    if (input.max != null && typeof input.value === 'number') {
        isValid = isValid && input.value <= input.max;
    }
    return isValid;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-inputs */ "./src/components/form-inputs.ts");
/* harmony import */ var _components_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lists */ "./src/components/lists.ts");


new _components_form_inputs__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
new _components_lists__WEBPACK_IMPORTED_MODULE_1__.ProjectList('Active');
new _components_lists__WEBPACK_IMPORTED_MODULE_1__.ProjectList('Finished');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDUDtBQUdqRCxJQUFJLGlFQUFZLEVBQUUsQ0FBQztBQUNuQixJQUFJLDBEQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsSUFBSSwwREFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJhZy1uLWRyb3AvLi9zcmMvY29tcG9uZW50cy9iYXNlLnRzIiwid2VicGFjazovL2RyYWctbi1kcm9wLy4vc3JjL2NvbXBvbmVudHMvZm9ybS1pbnB1dHMudHMiLCJ3ZWJwYWNrOi8vZHJhZy1uLWRyb3AvLi9zcmMvY29tcG9uZW50cy9pdGVtLnRzIiwid2VicGFjazovL2RyYWctbi1kcm9wLy4vc3JjL2NvbXBvbmVudHMvbGlzdHMudHMiLCJ3ZWJwYWNrOi8vZHJhZy1uLWRyb3AvLi9zcmMvZGVjb3JhdG9ycy9hdXRvYmluZC50cyIsIndlYnBhY2s6Ly9kcmFnLW4tZHJvcC8uL3NyYy9tb2RlbHMvdHlwZS50cyIsIndlYnBhY2s6Ly9kcmFnLW4tZHJvcC8uL3NyYy9zdGF0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly9kcmFnLW4tZHJvcC8uL3NyYy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vZHJhZy1uLWRyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHJhZy1uLWRyb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RyYWctbi1kcm9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHJhZy1uLWRyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcmFnLW4tZHJvcC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICAvLyBjb21wb25lbnQgYmFzZVxyXG4gIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50LCBVIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcclxuICAgIHRlbXBsYXRlRE9NOiBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgYXBwRE9NOiBUO1xyXG4gICAgZWxlbWVudDogVTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgdGVtcGxhdGVJRDogc3RyaW5nLFxyXG4gICAgICBhcHBJRDogc3RyaW5nLFxyXG4gICAgICBpbnNlcnRBdFN0YXJ0OiBib29sZWFuLFxyXG4gICAgICBuZXdFbGVtZW50SUQ/OiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGVtcGxhdGVJRH1gKSE7XHJcbiAgICAgIHRoaXMuYXBwRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YXBwSUR9YCkhIGFzIFQ7XHJcblxyXG4gICAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVET00uY29udGVudCwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBVO1xyXG4gICAgICBpZiAobmV3RWxlbWVudElEKSB0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SUQ7XHJcblxyXG4gICAgICB0aGlzLmF0dGFjaChpbnNlcnRBdFN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGFjaChpbnNlcnRBdEJlZ2luOiBib29sZWFuKSB7XHJcbiAgICAgIHRoaXMuYXBwRE9NLmluc2VydEFkamFjZW50RWxlbWVudChcclxuICAgICAgICBpbnNlcnRBdEJlZ2luID8gJ2FmdGVyYmVnaW4nIDogJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgdGhpcy5lbGVtZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgY29uZmlndXJlKCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCByZW5kZXJDb250ZW50KCk6IHZvaWQ7XHJcbiAgfSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IGJpbmREZWNvcmF0b3IgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2F1dG9iaW5kJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiwgdmFsaWRhdGUgfSBmcm9tICcuLi91dGlsL3ZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9pbmRleCc7XHJcblxyXG4vLyB1c2VyIGZvcm0gcmVuZGVyaW5nXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxGb3JtRWxlbWVudD4ge1xyXG4gIHRpdGxlRE9NOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGRlc2NyaXB0aW9uRE9NOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHBlb3BsZURPTTogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigncHJvamVjdC1pbnB1dCcsICdhcHAnLCB0cnVlLCAndXNlci1pbnB1dCcpO1xyXG5cclxuICAgIHRoaXMudGl0bGVET00gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykhO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbkRPTSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKSE7XHJcbiAgICB0aGlzLnBlb3BsZURPTSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGVvcGxlJykhO1xyXG5cclxuICAgIHRoaXMuY29uZmlndXJlKCk7XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoKTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIGdldFVzZXJJbnB1dCgpOiBbc3RyaW5nLCBzdHJpbmcsIG51bWJlcl0gfCB2b2lkIHtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy50aXRsZURPTS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbkRPTS52YWx1ZTtcclxuICAgIGNvbnN0IHBlb3BsZSA9IHRoaXMucGVvcGxlRE9NLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlVmFsaWRhdGlvbjogVmFsaWRhdGlvbiA9IHtcclxuICAgICAgdmFsdWU6IHRpdGxlLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25WYWxpZGF0aW9uOiBWYWxpZGF0aW9uID0ge1xyXG4gICAgICB2YWx1ZTogZGVzY3JpcHRpb24sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBlb3BsZVZhbGlkYXRpb246IFZhbGlkYXRpb24gPSB7XHJcbiAgICAgIHZhbHVlOiArcGVvcGxlLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluOiAxLFxyXG4gICAgICBtYXg6IDEwLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICF2YWxpZGF0ZSh0aXRsZVZhbGlkYXRpb24pIHx8XHJcbiAgICAgICF2YWxpZGF0ZShkZXNjcmlwdGlvblZhbGlkYXRpb24pIHx8XHJcbiAgICAgICF2YWxpZGF0ZShwZW9wbGVWYWxpZGF0aW9uKVxyXG4gICAgKSB7XHJcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIGlucHV0LCBwbGVhc2UgZmlsbCBhbGwgaW5wdXRzLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gW3RpdGxlLCBkZXNjcmlwdGlvbiwgK3Blb3BsZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySW5wdXRzKCkge1xyXG4gICAgdGhpcy50aXRsZURPTS52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbkRPTS52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5wZW9wbGVET00udmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIEBiaW5kRGVjb3JhdG9yXHJcbiAgcHJpdmF0ZSBzdWJtaXRIYW5kbGVyKGU6IEV2ZW50KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmdldFVzZXJJbnB1dCgpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xyXG4gICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXQ7XHJcbiAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xyXG4gICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy90eXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgYmluZERlY29yYXRvciB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQnO1xyXG5cclxuLy8gbGlzdCBpdGVtIHJlbmRlcmluZ1xyXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW1cclxuICBleHRlbmRzIENvbXBvbmVudDxIVE1MVUxpc3RFbGVtZW50LCBIVE1MTElFbGVtZW50PlxyXG4gIGltcGxlbWVudHMgRHJhZ2dhYmxlXHJcbntcclxuICBwcml2YXRlIHByb2plY3Q6IFByb2plY3Q7XHJcblxyXG4gIGdldCBwZW9wbGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9qZWN0LnBlb3BsZSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gJzEgcGVyc29uJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZW9wbGVgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoYXBwSUQ6IHN0cmluZywgcHJvamVjdDogUHJvamVjdCkge1xyXG4gICAgc3VwZXIoJ3NpbmdsZS1wcm9qZWN0JywgYXBwSUQsIGZhbHNlLCBwcm9qZWN0LmlkKTtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgQGJpbmREZWNvcmF0b3JcclxuICBkcmFnU3RhcnRIYW5kbGVyKGU6IERyYWdFdmVudCkge1xyXG4gICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnByb2plY3QuaWQpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIhLmVmZmVjdEFsbG93ZWQgPSAnY29weSc7XHJcbiAgfVxyXG5cclxuICBkcmFnRW5kSGFuZGxlcihfOiBEcmFnRXZlbnQpIHt9XHJcblxyXG4gIGNvbmZpZ3VyZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpIS50ZXh0Q29udGVudCA9IHRoaXMucGVvcGxlICsgJyBhc3NpZ25lZCc7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tICcuL2l0ZW0nO1xyXG5pbXBvcnQgeyBiaW5kRGVjb3JhdG9yIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9hdXRvYmluZCc7XHJcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcclxuaW1wb3J0IHsgRHJhZ1RhcmdldCB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gJy4uL21vZGVscy90eXBlJztcclxuXHJcbi8vIHByb2plY3QgbGlzdHMgcmVuZGVyaW5nXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdFxyXG4gIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD5cclxuICBpbXBsZW1lbnRzIERyYWdUYXJnZXRcclxue1xyXG4gIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiAnQWN0aXZlJyB8ICdGaW5pc2hlZCcpIHtcclxuICAgIHN1cGVyKCdwcm9qZWN0LWxpc3QnLCAnYXBwJywgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XHJcblxyXG4gICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGlkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSEuaWQgPSBpZDtcclxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpIS50ZXh0Q29udGVudCA9IHRoaXMudHlwZSArICcgUHJvamVjdHMnO1xyXG4gIH1cclxuXHJcbiAgQGJpbmREZWNvcmF0b3JcclxuICBkcmFnT3ZlckhhbmRsZXIoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIgJiYgZS5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpIS5jbGFzc0xpc3QuYWRkKCdkcm9wcGFibGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBiaW5kRGVjb3JhdG9yXHJcbiAgZHJvcEhhbmRsZXIoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyIS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICBwcm9qZWN0U3RhdGUubW92ZVByb2plY3QoXHJcbiAgICAgIGlkLFxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdBY3RpdmUnID8gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkXHJcbiAgICApO1xyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xyXG4gIH1cclxuXHJcbiAgQGJpbmREZWNvcmF0b3JcclxuICBkcmFnTGVhdmVIYW5kbGVyKF86IERyYWdFdmVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcEhhbmRsZXIpO1xyXG5cclxuICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IFByb2plY3RbXSkgPT4ge1xyXG4gICAgICBjb25zdCByZWxldmFudFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0FjdGl2ZScpIHtcclxuICAgICAgICAgIHJldHVybiBwcm9qZWN0LnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5BY3RpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdC5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuRmluaXNoZWQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0cztcclxuICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xyXG4gICAgY29uc3QgbGlzdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGApITtcclxuXHJcbiAgICBsaXN0RE9NLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmFzc2lnbmVkUHJvamVjdHMpIHtcclxuICAgICAgbmV3IFByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpIS5pZCwgcHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIGRlY29yYXRvciBmb3IgYmluZFxyXG5leHBvcnQgY29uc3QgYmluZERlY29yYXRvciA9IChcclxuICBfOiBhbnksXHJcbiAgX186IHN0cmluZyxcclxuICBkZXNyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvclxyXG4pID0+IHtcclxuICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc3JpcHRvci52YWx1ZTtcclxuICBjb25zdCBhZGp1c3REZXNyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciA9IHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldCgpIHtcclxuICAgICAgY29uc3QgYm91bmRGdW5jID0gb3JpZ2luYWxNZXRob2QuYmluZCh0aGlzKTtcclxuICAgICAgcmV0dXJuIGJvdW5kRnVuYztcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gYWRqdXN0RGVzcmlwdG9yO1xyXG59O1xyXG4iLCIvLyBwcm9qZWN0IHR5cGVcclxuZXhwb3J0IGVudW0gUHJvamVjdFN0YXR1cyB7XHJcbiAgQWN0aXZlLFxyXG4gIEZpbmlzaGVkLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcGVvcGxlOiBudW1iZXIsXHJcbiAgICBwdWJsaWMgc3RhdHVzOiBQcm9qZWN0U3RhdHVzXHJcbiAgKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvdHlwZSc7XHJcblxyXG4vLyBwcm9qZWN0IHN0YXRlIG1hbmFnZW1lbnRcclxudHlwZSBMaXN0ZW5lcjxUPiA9IChpdGVtczogVFtdKSA9PiB2b2lkO1xyXG5cclxuY2xhc3MgU3RhdGU8VD4ge1xyXG4gIHByb3RlY3RlZCBsaXN0ZW5lcnM6IExpc3RlbmVyPFQ+W10gPSBbXTtcclxuXHJcbiAgYWRkTGlzdGVuZXIobGlzdGVuZXJGdW5jOiBMaXN0ZW5lcjxUPikge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lckZ1bmMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlPFByb2plY3Q+IHtcclxuICBwcml2YXRlIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvamVjdFN0YXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgcGVvcGxlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKS50b1N0cmluZygpLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHBlb3BsZSxcclxuICAgICAgUHJvamVjdFN0YXR1cy5BY3RpdmVcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG1vdmVQcm9qZWN0KGlkOiBzdHJpbmcsIG5ld1N0YXR1czogUHJvamVjdFN0YXR1cykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHByb2plY3QgJiYgcHJvamVjdC5zdGF0dXMgIT09IG5ld1N0YXR1cykge1xyXG4gICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTGlzdGVuZXJzKCkge1xyXG4gICAgZm9yIChjb25zdCBsaXN0ZW5lckZ1bmMgb2YgdGhpcy5saXN0ZW5lcnMpIHtcclxuICAgICAgbGlzdGVuZXJGdW5jKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlLmdldEluc3RhbmNlKCk7XHJcbiIsIi8vIHZhbGlkYXRpb24gZm9yIGlucHV0IGVsZW1lbnRzXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbiB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgbWluPzogbnVtYmVyO1xyXG4gIG1heD86IG51bWJlcjtcclxuICBtaW5MZW5ndGg/OiBudW1iZXI7XHJcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGUgPSAoaW5wdXQ6IFZhbGlkYXRpb24pID0+IHtcclxuICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlmIChpbnB1dC5yZXF1aXJlZCkge1xyXG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlucHV0Lm1pbkxlbmd0aCAhPSBudWxsICYmIHR5cGVvZiBpbnB1dC52YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIGlucHV0LnZhbHVlLmxlbmd0aCA+PSBpbnB1dC5taW5MZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQubWF4TGVuZ3RoICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUubGVuZ3RoIDw9IGlucHV0Lm1heExlbmd0aDtcclxuICB9XHJcblxyXG4gIGlmIChpbnB1dC5taW4gIT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQudmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiBpbnB1dC52YWx1ZSA+PSBpbnB1dC5taW47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQubWF4ICE9IG51bGwgJiYgdHlwZW9mIGlucHV0LnZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgaW5wdXQudmFsdWUgPD0gaW5wdXQubWF4O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlzVmFsaWQ7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdElucHV0IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0taW5wdXRzJztcclxuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdHMnO1xyXG5cclxuLy8gaW5pdGlhbGl6ZVxyXG5uZXcgUHJvamVjdElucHV0KCk7XHJcbm5ldyBQcm9qZWN0TGlzdCgnQWN0aXZlJyk7XHJcbm5ldyBQcm9qZWN0TGlzdCgnRmluaXNoZWQnKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9