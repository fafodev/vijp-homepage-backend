"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["main"],{

/***/ 8933:
/*!***************************************************!*\
  !*** ./src/@vex/animations/dropdown.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdownAnimation: () => (/* binding */ dropdownAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7172);

const dropdownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dropdown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms cubic-bezier(.35, 0, .25, 1)'))]);

/***/ }),

/***/ 5423:
/*!**************************************************!*\
  !*** ./src/@vex/animations/popover.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popoverAnimation: () => (/* binding */ popoverAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7172);

const popoverAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transformPopover', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale(0.6)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)'
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 4555:
/*!********************************************************!*\
  !*** ./src/@vex/animations/scale-fade-in.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaleFadeIn400ms: () => (/* binding */ scaleFadeIn400ms),
/* harmony export */   scaleFadeIn500ms: () => (/* binding */ scaleFadeIn500ms),
/* harmony export */   scaleFadeInAnimation: () => (/* binding */ scaleFadeInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7172);

function scaleFadeInAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleFadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(1)',
    opacity: 1
  }))])]);
}
const scaleFadeIn400ms = scaleFadeInAnimation(400);
const scaleFadeIn500ms = scaleFadeInAnimation(500);

/***/ }),

/***/ 7793:
/*!**********************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightDirective: () => (/* binding */ VexHighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.service */ 7215);



class VexHighlightDirective {
  constructor(_highlightService, _zone) {
    this._highlightService = _highlightService;
    this._zone = _zone;
    /** An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    this.languages = [];
    /** Stream that emits when code string is highlighted */
    this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes['code'] && changes['code'].currentValue !== changes['code'].previousValue) {
      this.highlightElement(this.code, this.languages);
    }
  }
  /**
   * Highlighting with language detection and fix markup.
   * @param code Accepts a string with the code to highlight
   * @param languages An optional array of language names and aliases restricting detection to only those languages.
   * The subset can also be set with configure, but the local parameter overrides the option if set.
   */
  highlightElement(code, languages) {
    this._zone.runOutsideAngular(() => {
      const res = this._highlightService.highlightAuto(code, languages);
      this.highlightedCode = res.value;
      this.highlighted.emit(res);
    });
  }
  static {
    this.ɵfac = function VexHighlightDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_highlight_service__WEBPACK_IMPORTED_MODULE_0__.VexHighlightService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: VexHighlightDirective,
      selectors: [["", "vexHighlight", ""]],
      hostVars: 3,
      hostBindings: function VexHighlightDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("innerHTML", ctx.highlightedCode, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hljs", true);
        }
      },
      inputs: {
        languages: "languages",
        code: [0, "vexHighlight", "code"]
      },
      outputs: {
        highlighted: "highlighted"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
  }
}

/***/ }),

/***/ 5281:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEX_HIGHLIGHT_OPTIONS: () => (/* binding */ VEX_HIGHLIGHT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

const VEX_HIGHLIGHT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HIGHLIGHT_OPTIONS');

/***/ }),

/***/ 6518:
/*!*******************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightModule: () => (/* binding */ VexHighlightModule),
/* harmony export */   hljsLanguages: () => (/* binding */ hljsLanguages)
/* harmony export */ });
/* harmony import */ var _vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.directive */ 7793);
/* harmony import */ var _vex_highlight_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-highlight.model */ 5281);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ 5469);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ 1982);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ 7457);
/* harmony import */ var _vex_highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vex-highlight.service */ 7215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);


/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */





/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
  return [{
    name: 'typescript',
    func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    name: 'scss',
    func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    name: 'xml',
    func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__["default"]
  }];
}
class VexHighlightModule {
  static {
    this.ɵfac = function VexHighlightModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexHighlightModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: VexHighlightModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [{
        provide: _vex_highlight_model__WEBPACK_IMPORTED_MODULE_1__.VEX_HIGHLIGHT_OPTIONS,
        useValue: {
          languages: hljsLanguages
        }
      }, _vex_highlight_service__WEBPACK_IMPORTED_MODULE_5__.VexHighlightService]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VexHighlightModule, {
    imports: [_vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.VexHighlightDirective],
    exports: [_vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.VexHighlightDirective]
  });
})();

/***/ }),

/***/ 7215:
/*!********************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightService: () => (/* binding */ VexHighlightService)
/* harmony export */ });
/* harmony import */ var _vex_highlight_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.model */ 5281);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ 2885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class VexHighlightService {
  constructor(options) {
    if (options) {
      // Register HighlightJS languages
      options.languages?.().map(language => this.registerLanguage(language.name, language.func));
      if (options.config) {
        // Set global config if present
        this.configure(options.config);
      }
    }
    // Throw an error if no languages were registered.
    if (this.listLanguages().length < 1) {
      throw new Error('[HighlightJS]: No languages were registered!');
    }
  }
  /**
   * Core highlighting function.
   * @param name Accepts a language name, or an alias
   * @param value A string with the code to highlight.
   * @param ignoreIllegals When present and evaluates to a true value, forces highlighting to finish
   * even in case of detecting illegal syntax for the language instead of throwing an exception.
   * When present, the function will restart parsing from this state instead of initializing a new one
   */
  highlight(name, value, ignoreIllegals) {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlight(name, value, ignoreIllegals);
  }
  /**
   * Highlighting with language detection.
   * @param value Accepts a string with the code to highlight
   * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
   * The subset can also be set with configure, but the local parameter overrides the option if set.
   */
  highlightAuto(value, languageSubset) {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlightAuto(value, languageSubset);
  }
  /**
   * Applies highlighting to a DOM node containing code.
   * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
   * See the class reference for all available language names and aliases.
   * @param block The element to apply highlight on.
   */
  highlightBlock(block) {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlightBlock(block);
  }
  /**
   * Configures global options:
   */
  configure(config) {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].configure(config);
  }
  /**
   * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
   */
  initHighlighting() {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].initHighlighting();
  }
  /**
   * Adds new language to the library under the specified name. Used mostly internally.
   * @param name A string with the name of the language being registered
   * @param language A function that returns an object which represents the language definition.
   * The function is passed the hljs object to be able to use common regular expressions defined within it.
   */
  registerLanguage(name, language) {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage(name, language);
  }
  /**
   * @return The languages names list.
   */
  listLanguages() {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].listLanguages();
  }
  /**
   * Looks up a language by name or alias.
   * @param name Language name
   * @return The language object if found, undefined otherwise.
   */
  getLanguage(name) {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguage(name);
  }
  static {
    this.ɵfac = function VexHighlightService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexHighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_vex_highlight_model__WEBPACK_IMPORTED_MODULE_0__.VEX_HIGHLIGHT_OPTIONS));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: VexHighlightService,
      factory: VexHighlightService.ɵfac
    });
  }
}

/***/ }),

/***/ 1538:
/*!************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover-ref.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverRef: () => (/* binding */ VexPopoverRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);

class VexPopoverRef {
  constructor(overlay, content, data) {
    this.overlay = overlay;
    this.content = content;
    this.data = data;
    this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.afterClosed$ = this.afterClosed.asObservable();
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', undefined);
    });
  }
  close(data) {
    this._close('close', data);
  }
  _close(type, data) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}

/***/ }),

/***/ 6851:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverComponent: () => (/* binding */ VexPopoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/popover.animation */ 5423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-popover-ref */ 1538);





function VexPopoverComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function VexPopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function VexPopoverComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VexPopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content)("ngTemplateOutletContext", ctx_r0.context);
  }
}
function VexPopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function VexPopoverComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VexPopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r0.content);
  }
}
class VexPopoverComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.renderMethod = 'component';
  }
  ngOnInit() {
    this.content = this.popoverRef.content;
    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }
    if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
  static {
    this.ɵfac = function VexPopoverComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__.VexPopoverRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VexPopoverComponent,
      selectors: [["vex-popover"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 5,
      consts: [[1, "vex-popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]],
      template: function VexPopoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VexPopoverComponent_div_2_Template, 1, 1, "div", 2)(3, VexPopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3)(4, VexPopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPopover", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "template");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "component");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgComponentOutlet],
      styles: ["[_nghost-%COMP%], \n.vex-popover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXBvcG92ZXIvdmV4LXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksV0FBQTtFQUNBLFlBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxuLnZleC1wb3BvdmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__.popoverAnimation]
      }
    });
  }
}

/***/ }),

/***/ 1707:
/*!****************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverService: () => (/* binding */ VexPopoverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-popover-ref */ 1538);
/* harmony import */ var _vex_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-popover.component */ 6851);







class VexPopoverService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  open({
    origin,
    content,
    data,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    const overlayRef = this.overlay.create(this.getOverlayConfig({
      origin,
      width,
      height,
      position,
      offsetX,
      offsetY
    }));
    const popoverRef = new _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef(overlayRef, content, data);
    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(_vex_popover_component__WEBPACK_IMPORTED_MODULE_1__.VexPopoverComponent, null, injector));
    return popoverRef;
  }
  static getPositions() {
    return [{
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }, {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }];
  }
  createInjector(popoverRef, injector) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create({
      providers: [{
        provide: _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef,
        useValue: popoverRef
      }],
      parent: injector
    });
  }
  getOverlayConfig({
    origin,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'vex-popover-backdrop',
      positionStrategy: this.getOverlayPosition({
        origin,
        position,
        offsetX,
        offsetY
      }),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  getOverlayPosition({
    origin,
    position,
    offsetX,
    offsetY
  }) {
    return this.overlay.position().flexibleConnectedTo(origin).withPositions(position || VexPopoverService.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.vex-popover').withPush(true);
  }
  static {
    this.ɵfac = function VexPopoverService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexPopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: VexPopoverService,
      factory: VexPopoverService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 851:
/*!****************************************************************************!*\
  !*** ./src/@vex/components/vex-progress-bar/vex-progress-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexProgressBarComponent: () => (/* binding */ VexProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ 5545);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/router */ 2653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);








function VexProgressBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
  }
}
class VexProgressBarComponent {
  constructor(loader) {
    this.loader = loader;
    this.value$ = this.loader.useRef('router').value$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.delayWhen)(value => value === 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(200) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined)));
  }
  static {
    this.ɵfac = function VexProgressBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VexProgressBarComponent,
      selectors: [["vex-progress-bar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LOADING_BAR_CONFIG,
        useValue: {
          latencyThreshold: 80
        }
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 14,
      consts: [["class", "overlay", 4, "ngIf"], ["mode", "indeterminate", 1, "progress-bar", "vijp-red", 3, "value"], [1, "overlay"]],
      template: function VexProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VexProgressBarComponent_div_0_Template, 1, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-progress-bar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.value$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) > 0 && ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.value$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) !== 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.value$)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0) > 0 && ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.value$)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0) !== 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx.value$)) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0);
        }
      },
      dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__.LoadingBarRouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: ["@charset \"UTF-8\";\n.progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n  transition: opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1) 200ms, visibility 0ms cubic-bezier(0.25, 0.8, 0.25, 1) 700ms;\n}\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms;\n}\n\n.vijp-red[_ngcontent-%COMP%] {\n  --mdc-linear-progress-active-indicator-color: #C8102E !important;\n  --mdc-linear-progress-track-color: rgba(200, 16, 46, 0.15) !important;\n}\n\n\n\n.vijp-yellow[_ngcontent-%COMP%] {\n  --mdc-linear-progress-active-indicator-color: #F4A300 !important;\n  --mdc-linear-progress-track-color: rgba(244, 163, 0, 0.15) !important;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.4);\n  z-index: 99998;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXByb2dyZXNzLWJhci92ZXgtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdoQjtFQUNJLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUhBQUE7QUFESjtBQUlJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7QUFGUjs7QUFNQTtFQUNFLGdFQUFBO0VBQ0EscUVBQUE7QUFIRjs7QUFNQSxrQ0FBQTtBQUNBO0VBQ0UsZ0VBQUE7RUFDQSxxRUFBQTtBQUhGOztBQUtBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIiR0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiR0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcblxuLnByb2dyZXNzLWJhciB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zaXRpb24tZHVyYXRpb24gdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpICR0cmFuc2l0aW9uLWRlbGF5LFxuICAgICAgICB2aXNpYmlsaXR5IDBtcyB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIikgKCR0cmFuc2l0aW9uLWR1cmF0aW9uICsgJHRyYW5zaXRpb24tZGVsYXkpO1xuXG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdHJhbnNpdGlvbi1kdXJhdGlvbiB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIiksXG4gICAgICAgICAgICB2aXNpYmlsaXR5IDBtcyB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIikgMG1zO1xuICAgIH1cbn1cbi52aWpwLXJlZCB7XG4gIC0tbWRjLWxpbmVhci1wcm9ncmVzcy1hY3RpdmUtaW5kaWNhdG9yLWNvbG9yOiAjQzgxMDJFICFpbXBvcnRhbnQ7XG4gIC0tbWRjLWxpbmVhci1wcm9ncmVzcy10cmFjay1jb2xvcjogcmdiYSgyMDAsIDE2LCA0NiwgMC4xNSkgIWltcG9ydGFudDtcbn1cblxuLyogbsOhwrrCv3UgbXXDocK7wpFuIG3Dg8KgdSB2w4PCoG5nIHRow4bCsMOGwqFuZyBoacOhwrvCh3UgKi9cbi52aWpwLXllbGxvdyB7XG4gIC0tbWRjLWxpbmVhci1wcm9ncmVzcy1hY3RpdmUtaW5kaWNhdG9yLWNvbG9yOiAjRjRBMzAwICFpbXBvcnRhbnQ7XG4gIC0tbWRjLWxpbmVhci1wcm9ncmVzcy10cmFjay1jb2xvcjogcmdiYSgyNDQsIDE2MywgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICB6LWluZGV4OiA5OTk5ODtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9183:
/*!**********************************************************************!*\
  !*** ./src/@vex/components/vex-scrollbar/vex-scrollbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexScrollbarComponent: () => (/* binding */ VexScrollbarComponent)
/* harmony export */ });
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ 3773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = ["*"];
class VexScrollbarComponent {
  constructor(_element, zone) {
    this._element = _element;
    this.zone = zone;
  }
  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](this._element.nativeElement, this.options);
    });
  }
  ngOnDestroy() {
    /**
     * Exists, but not typed in the type definition
     * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
     */
    if (this.scrollbarRef && this.scrollbarRef.unMount) {
      this.scrollbarRef.unMount();
    }
  }
  static {
    this.ɵfac = function VexScrollbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VexScrollbarComponent,
      selectors: [["vex-scrollbar"]],
      hostAttrs: [1, "vex-scrollbar"],
      inputs: {
        options: "options"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function VexScrollbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNjcm9sbGJhci92ZXgtc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6743:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-sidebar/vex-sidebar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSidebarComponent: () => (/* binding */ VexSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = ["*"];
class VexSidebarComponent {
  constructor(document) {
    this.document = document;
    this.position = 'left';
    this.invisibleBackdrop = false;
    this._opened = false;
  }
  get opened() {
    return this._opened;
  }
  set opened(opened) {
    this._opened = opened;
    opened ? this.enableScrollblock() : this.disableScrollblock();
  }
  get positionLeft() {
    return this.position === 'left';
  }
  get positionRight() {
    return this.position === 'right';
  }
  enableScrollblock() {
    if (!this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.add('vex-scrollblock');
    }
  }
  disableScrollblock() {
    if (this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.remove('vex-scrollblock');
    }
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function VexSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VexSidebarComponent,
      selectors: [["vex-sidebar"]],
      hostAttrs: [1, "vex-sidebar"],
      inputs: {
        position: "position",
        invisibleBackdrop: "invisibleBackdrop",
        opened: "opened"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 10,
      consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]],
      template: function VexSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VexSidebarComponent_Template_div_click_0_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opaque", ctx.invisibleBackdrop)("show", ctx.opened);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
        }
      },
      styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--vex-background-card);\n  bottom: 0;\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: transform, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  width: var(--vex-sidenav-width);\n  z-index: 1000;\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n.backdrop.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n.backdrop.opaque[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNpZGViYXIvdmV4LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0ZBQUE7RUFBQSxvR0FBQTtFQUFBLHVHQUFBO0FBQ0o7QUFDSTtFQW5CSjtJQW9CUSxnQkFBQTtFQUVOO0FBQ0Y7QUFBSTtFQUNJLE9BQUE7RUFDQSw0QkFBQTtBQUVSO0FBQ0k7RUFDSSxRQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUVJO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUlBO0VBQ0ksNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFHSTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksNkJBQUE7QUFGUiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1jYXJkKTtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogODB2dztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IHRoZW1lKFwidHJhbnNpdGlvbkR1cmF0aW9uLjQwMFwiKTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IHZhcigtLXZleC1zaWRlbmF2LXdpZHRoKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIEBhcHBseSBzaGFkb3cteGw7XG5cbiAgICBAc2NyZWVuIHNtIHtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICB9XG5cbiAgICAmLnBvc2l0aW9uLWxlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cblxuICAgICYucG9zaXRpb24tcmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cbi5iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XG5cbiAgICAmLnNob3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgJi5vcGFxdWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2822:
/*!*****************************************!*\
  !*** ./src/@vex/config/config.token.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEX_CONFIG: () => (/* binding */ VEX_CONFIG),
/* harmony export */   VEX_THEMES: () => (/* binding */ VEX_THEMES)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

const VEX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VEX_CONFIG');
const VEX_THEMES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VEX_THEMES');

/***/ }),

/***/ 8014:
/*!**************************************!*\
  !*** ./src/@vex/config/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRoundedButtonBorderRadius: () => (/* binding */ defaultRoundedButtonBorderRadius)
/* harmony export */ });
const defaultRoundedButtonBorderRadius = {
  value: 9999,
  unit: 'px'
};

/***/ }),

/***/ 7586:
/*!*************************************************!*\
  !*** ./src/@vex/config/vex-config.interface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexColorScheme: () => (/* binding */ VexColorScheme),
/* harmony export */   VexConfigName: () => (/* binding */ VexConfigName),
/* harmony export */   VexTheme: () => (/* binding */ VexTheme)
/* harmony export */ });
var VexTheme;
(function (VexTheme) {
  VexTheme["DEFAULT"] = "vex-theme-default";
  VexTheme["TEAL"] = "vex-theme-teal";
})(VexTheme || (VexTheme = {}));
var VexConfigName;
(function (VexConfigName) {
  VexConfigName["apollo"] = "apollo";
  VexConfigName["zeus"] = "zeus";
  VexConfigName["hermes"] = "hermes";
  VexConfigName["poseidon"] = "poseidon";
  VexConfigName["ares"] = "ares";
  VexConfigName["ikaros"] = "ikaros";
  VexConfigName["fafo"] = "fafo";
})(VexConfigName || (VexConfigName = {}));
var VexColorScheme;
(function (VexColorScheme) {
  VexColorScheme["LIGHT"] = "light";
  VexColorScheme["DARK"] = "dark";
})(VexColorScheme || (VexColorScheme = {}));

/***/ }),

/***/ 5298:
/*!***********************************************!*\
  !*** ./src/@vex/config/vex-config.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexConfigService: () => (/* binding */ VexConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 85);
/* harmony import */ var _vex_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-configs */ 1366);
/* harmony import */ var _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vex-config.interface */ 7586);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/config.token */ 2822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/vex-layout.service */ 4716);









class VexConfigService {
  constructor(config, themes, document, layoutService) {
    this.config = config;
    this.themes = themes;
    this.document = document;
    this.layoutService = layoutService;
    this.configMap = _vex_configs__WEBPACK_IMPORTED_MODULE_1__.vexConfigs;
    this.configs = Object.values(this.configMap);
    this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.config);
    this.config$.subscribe(config => this._updateConfig(config));
  }
  get config$() {
    return this._configSubject.asObservable();
  }
  select(selector) {
    return this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(selector));
  }
  setConfig(configName) {
    const settings = this.configMap[configName];
    if (!settings) {
      throw new Error(`Config with name '${configName}' does not exist!`);
    }
    this._configSubject.next(settings);
  }
  updateConfig(config) {
    this._configSubject.next((0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
      ...this._configSubject.getValue()
    }, config));
  }
  _updateConfig(config) {
    this._setLayoutClass(config.bodyClass);
    this._setStyle(config.style);
    this._setDensity();
    this._setDirection(config.direction);
    this._setSidenavState(config.sidenav.state);
    this._emitResize();
  }
  _setStyle(style) {
    /**
     * Set light/dark mode
     */
    switch (style.colorScheme) {
      case _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT:
        this.document.body.classList.remove(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK);
        this.document.body.classList.add(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT);
        break;
      case _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK:
        this.document.body.classList.remove(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT);
        this.document.body.classList.add(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK);
        break;
    }
    /**
     * Set theme class
     */
    this.document.body.classList.remove(...this.themes.map(t => t.className));
    this.document.body.classList.add(style.themeClassName);
    /**
     * Border Radius
     */
    this.document.body.style.setProperty('--vex-border-radius', `${style.borderRadius.value}${style.borderRadius.unit}`);
    const buttonBorderRadius = style.button.borderRadius ?? style.borderRadius;
    this.document.body.style.setProperty('--vex-button-border-radius', `${buttonBorderRadius.value}${buttonBorderRadius.unit}`);
  }
  _setDensity() {
    if (!this.document.body.classList.contains('vex-mat-dense-default')) {
      this.document.body.classList.add('vex-mat-dense-default');
    }
  }
  /**
   * Emit event so charts and other external libraries know they have to resize on layout switch
   * @private
   */
  _emitResize() {
    if (window) {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    }
  }
  _setDirection(direction) {
    this.document.body.dir = direction;
  }
  _setSidenavState(sidenavState) {
    sidenavState === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  _setLayoutClass(bodyClass) {
    this.configs.forEach(c => {
      if (this.document.body.classList.contains(c.bodyClass)) {
        this.document.body.classList.remove(c.bodyClass);
      }
    });
    this.document.body.classList.add(bodyClass);
  }
  static {
    this.ɵfac = function VexConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_THEMES), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__.VexLayoutService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: VexConfigService,
      factory: VexConfigService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1366:
/*!****************************************!*\
  !*** ./src/@vex/config/vex-configs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vexConfigs: () => (/* binding */ vexConfigs)
/* harmony export */ });
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 85);
/* harmony import */ var _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-config.interface */ 7586);
/* harmony import */ var _vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/utils/deep-clone */ 8586);



const baseConfig = {
  id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.apollo,
  name: 'Apollo',
  bodyClass: 'vex-layout-apollo',
  style: {
    themeClassName: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexTheme.DEFAULT,
    colorScheme: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexColorScheme.LIGHT,
    borderRadius: {
      value: 0.5,
      unit: 'rem'
    },
    button: {
      borderRadius: {
        value: 9999,
        unit: 'px'
      }
    }
  },
  direction: 'ltr',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'VIJP Co., Ltd',
    imageUrl: 'assets/img/logo/logo.png',
    showCollapsePin: true,
    user: {
      visible: true
    },
    search: {
      visible: true
    },
    state: 'expanded'
  },
  toolbar: {
    fixed: true,
    user: {
      visible: true
    }
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: true,
    fixed: true
  }
};
const vexConfigs = {
  apollo: baseConfig,
  poseidon: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.poseidon,
    name: 'Poseidon',
    bodyClass: 'vex-layout-poseidon',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/poseidon.png',
    sidenav: {
      user: {
        visible: true
      },
      search: {
        visible: true
      }
    },
    toolbar: {
      user: {
        visible: false
      }
    }
  }),
  hermes: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.hermes,
    name: 'Hermes',
    bodyClass: 'vex-layout-hermes',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    footer: {
      fixed: false
    }
  }),
  ares: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ares,
    name: 'Ares',
    bodyClass: 'vex-layout-ares',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  }),
  zeus: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.zeus,
    name: 'Zeus',
    bodyClass: 'vex-layout-zeus',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
    sidenav: {
      state: 'collapsed'
    }
  }),
  ikaros: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ikaros,
    name: 'Ikaros',
    bodyClass: 'vex-layout-ikaros',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  }),
  fafo: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.fafo,
    name: 'fafo',
    bodyClass: 'vex-layout-fafo',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
    layout: 'vertical',
    boxed: true,
    style: {
      themeClassName: 'vex-theme-custom',
      borderRadius: {
        value: 0.25,
        unit: 'rem'
      }
    },
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false,
      user: {
        visible: false
      },
      search: {
        visible: true
      }
    },
    footer: {
      fixed: false
    }
  })
};

/***/ }),

/***/ 8142:
/*!*******************************************!*\
  !*** ./src/@vex/services/fafo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FafoService: () => (/* binding */ FafoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class FafoService {
  constructor() {
    this.scrollToTopSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.scrollToTop$ = this.scrollToTopSubject.asObservable();
  }
  triggerScrollToTop() {
    this.scrollToTopSubject.next();
  }
  static {
    this.ɵfac = function FafoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FafoService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FafoService,
      factory: FafoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9430:
/*!***********************************************!*\
  !*** ./src/@vex/services/vex-demo.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexDemoService: () => (/* binding */ VexDemoService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/config/vex-config.service */ 5298);






class VexDemoService {
  constructor(router, configService) {
    this.router = router;
    this.configService = configService;
    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      const route = this.router.routerState.root.snapshot;
      if (route.queryParamMap.has('layout')) {
        this.configService.setConfig(route.queryParamMap.get('layout'));
      }
      if (route.queryParamMap.has('style')) {
        this.configService.updateConfig({
          style: {
            colorScheme: route.queryParamMap.get('style')
          }
        });
      }
      // TODO: Adjust primaryColor queryParam and see where it was used?
      const theme = route.queryParamMap.get('theme');
      if (theme) {
        this.configService.updateConfig({
          style: {
            themeClassName: theme
          }
        });
      }
      if (route.queryParamMap.has('rtl')) {
        this.configService.updateConfig({
          direction: (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(route.queryParamMap.get('rtl')) ? 'rtl' : 'ltr'
        });
      }
    });
  }
  static {
    this.ɵfac = function VexDemoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexDemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__.VexConfigService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: VexDemoService,
      factory: VexDemoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4716:
/*!*************************************************!*\
  !*** ./src/@vex/services/vex-layout.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexLayoutService: () => (/* binding */ VexLayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 7912);






class VexLayoutService {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
    this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
    this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
    this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this._configPanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.searchOpen$ = this._searchOpen.asObservable();
    this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
    this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
    this.configPanelOpen$ = this._configPanelOpenSubject.asObservable();
    /**
     * Expand Sidenav when we switch from mobile to desktop view
     */
    this.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(matches => !matches), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.expandSidenav());
  }
  openQuickpanel() {
    this._quickpanelOpenSubject.next(true);
  }
  closeQuickpanel() {
    this._quickpanelOpenSubject.next(false);
  }
  openSidenav() {
    this._sidenavOpenSubject.next(true);
  }
  closeSidenav() {
    this._sidenavOpenSubject.next(false);
  }
  collapseSidenav() {
    this._sidenavCollapsedSubject.next(true);
  }
  expandSidenav() {
    this._sidenavCollapsedSubject.next(false);
  }
  collapseOpenSidenav() {
    this._sidenavCollapsedOpenSubject.next(true);
  }
  collapseCloseSidenav() {
    this._sidenavCollapsedOpenSubject.next(false);
  }
  openConfigpanel() {
    this._configPanelOpenSubject.next(true);
  }
  closeConfigpanel() {
    this._configPanelOpenSubject.next(false);
  }
  openSearch() {
    this._searchOpen.next(true);
  }
  closeSearch() {
    this._searchOpen.next(false);
  }
  static {
    this.ɵfac = function VexLayoutService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexLayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VexLayoutService,
      factory: VexLayoutService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4109:
/*!***************************************************!*\
  !*** ./src/@vex/services/vex-platform.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPlatformService: () => (/* binding */ VexPlatformService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);



class VexPlatformService {
  constructor(document, rendererFactory2, platform) {
    this.document = document;
    this.rendererFactory2 = rendererFactory2;
    this.platform = platform;
    const renderer = this.rendererFactory2.createRenderer(null, null);
    if (this.platform.BLINK) {
      renderer.addClass(this.document.body, 'is-blink');
    }
  }
  static {
    this.ɵfac = function VexPlatformService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexPlatformService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VexPlatformService,
      factory: VexPlatformService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7208:
/*!********************************************************!*\
  !*** ./src/@vex/services/vex-splash-screen.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSplashScreenService: () => (/* binding */ VexSplashScreenService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class VexSplashScreenService {
  constructor(router, document, animationBuilder) {
    this.router = router;
    this.document = document;
    this.animationBuilder = animationBuilder;
    this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen') ?? undefined;
    if (this.splashScreenElem) {
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this.hide());
    }
  }
  hide() {
    const player = this.animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    }))]).create(this.splashScreenElem);
    player.onDone(() => this.splashScreenElem?.remove());
    player.play();
  }
  static {
    this.ɵfac = function VexSplashScreenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VexSplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: VexSplashScreenService,
      factory: VexSplashScreenService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5745:
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkRouterChildsData: () => (/* binding */ checkRouterChildsData),
/* harmony export */   getAllParams: () => (/* binding */ getAllParams)
/* harmony export */ });
function checkRouterChildsData(route, compareWith) {
  if (compareWith(route.data)) {
    return true;
  }
  if (!route.firstChild) {
    return false;
  }
  return checkRouterChildsData(route.firstChild, compareWith);
}
/**
 * Used to get params from children in their parent
 */
function getAllParams(route, result = new Map()) {
  if (route.params) {
    for (const key of Object.keys(route.params)) {
      result.set(key, route.params[key]);
    }
  }
  if (!route.firstChild) {
    return result;
  }
  return getAllParams(route.firstChild, result);
}

/***/ }),

/***/ 8586:
/*!**************************************!*\
  !*** ./src/@vex/utils/deep-clone.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deepClone(obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  const copy = {};
  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key]);
  });
  return copy;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepClone);

/***/ }),

/***/ 3406:
/*!**********************************!*\
  !*** ./src/@vex/utils/is-nil.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNil: () => (/* binding */ isNil)
/* harmony export */ });
function isNil(value) {
  return value == null;
}

/***/ }),

/***/ 85:
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeDeep: () => (/* binding */ mergeDeep)
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
  const isObject = obj => obj && typeof obj === 'object';
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

/***/ }),

/***/ 8428:
/*!**********************************!*\
  !*** ./src/@vex/vex.provider.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideVex: () => (/* binding */ provideVex)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _vex_services_vex_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-splash-screen.service */ 7208);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);
/* harmony import */ var _vex_services_vex_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/services/vex-demo.service */ 9430);
/* harmony import */ var _vex_services_vex_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/services/vex-platform.service */ 4109);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/config.token */ 2822);
/* harmony import */ var _vex_components_vex_highlight_vex_highlight_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-highlight/vex-highlight.module */ 6518);









function provideVex(options) {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_vex_components_vex_highlight_vex_highlight_module__WEBPACK_IMPORTED_MODULE_5__.VexHighlightModule), {
    provide: _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__.VEX_CONFIG,
    useValue: options.config
  }, {
    provide: _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__.VEX_THEMES,
    useValue: options.availableThemes
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MATERIAL_SANITY_CHECKS,
    useValue: {
      doctype: true,
      theme: false,
      version: true
    }
  }, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline'
    }
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__.VexSplashScreenService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__.VexLayoutService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_platform_service__WEBPACK_IMPORTED_MODULE_3__.VexPlatformService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_demo_service__WEBPACK_IMPORTED_MODULE_2__.VexDemoService),
    multi: true
  }];
}

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/splash-screen.service */ 2044);



class AppComponent {
  constructor(splashScreenService) {
    this.splashScreenService = splashScreenService;
  }
  ngAfterViewInit() {
    this.splashScreenService.hide();
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__.SplashScreenService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["vex-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 0,
      consts: [["id", "vex-splash-screen"], ["height", "70", "width", "70", "loading", "eager", "src", "assets/img/logo/logo.svg"], [1, "vex-splash-screen-loader"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 5244);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _core_icons_icons_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/icons/icons.provider */ 7896);
/* harmony import */ var _core_luxon_luxon_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/luxon/luxon.provider */ 2640);
/* harmony import */ var _vex_vex_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/vex.provider */ 8428);
/* harmony import */ var _core_navigation_navigation_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/navigation/navigation.provider */ 2626);
/* harmony import */ var _vex_config_vex_configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/config/vex-configs */ 1366);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-quill */ 8676);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _state_language_language_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/language/language.reducer */ 1979);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _layouts_components_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/components/news/news.component */ 5989);




















const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule), (0,_angular_router__WEBPACK_IMPORTED_MODULE_13__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes,
  // TODO: Add preloading withPreloading(),
  (0,_angular_router__WEBPACK_IMPORTED_MODULE_13__.withInMemoryScrolling)({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.withInterceptorsFromDi)()), (0,_vex_vex_provider__WEBPACK_IMPORTED_MODULE_3__.provideVex)({
    /**
     * The config that will be used by default.
     * This can be changed at runtime via the config panel or using the VexConfigService.
     */
    config: _vex_config_vex_configs__WEBPACK_IMPORTED_MODULE_5__.vexConfigs.fafo,
    /**
     * Only themes that are available in the config in tailwind.config.ts should be listed here.
     * Any theme not listed here will not be available in the config panel.
     */
    availableThemes: [{
      name: 'Default',
      className: 'vex-theme-default'
    }, {
      name: 'Teal',
      className: 'vex-theme-teal'
    }, {
      name: 'Green',
      className: 'vex-theme-green'
    }, {
      name: 'Purple',
      className: 'vex-theme-purple'
    }, {
      name: 'Red',
      className: 'vex-theme-red'
    }, {
      name: 'Orange',
      className: 'vex-theme-orange'
    }, {
      name: 'Custom',
      className: 'vex-theme-custom'
    }]
  }), (0,_core_navigation_navigation_provider__WEBPACK_IMPORTED_MODULE_4__.provideNavigation)(), (0,_core_icons_icons_provider__WEBPACK_IMPORTED_MODULE_1__.provideIcons)(), (0,_core_luxon_luxon_provider__WEBPACK_IMPORTED_MODULE_2__.provideLuxon)(), (0,ngx_quill__WEBPACK_IMPORTED_MODULE_16__.provideQuillConfig)({
    modules: {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        header: [1, 2, 3, 4, 5, 6, false]
      }], ['clean'], ['link', 'image']]
    }
  }), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.provideStore)(), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.provideState)({
    name: 'language',
    reducer: _state_language_language_reducer__WEBPACK_IMPORTED_MODULE_6__.languageReducer
  }), {
    provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__.RECAPTCHA_V3_SITE_KEY,
    useValue: '6LfS-fMrAAAAAN6-myMEgDq_Wk23DSzlH--P8e8o'
  }, {
    provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorIntl,
    useFactory: _layouts_components_news_news_component__WEBPACK_IMPORTED_MODULE_7__.CustomPaginator
  }]
};

/***/ }),

/***/ 9844:
/*!******************************!*\
  !*** ./src/app/app.const.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JP: () => (/* binding */ JP),
/* harmony export */   VI: () => (/* binding */ VI),
/* harmony export */   fullPath: () => (/* binding */ fullPath),
/* harmony export */   projectName: () => (/* binding */ projectName),
/* harmony export */   rootingbase: () => (/* binding */ rootingbase),
/* harmony export */   serverHost: () => (/* binding */ serverHost),
/* harmony export */   service: () => (/* binding */ service)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

/** ルーティングのベース */
const rootingbase = '';
/**Webサービス情報パス */
const service = 'webapi/vijp/';
/**
 * 開発、検証本番環境用
 * ビルド過程で稼働環境用のサーバー名に置き換え
 */
function serverHost() {
  return 'http://72.61.143.252';
}
const projectName = 'hsc';
const fullPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? 'http://72.61.143.252/' : 'http://72.61.143.252/';
const VI = 'VI';
const JP = 'JP';

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _layouts_components_bussiness_contents_bussiness_contents_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/components/bussiness-contents/bussiness-contents.component */ 6787);
/* harmony import */ var _layouts_components_bussiness_introduction_bussiness_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/components/bussiness-introduction/bussiness-introduction.component */ 111);
/* harmony import */ var _layouts_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/components/home/home.component */ 2021);
/* harmony import */ var _layouts_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/components/link/link.component */ 3823);
/* harmony import */ var _layouts_components_news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/components/news/news.component */ 5989);
/* harmony import */ var _layouts_components_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/components/overview/overview.component */ 2549);
/* harmony import */ var _layouts_components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/components/post-detail/post-detail.component */ 2193);
/* harmony import */ var _layouts_components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/components/search-result/search-result.component */ 7349);
/* harmony import */ var _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/layout/layout.component */ 8058);









const appRoutes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '',
  component: _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent,
  children: [{
    path: 'home',
    component: _layouts_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
    children: []
  }, {
    path: 'business_introduction',
    component: _layouts_components_bussiness_introduction_bussiness_introduction_component__WEBPACK_IMPORTED_MODULE_1__.BussinessIntroductionComponent,
    children: []
  }, {
    path: 'business_contents',
    component: _layouts_components_bussiness_contents_bussiness_contents_component__WEBPACK_IMPORTED_MODULE_0__.BussinessContentsComponent,
    children: []
  }, {
    path: 'overview',
    component: _layouts_components_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__.OverviewComponent,
    children: []
  }, {
    path: 'link',
    component: _layouts_components_link_link_component__WEBPACK_IMPORTED_MODULE_3__.LinkComponent,
    children: []
  }, {
    path: 'news',
    component: _layouts_components_news_news_component__WEBPACK_IMPORTED_MODULE_4__.NewsComponent,
    children: []
  }, {
    path: 'post-detail',
    component: _layouts_components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_6__.PostDetailComponent,
    children: []
  }, {
    path: 'search-result',
    component: _layouts_components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__.SearchResultComponent,
    children: []
  }]
}];

/***/ }),

/***/ 7896:
/*!**********************************************!*\
  !*** ./src/app/core/icons/icons.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideIcons: () => (/* binding */ provideIcons)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.service */ 6030);


function provideIcons() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService),
    multi: true
  }];
}

/***/ }),

/***/ 6030:
/*!*********************************************!*\
  !*** ./src/app/core/icons/icons.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsService: () => (/* binding */ IconsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);



class IconsService {
  constructor(domSanitizer, iconRegistry) {
    this.domSanitizer = domSanitizer;
    this.iconRegistry = iconRegistry;
    this.iconRegistry.addSvgIconResolver((name, namespace) => {
      switch (namespace) {
        case 'mat':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/material-design-icons/two-tone/${name}.svg`);
        case 'logo':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/logos/${name}.svg`);
        case 'flag':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/flags/${name}.svg`);
        default:
          return null;
      }
    });
  }
  static {
    this.ɵfac = function IconsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IconsService,
      factory: IconsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2640:
/*!**********************************************!*\
  !*** ./src/app/core/luxon/luxon.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideLuxon: () => (/* binding */ provideLuxon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _luxon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.service */ 1302);


function provideLuxon() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_luxon_service__WEBPACK_IMPORTED_MODULE_0__.LuxonService),
    multi: true
  }];
}

/***/ }),

/***/ 1302:
/*!*********************************************!*\
  !*** ./src/app/core/luxon/luxon.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LuxonService: () => (/* binding */ LuxonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 4063);



class LuxonService {
  constructor(localeId) {
    this.localeId = localeId;
    luxon__WEBPACK_IMPORTED_MODULE_0__.Settings.defaultLocale = this.localeId;
  }
  static {
    this.ɵfac = function LuxonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LuxonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LuxonService,
      factory: LuxonService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7440:
/*!**************************************************************!*\
  !*** ./src/app/core/navigation/navigation-loader.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationLoaderService: () => (/* binding */ NavigationLoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);



class NavigationLoaderService {
  get items$() {
    return this._items.asObservable();
  }
  set items(items) {
    this._items.next(items);
  }
  constructor(layoutService) {
    this.layoutService = layoutService;
    this._items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.loadNavigation();
  }
  loadNavigation() {
    this._items.next([]);
  }
  static {
    this.ɵfac = function NavigationLoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavigationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__.VexLayoutService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NavigationLoaderService,
      factory: NavigationLoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2626:
/*!********************************************************!*\
  !*** ./src/app/core/navigation/navigation.provider.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideNavigation: () => (/* binding */ provideNavigation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.service */ 7804);
/* harmony import */ var _navigation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-loader.service */ 7440);



function provideNavigation() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_navigation_loader_service__WEBPACK_IMPORTED_MODULE_1__.NavigationLoaderService),
    multi: true
  }];
}

/***/ }),

/***/ 7804:
/*!*******************************************************!*\
  !*** ./src/app/core/navigation/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-loader.service */ 7440);



class NavigationService {
  constructor(navigationLoaderService) {
    this.navigationLoaderService = navigationLoaderService;
    this.items$ = this.navigationLoaderService.items$;
    this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.openChange$ = this._openChangeSubject.asObservable();
  }
  triggerOpenChange(item) {
    this._openChangeSubject.next(item);
  }
  isLink(item) {
    return item.type === 'link';
  }
  isDropdown(item) {
    return item.type === 'dropdown';
  }
  isSubheading(item) {
    return item.type === 'subheading';
  }
  static {
    this.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__.NavigationLoaderService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4912:
/*!**************************************************************!*\
  !*** ./src/app/layouts/base-layout/base-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLayoutComponent: () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/utils/check-router-childs-data */ 5745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/is-nil */ 3406);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/vex-config.service */ 5298);
/* harmony import */ var _vex_services_fafo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/services/fafo.service */ 8142);














const _c0 = ["*"];
function BaseLayoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("vex-layout-boxed", config_r1.boxed)("vex-layout-footer-enabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 18, ctx_r1.isFooterVisible$))("vex-layout-footer-fixed", config_r1.footer.fixed && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 20, ctx_r1.isFooterVisible$))("vex-layout-horizontal", config_r1.layout === "horizontal")("vex-layout-scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 22, ctx_r1.scrollDisabled$))("vex-layout-search-overlay-open", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 24, ctx_r1.searchOpen$))("vex-layout-sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 26, ctx_r1.sidenavCollapsed$))("vex-layout-toolbar-fixed", config_r1.toolbar.fixed)("vex-layout-vertical", config_r1.layout === "vertical");
  }
}
class BaseLayoutComponent {
  constructor(layoutService, configService, router, document, fafoService) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.router = router;
    this.document = document;
    this.fafoService = fafoService;
    this.config$ = this.configService.config$;
    /**
     * Check if footer should be visible
     */
    this.isFooterVisible$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
    /**
     * Check if footer is enabled in the config
     */
    this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(config => config.footer.visible)),
    /**
     * Check if footer is enabled on the current route
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.footerVisible ?? true)))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([configEnabled, routeEnabled]) => {
      if ((0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(routeEnabled)) {
        return configEnabled;
      }
      return configEnabled && routeEnabled;
    }));
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.scrollDisabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.scrollDisabled ?? false)));
    this.searchOpen$ = this.layoutService.searchOpen$;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.DestroyRef);
  }
  ngOnInit() {
    /**
     * Open sidenav on desktop when layout is not vertical
     * Close sidenav on mobile or when layout is vertical
     */
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.isDesktop$, this.configService.select(config => config.layout === 'vertical')]).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe(([isDesktop, isVerticalLayout]) => {
      if (isDesktop && !isVerticalLayout) {
        this.layoutService.openSidenav();
      } else {
        this.layoutService.closeSidenav();
      }
    });
    /**
     * Mobile only:
     * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.withLatestFrom)(this.isDesktop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(([event, matches]) => !matches), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.layoutService.closeSidenav());
  }
  ngAfterViewInit() {
    /**
     * Enable Scrolling to specific parts of the page using the Router
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.Scroll), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe(e => {
      if (e.position) {
        // backward navigation
        this.sidenavContainer.scrollable.scrollTo({
          start: e.position[0],
          top: e.position[1]
        });
      } else if (e.anchor) {
        // anchor navigation
        const scroll = anchor => this.sidenavContainer.scrollable.scrollTo({
          behavior: 'smooth',
          top: anchor.offsetTop,
          left: anchor.offsetLeft
        });
        let anchorElem = this.document.getElementById(e.anchor);
        if (anchorElem) {
          scroll(anchorElem);
        } else {
          setTimeout(() => {
            if (!e.anchor) {
              return;
            }
            anchorElem = this.document.getElementById(e.anchor);
            if (!anchorElem) {
              return;
            }
            scroll(anchorElem);
          }, 100);
        }
      } else {
        // forward navigation
        this.sidenavContainer.scrollable.scrollTo({
          top: 0,
          start: 0
        });
      }
    });
    this.fafoService.scrollToTop$.subscribe(() => {
      this.sidenavContainer.scrollable.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
      });
    });
  }
  static {
    this.ɵfac = function BaseLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_2__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_3__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_services_fafo_service__WEBPACK_IMPORTED_MODULE_4__.FafoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BaseLayoutComponent,
      selectors: [["vex-base-layout"]],
      contentQueries: function BaseLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 3,
      consts: [["class", "vex-base-layout-container", 3, "vex-layout-boxed", "vex-layout-footer-enabled", "vex-layout-footer-fixed", "vex-layout-horizontal", "vex-layout-scroll-disabled", "vex-layout-search-overlay-open", "vex-layout-sidenav-collapsed", "vex-layout-toolbar-fixed", "vex-layout-vertical", 4, "ngIf"], [1, "vex-base-layout-container"]],
      template: function BaseLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BaseLayoutComponent_div_0_Template, 7, 28, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.config$));
        }
      },
      dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6787:
/*!***************************************************************************************!*\
  !*** ./src/app/layouts/components/bussiness-contents/bussiness-contents.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BussinessContentsComponent: () => (/* binding */ BussinessContentsComponent)
/* harmony export */ });
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/angular */ 5171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);









function BussinessContentsComponent_div_0_section_48_c_carousel_item_6_c_carousel_caption_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "c-carousel-caption", 31)(1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", slide_r3.title, "");
  }
}
function BussinessContentsComponent_div_0_section_48_c_carousel_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "c-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BussinessContentsComponent_div_0_section_48_c_carousel_item_6_c_carousel_caption_2_Template, 3, 2, "c-carousel-caption", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", slide_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", slide_r3.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", slide_r3.showCaption);
  }
}
function BussinessContentsComponent_div_0_section_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24)(3, "c-carousel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemChange", function BussinessContentsComponent_div_0_section_48_Template_c_carousel_itemChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "c-carousel-indicators");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "c-carousel-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BussinessContentsComponent_div_0_section_48_c_carousel_item_6_Template, 3, 3, "c-carousel-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "c-carousel-control", 27)(8, "c-carousel-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[12], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dark", true)("wrap", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
  }
}
function BussinessContentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "main", 7)(7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12)(27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 12)(32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 12)(37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "section", 8)(44, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "h2", 19)(46, "p", 20)(47, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, BussinessContentsComponent_div_0_section_48_Template, 9, 4, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[2], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[3], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[4], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[5], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[6], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[7], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[8], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[9], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[10], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[11], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.formItemNmLoaded);
  }
}
class BussinessContentsComponent {
  constructor(store, appFunction) {
    this.store = store;
    this.appFunction = appFunction;
    this.slides = new Array(6).fill({
      id: -1,
      src: '',
      title: '',
      subtitle: ''
    });
    this.hover = false;
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("business_contents").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.slides = [{
            index: 0,
            showCaption: false,
            src: './assets/img/bussiness-content/bs-content_01.jpg',
            title: listFormItemNm[13]
          }, {
            index: 1,
            showCaption: false,
            src: './assets/img/bussiness-content/bs-content_02.jpg',
            title: listFormItemNm[14]
          }, {
            index: 2,
            showCaption: false,
            src: './assets/img/bussiness-content/bs-content_03.jpg',
            title: listFormItemNm[15]
          }, {
            index: 3,
            showCaption: false,
            src: './assets/img/bussiness-content/bs-content_04.jpg',
            title: listFormItemNm[16]
          }, {
            index: 4,
            showCaption: false,
            src: './assets/img/bussiness-content/bs-content_05.jpg',
            title: listFormItemNm[17]
          }, {
            index: 5,
            showCaption: false,
            src: './assets/img/bussiness-content/bs-content_06.jpg',
            title: listFormItemNm[18]
          }];
          setTimeout(() => {
            this.slides[0]['showCaption'] = true;
          }, 300);
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  onItemChange($event) {
    let index = $event % this.slides.length;
    this.slides[$event]['showCaption'] = false;
    setTimeout(() => {
      this.slides[$event]['showCaption'] = true;
    }, 500);
  }
  static {
    this.ɵfac = function BussinessContentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BussinessContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__.AppFunctionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BussinessContentsComponent,
      selectors: [["vex-bussiness-contents"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "min-h-screen bg-gray-50", 4, "ngIf"], [1, "min-h-screen", "bg-gray-50"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "container", "mx-auto", "py-16"], [1, "mb-20"], [1, "text-4xl", "font-bold", "text-blue-700", "text-center", "mb-12", 3, "innerHTML"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-12"], [1, "space-y-8"], [1, "flex", "items-start", "group", "transition", "duration-300", "hover:scale-105", "hover:shadow-lg", "hover:rounded-lg"], [1, "flex-shrink-0", "w-14", "h-14", "bg-gradient-to-br", "from-blue-500", "to-blue-300", "text-white", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "text-lg", "shadow-md", "group-hover:shadow-xl", "transition"], [1, "pl-6"], [1, "text-gray-700", "text-lg", "leading-relaxed", 3, "innerHTML"], [1, "relative", "overflow-hidden", "rounded-xl", "shadow-lg"], ["src", "https://via.placeholder.com/500", "alt", "\u4E8B\u696D\u5185\u5BB9", 1, "w-full", "object-cover", "hover:scale-110", "transition", "duration-500"], [1, "p-8", "bg-gradient-to-br", "from-blue-50", "via-blue-100", "to-white", "rounded-xl", "shadow-lg"], [1, "text-2xl", "font-bold", "text-blue-700", 3, "innerHTML"], [1, "text-gray-700", "leading-relaxed", "mt-4", 3, "innerHTML"], [1, "bg-blue-500", "text-white", "mt-6", "p-4", "rounded-lg", "text-center", "shadow-md", 3, "innerHTML"], [4, "ngIf"], [1, "text-4xl", "font-bold", "text-center", "text-blue-700", "mb-12", 3, "innerHTML"], [1, "grid", "grid-cols-1", "md:grid-cols-1", "gap-6"], [3, "itemChange", "dark", "wrap"], [4, "ngFor", "ngForOf"], ["caption", "Previous", "direction", "prev", 3, "routerLink"], ["caption", "Next", "direction", "next", 3, "routerLink"], ["loading", "lazy", 1, "d-block", "w-100", "topslide-carousel-img", "bg-img-bigger", 3, "alt", "src"], ["class", "topslide-carousel-caption opacity-90", 4, "ngIf"], [1, "topslide-carousel-caption", "opacity-90"], [1, "text-lg", "md:text-3xl", "sm:text-2xl", "lg:text-4xl", "font-bold", "leading-loose"]],
      template: function BussinessContentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BussinessContentsComponent_div_0_Template, 49, 13, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CarouselIndicatorsComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CarouselInnerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CarouselItemComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CarouselCaptionComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CarouselControlComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 111:
/*!***********************************************************************************************!*\
  !*** ./src/app/layouts/components/bussiness-introduction/bussiness-introduction.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BussinessIntroductionComponent: () => (/* binding */ BussinessIntroductionComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);






function BussinessIntroductionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "main", 7)(7, "section", 8)(8, "div", 9)(9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "h2", 11)(11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 8)(15, "div", 9)(16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "h2", 11)(20, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 19)(26, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 22)(29, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 23)(32, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 24)(35, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 25)(38, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 26)(41, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[2], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[3], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[4], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[5], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[6], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[7], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[8], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[9], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[10], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[11], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.listFormItemNm[12], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
class BussinessIntroductionComponent {
  constructor(store, appFunction) {
    this.store = store;
    this.appFunction = appFunction;
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("business_introduction").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  static {
    this.ɵfac = function BussinessIntroductionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BussinessIntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__.AppFunctionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BussinessIntroductionComponent,
      selectors: [["vex-bussiness-introduction"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "min-h-screen bg-gray-50", 4, "ngIf"], [1, "min-h-screen", "bg-gray-50"], [1, "relative", "bg-gradient-to-r", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "container", "mx-auto", "py-16"], [1, "mb-20"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-12", "items-center"], [1, "p-8", "bg-white", "rounded-xl", "shadow-lg", "transform", "hover:scale-105", "transition", "duration-300"], [1, "text-4xl", "font-bold", "text-blue-700", "mb-4", 3, "innerHTML"], [1, "text-gray-600", "leading-relaxed", 3, "innerHTML"], [1, "relative", "overflow-hidden", "rounded-xl", "shadow-lg"], ["src", "./assets/img/bussiness/bussiness-content-01.jpg", "alt", "\u5916\u56FD\u4EBA\u6280\u80FD\u5B9F\u7FD2\u5236\u5EA6", 1, "w-full", "object-cover", "hover:scale-110", "transition", "duration-500"], ["src", "./assets/img/bussiness/bussiness-content-02.jpg", "alt", "\u5916\u56FD\u4EBA\u6280\u80FD\u5B9F\u7FD2\u5236\u5EA6\u306E\u6CBF\u9769", 1, "w-full", "object-cover", "hover:scale-110", "transition", "duration-500"], [1, "text-4xl", "font-bold", "text-center", "text-blue-700", "mb-12", 3, "innerHTML"], [1, "grid", "grid-cols-3", "xs:grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-10"], [1, "bg-white", "md:min-h-[450px]", "shadow-xl", "rounded-lg", "p-6", "hover:scale-105", "transition", "duration-300"], ["src", "./assets/img/bussiness/bussiness-content-02.jpg", "alt", "\u81EA\u52D5\u8ECA\u6574\u5099", 1, "w-full", "h-150", "rounded-lg", "mb-4", "h-4/5"], [1, "font-semibold", "text-center", "text-gray-600", 3, "innerHTML"], [1, "bg-white", "shadow-xl", "rounded-lg", "p-6", "hover:scale-105", "transition", "duration-300"], ["src", "./assets/img/bussiness/bussiness-content-03.jpg", "alt", "\u6C34\u7523\u52A0\u5DE5", 1, "w-full", "rounded-lg", "mb-4", "h-4/5"], ["src", "./assets/img/bussiness/bussiness-content-04.jpg", "alt", "\u98DF\u54C1\u52A0\u5DE5", 1, "w-full", "rounded-lg", "mb-4", "h-4/5"], ["src", "./assets/img/bussiness/bussiness-content-05.jpg", "alt", "\u81EA\u52D5\u8ECA\u6574\u5099", 1, "w-full", "rounded-lg", "mb-4", "h-4/5"], ["src", "./assets/img/bussiness/bussiness-content-06.jpg", "alt", "\u6280\u80FD\u5B9F\u7FD2", 1, "w-full", "rounded-lg", "mb-4", "h-4/5"], ["src", "./assets/img/bussiness/bussiness-content-07.jpg", "alt", "\u5B9F\u7FD2\u751F", 1, "w-full", "rounded-lg", "mb-4", "h-4/5"]],
      template: function BussinessIntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BussinessIntroductionComponent_div_0_Template, 42, 13, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: [".fade-in[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: _ngcontent-%COMP%_fadeIn 1s ease-in-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hover-scale[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.3s ease-in-out;\n}\n\n.bg-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(29, 78, 216, 0.8), rgba(59, 130, 246, 0.8)), url(\"https://via.placeholder.com/1920x500\");\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2J1c3NpbmVzcy1pbnRyb2R1Y3Rpb24vYnVzc2luZXNzLWludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLHNCQUFBO0VBQ0Esc0NBQUE7QUFBSjs7QUFHQTtFQUNJLGlJQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmZhZGUtaW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG4uaG92ZXItc2NhbGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5iZy1ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyOSwgNzgsIDIxNiwgMC44KSwgcmdiYSg1OSwgMTMwLCAyNDYsIDAuOCkpLCB1cmwoJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xOTIweDUwMCcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 8031:
/*!******************************************************************************************************!*\
  !*** ./src/app/layouts/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigPanelToggleComponent: () => (/* binding */ ConfigPanelToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _vex_services_fafo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/fafo.service */ 8142);







class ConfigPanelToggleComponent {
  constructor(fafoService) {
    this.fafoService = fafoService;
    this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  scrollToTop() {
    this.fafoService.triggerScrollToTop();
  }
  static {
    this.ɵfac = function ConfigPanelToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigPanelToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_services_fafo_service__WEBPACK_IMPORTED_MODULE_0__.FafoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfigPanelToggleComponent,
      selectors: [["vex-config-panel-toggle"]],
      outputs: {
        openConfig: "openConfig"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [["color", "warn", "mat-fab", "", "type", "button", 1, "config-panel-toggle", 3, "click"], ["svgIcon", "mat:arrow_upward"]],
      template: function ConfigPanelToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigPanelToggleComponent_Template_button_click_0_listener() {
            return ctx.scrollToTop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: 1.5rem;\n  right: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwtdG9nZ2xlL2NvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUFBLGNBQUE7RUFBQSxhQUFBO0FBQ0o7O0FBR0k7RUFBQSxZQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgQGFwcGx5IGZpeGVkIGJvdHRvbS02IHJpZ2h0LTY7XG59XG5cbjo6bmctZGVlcCBbZGlyPVwicnRsXCJdIC5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgICBAYXBwbHkgbGVmdC02IHJpZ2h0LWF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7297:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/components/config-panel/config-panel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigPanelComponent: () => (/* binding */ ConfigPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/config/vex-config.interface */ 7586);
/* harmony import */ var _vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/is-nil */ 3406);
/* harmony import */ var _vex_config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/config/constants */ 8014);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/config.token */ 2822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/vex-config.service */ 5298);


















const _c0 = (a0, a1) => ({
  "!bg-transparent !border-solid !border-primary-600 !text-primary-600": a0,
  "!border-transparent": a1
});
const _c1 = (a0, a1) => ({
  "bg-primary-600/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-500": a0,
  "bg-primary-600 text-on-primary-600": a1
});
const _c2 = (a0, a1) => ({
  "border-gray-300": a0,
  "border-transparent": a1
});
const _c3 = (a0, a1) => ({
  "bg-primary-600 border-primary-600": a0,
  "bg-foreground border-gray-500 group-hover:bg-app-bar": a1
});
function ConfigPanelComponent_div_0_div_8_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function ConfigPanelComponent_div_0_div_8_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 25);
  }
}
function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() {
      const colorScheme_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).ngIf;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.isDark(colorScheme_r3) ? ctx_r3.disableDarkMode() : ctx_r3.enableDarkMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_mat_icon_2_Template, 1, 0, "mat-icon", 21)(3, ConfigPanelComponent_div_0_div_8_mat_icon_3_Template, 1, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "DARK MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colorScheme_r3 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isDark(colorScheme_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.isDark(colorScheme_r3));
  }
}
function ConfigPanelComponent_div_0_div_13_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() {
      const theme_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.selectTheme(theme_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ConfigPanelComponent_div_0_div_13_mat_icon_4_Template, 1, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const theme_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", theme_r6.className, " vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative hover:bg-primary-600 hover:text-on-primary-600 dark:hover:bg-primary-600 dark:hover:text-on-primary-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c1, !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 6, ctx_r3.isSelectedTheme$)) == null ? null : tmp_5_0(theme_r6.className)), (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 8, ctx_r3.isSelectedTheme$)) == null ? null : tmp_5_0(theme_r6.className)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, ctx_r3.isSelectedTheme$)) == null ? null : tmp_6_0(theme_r6.className));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 12, theme_r6.name));
  }
}
function ConfigPanelComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 31)(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_17_Template_button_click_4_listener() {
      const config_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.setConfig(config_r8.id, ctx_r3.ColorSchemeName.LIGHT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " LIGHT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_17_Template_button_click_6_listener() {
      const config_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.setConfig(config_r8.id, ctx_r3.ColorSchemeName.DARK));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " DARK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r8 = ctx.$implicit;
    const first_r9 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mt-6", !first_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", config_r8.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r8.name);
  }
}
function ConfigPanelComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_22_Template_div_click_0_listener() {
      const borderRadius_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.selectBorderRadius(borderRadius_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const borderRadius_r11 = ctx.$implicit;
    const setting_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c2, ctx_r3.isSelectedBorderRadius(borderRadius_r11, setting_r12), !ctx_r3.isSelectedBorderRadius(borderRadius_r11, setting_r12)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("border-top-left-radius", borderRadius_r11.value + borderRadius_r11.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c3, ctx_r3.isSelectedBorderRadius(borderRadius_r11, setting_r12), !ctx_r3.isSelectedBorderRadius(borderRadius_r11, setting_r12)));
  }
}
function ConfigPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "THEME BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "THEME COLORS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 9, 17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4)(15, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "PRE-BUILT LAYOUTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ConfigPanelComponent_div_0_div_17_Template, 10, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4)(19, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "ROUNDED CORNERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ConfigPanelComponent_div_0_div_22_Template, 2, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4)(24, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "BUTTON STYLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11)(27, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.selectButtonStyle(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " INHERIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.selectButtonStyle(ctx_r3.roundedButtonValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " ROUNDED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 4)(32, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 14)(35, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.layoutRTLChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "RTL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 4)(41, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 14)(44, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toolbarPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 4)(52, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 14)(55, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.footerVisibleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.footerPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const setting_r12 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 10, ctx_r3.colorScheme$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.themes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.configs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.roundedCornerValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, !ctx_r3.isSelectedButtonStyle(undefined, setting_r12), ctx_r3.isSelectedButtonStyle(undefined, setting_r12)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](17, _c0, !ctx_r3.isSelectedButtonStyle(ctx_r3.roundedButtonValue, setting_r12), ctx_r3.isSelectedButtonStyle(ctx_r3.roundedButtonValue, setting_r12)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 12, ctx_r3.isRTL$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", setting_r12.toolbar.fixed ? "fixed" : "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", setting_r12.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", setting_r12.footer.fixed ? "fixed" : "static");
  }
}
class ConfigPanelComponent {
  constructor(configService, themes) {
    this.configService = configService;
    this.themes = themes;
    this.configs = this.configService.configs;
    this.config$ = this.configService.config$;
    this.isRTL$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.direction === 'rtl'));
    this.colorScheme$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.style.colorScheme));
    this.borderRadius$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.style.borderRadius.value));
    this.ConfigName = _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexConfigName;
    this.ColorSchemeName = _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme;
    this.selectedTheme$ = this.configService.select(config => config.style.themeClassName);
    this.isSelectedTheme$ = this.configService.select(config => config.style.themeClassName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(themeClassName => theme => themeClassName === theme));
    this.roundedCornerValues = [{
      value: 0,
      unit: 'rem'
    }, {
      value: 0.25,
      unit: 'rem'
    }, {
      value: 0.5,
      unit: 'rem'
    }, {
      value: 0.75,
      unit: 'rem'
    }, {
      value: 1,
      unit: 'rem'
    }, {
      value: 1.25,
      unit: 'rem'
    }, {
      value: 1.5,
      unit: 'rem'
    }, {
      value: 1.75,
      unit: 'rem'
    }];
    this.roundedButtonValue = _vex_config_constants__WEBPACK_IMPORTED_MODULE_2__.defaultRoundedButtonBorderRadius;
  }
  setConfig(layout, colorScheme) {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }
  selectTheme(theme) {
    this.configService.updateConfig({
      style: {
        themeClassName: theme.className
      }
    });
  }
  enableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.DARK
      }
    });
  }
  disableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.LIGHT
      }
    });
  }
  layoutRTLChange(change) {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }
  toolbarPositionChange(change) {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }
  footerVisibleChange(change) {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }
  footerPositionChange(change) {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }
  isSelectedBorderRadius(borderRadius, config) {
    return borderRadius.value === config.style.borderRadius.value && borderRadius.unit === config.style.borderRadius.unit;
  }
  selectBorderRadius(borderRadius) {
    this.configService.updateConfig({
      style: {
        borderRadius: borderRadius
      }
    });
  }
  isSelectedButtonStyle(buttonStyle, config) {
    if ((0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(config.style.button.borderRadius) && (0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(buttonStyle)) {
      return true;
    }
    return buttonStyle?.value === config.style.button.borderRadius?.value;
  }
  selectButtonStyle(borderRadius) {
    this.configService.updateConfig({
      style: {
        button: {
          borderRadius: borderRadius
        }
      }
    });
  }
  isDark(colorScheme) {
    return colorScheme === _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.DARK;
  }
  static {
    this.ɵfac = function ConfigPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_THEMES));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ConfigPanelComponent,
      selectors: [["vex-config-panel"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["svgIcon", "mat:settings", 1, "mr-3"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-black text-white select-none", "matRipple", "", 3, "click", 4, "ngIf"], ["matRipple", "", 3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-4", "gap-4"], ["class", "aspect-square bgbg-primary-60010 flex justify-end items-end cursor-pointer border-2 hover:border-gray-200 group transition duration-400 ease-out-swift rounded-tl", 3, "border-gray-300", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "gap-4"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded", "flex-1", "border-2", "border-solid", 3, "click", "ngClass"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded-full", "flex-1", "border-2", "border-solid", 3, "click", "ngClass"], [1, "section-content"], [3, "change", "checked"], [1, "flex", "flex-col", "gap-3", 3, "change", "value"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-black", "text-white", "select-none", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["svgIcon", "mat:check", 4, "ngIf"], ["svgIcon", "mat:close", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["svgIcon", "mat:check"], ["svgIcon", "mat:close"], ["matRipple", "", 3, "click", "ngClass"], [1, "m-2", "h-6", "w-6", "rounded-full", "text-on-primary-600", "bg-primary-600"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-md"], [1, "w-full", "block", 3, "src"], [1, "layout-image-overlay", "flex", "items-center", "justify-center", "gap-1"], ["mat-raised-button", "", "type", "button", 1, "bg-white", "text-black", "flex-none", "!min-w-[70px]", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "!bg-black", "!text-white", "flex-none", "!min-w-[70px]", 3, "click"], [1, "text-center", "body-2", "mt-2"], [1, "aspect-square", "bgbg-primary-60010", "flex", "justify-end", "items-end", "cursor-pointer", "border-2", "hover:border-gray-200", "group", "transition", "duration-400", "ease-out-swift", "rounded-tl", 3, "click", "border-gray-300", "ngClass"], [1, "h-7", "w-7", "border-2", "transition", "duration-400", "ease-out-swift", 2, "margin-bottom", "-2px", "margin-right", "-2px", 3, "ngClass"]],
      template: function ConfigPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 64, 20, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.config$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe],
      styles: [".config-panel[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  border-bottom-width: 1px;\n  padding-bottom: 1rem;\n}\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  margin-inline-start: 0.75rem;\n}\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--vex-border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  width: 100%;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n  margin-inline-end: 1rem;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], \nmat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], \nmat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], \nmat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUFBQTtBQUFBO0FBRUE7RUFDSSxtQkFBQTtBQUNSOztBQUlJO0VBQUE7QUFBQTtBQUdJO0VBQUE7QUFBQTs7QUFLSjtFQUFBLGdCQUFBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBO0FBQUE7O0FBS0k7RUFDSSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhaO0FBT0k7RUFDSSx1Q0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7QUFMUjtBQU9RO0VBQ0ksY0FBQTtBQUxaOztBQVVBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0FBUEo7QUFVUTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSVI7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUFBLCtFQUFBO0VBQUEsbUdBQUE7RUFBQSx1R0FBQTtBQVJKO0FBVUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFSUjtBQVdJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBVFI7QUFZSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQVZSOztBQWtCSTs7OztFQUFBLG1CQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctcGFuZWwge1xuICAgIEBhcHBseSBweC00IHB5LTY7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBAYXBwbHkgbWItNjtcbn1cblxuLnNlY3Rpb24ge1xuICAgIEBhcHBseSBib3JkZXItYiBtYi00IHBiLTQ7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbn1cblxuLnNlY3Rpb24tY29udGVudCB7XG4gICAgQGFwcGx5IG1zLTM7XG5cbiAgICAuc3ViaGVhZGluZyB7XG4gICAgICAgIEBhcHBseSBtdC02O1xuICAgIH1cbn1cblxuLnN1YmhlYWRpbmcge1xuICAgIEBhcHBseSBteS00IHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtc2Vjb25kYXJ5IGZvbnQtbWVkaXVtO1xufVxuXG4ubGF5b3V0Ky5sYXlvdXQge1xuICAgIEBhcHBseSBtdC02O1xufVxuXG4ubGF5b3V0LWltYWdlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmV4LWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZleC1jb2xvci1waWNrZXIge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG5cbiAgICBwIHtcbiAgICAgICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcbiAgICB9XG59XG5cbi5jb2xvciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMzZweDtcbiAgICBAYXBwbHkgc2hhZG93LWxnIG1lLTQ7XG5cbiAgICAmLmxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICAgICYuZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLmZsYXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbm1hdC1zbGlkZS10b2dnbGUrbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1zbGlkZS10b2dnbGUrbWF0LWNoZWNrYm94LFxubWF0LWNoZWNrYm94K21hdC1zbGlkZS10b2dnbGUsXG5tYXQtY2hlY2tib3grbWF0LWNoZWNrYm94IHtcbiAgICBAYXBwbHkgYmxvY2sgbXQtMztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2021:
/*!***********************************************************!*\
  !*** ./src/app/layouts/components/home/home.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-loading-bar/core */ 5545);
/* harmony import */ var src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-service.service */ 9054);
/* harmony import */ var src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/access-info.service */ 6411);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/post.service */ 1032);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _vex_services_fafo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/services/fafo.service */ 8142);













// @ts-ignore





















class HomeComponent {
  constructor(store, loader, webService, accessInfo, appFunction, paginator, router, postService, fb, recaptchaV3Service, scrollDispatcher, snackBar, fafoService) {
    this.store = store;
    this.loader = loader;
    this.webService = webService;
    this.accessInfo = accessInfo;
    this.appFunction = appFunction;
    this.paginator = paginator;
    this.router = router;
    this.postService = postService;
    this.fb = fb;
    this.recaptchaV3Service = recaptchaV3Service;
    this.scrollDispatcher = scrollDispatcher;
    this.snackBar = snackBar;
    this.fafoService = fafoService;
    // Palette từ logo
    this.primary = '#C8102E';
    this.accent = '#F4A300';
    this.services = [{
      id: 'study',
      icon: 'school',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop',
      title_vi: 'Hỗ trợ du học sinh',
      title_jp: '留学生支援',
      desc_vi: 'Đón sân bay, nhập cảnh, thủ tục cư trú, SIM, ngân hàng, tìm nhà, việc làm thêm.',
      desc_jp: '空港対応・入国手続き・在留手続き・SIM・銀行・住まい探し・アルバイト支援。'
    }, {
      id: 'realestate',
      icon: 'home',
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80&auto=format&fit=crop',
      title_vi: 'Bất động sản',
      title_jp: '不動産サポート',
      desc_vi: 'Giới thiệu, ký hợp đồng và quản lý nhà ở / ký túc xá.',
      desc_jp: '物件紹介・契約・管理（寮・賃貸）。'
    }, {
      id: 'parttime',
      icon: 'work',
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop',
      title_vi: 'Việc làm thêm',
      title_jp: 'アルバイト紹介',
      desc_vi: 'Giới thiệu việc part-time phù hợp, hỗ trợ phiên dịch khi phỏng vấn.',
      desc_jp: '留学生向けアルバイト紹介・面接通訳。'
    }, {
      id: 'career',
      icon: 'business_center',
      img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1400&q=80&auto=format&fit=crop',
      title_vi: 'Việc làm chính thức',
      title_jp: '就職 (Shūshoku)',
      desc_vi: 'Hỗ trợ tìm việc sau tốt nghiệp, chuẩn bị hồ sơ, phỏng vấn.',
      desc_jp: '卒業後の就職支援・書類・面接対策。'
    }, {
      id: 'sim',
      icon: 'smartphone',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&auto=format&fit=crop',
      title_vi: 'SIM & Dịch vụ cuộc sống',
      title_jp: 'SIM・生活サポート',
      desc_vi: 'Đăng ký SIM, Internet, thẻ ngân hàng, dịch thuật hồ sơ, hướng dẫn cuộc sống.',
      desc_jp: 'SIM・インターネット・銀行口座・翻訳・生活ガイド。'
    }];
    this.partnerLogos = ['https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
    // Toyota
    'https://cdn-icons-png.flaticon.com/512/5969/5969053.png',
    // Honda
    'https://cdn-icons-png.flaticon.com/512/5968/5968997.png',
    // Sony
    'https://cdn-icons-png.flaticon.com/512/5968/5968975.png',
    // Panasonic
    'https://cdn-icons-png.flaticon.com/512/5969/5969052.png',
    // Mitsubishi
    'https://cdn-icons-png.flaticon.com/512/882/882747.png',
    // Rakuten
    'https://cdn-icons-png.flaticon.com/512/5969/5969027.png',
    // Softbank
    'https://cdn-icons-png.flaticon.com/512/882/882702.png',
    // Japan Airlines
    'https://cdn-icons-png.flaticon.com/512/882/882748.png',
    // Fujitsu
    'https://cdn-icons-png.flaticon.com/512/882/882732.png',
    // Dentsu
    'https://cdn-icons-png.flaticon.com/512/882/882726.png',
    // NEC
    'https://cdn-icons-png.flaticon.com/512/882/882724.png' // Toshiba
    ];
    this.newsList = [{
      titleEn: 'New Scholarship Program for Vietnamese Students 2025',
      titleJp: 'ベトナム人留学生向け奨学金プログラム2025開始',
      description: 'VIJP has partnered with Japanese universities to launch a new scholarship initiative supporting outstanding Vietnamese students in Japan.',
      date: new Date('2025-10-05'),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
      slug: 'vietnamese-scholarship-2025'
    }, {
      titleEn: 'Cooperation Agreement with Tokyo Real Estate Group',
      titleJp: '東京不動産グループとの業務提携を締結',
      description: 'VIJP expands housing support network for international students by collaborating with Tokyo Real Estate Group.',
      date: new Date('2025-09-22'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      slug: 'tokyo-real-estate-cooperation'
    }, {
      titleEn: 'Career Orientation Seminar Held in Osaka',
      titleJp: '大阪でキャリアセミナーを開催',
      description: 'More than 100 students participated in the career guidance seminar organized by VIJP and local recruitment partners in Osaka.',
      date: new Date('2025-08-18'),
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
      slug: 'osaka-career-seminar'
    }];
    this.albumCategories = [{
      key: 'students',
      name: 'Học sinh nhập cảnh / 留学生入国'
    }, {
      key: 'partnerships',
      name: 'Lễ hợp tác / 協力セレモニー'
    }, {
      key: 'activities',
      name: 'Hoạt động tại VN & JP / 活動風景'
    }, {
      key: 'office',
      name: 'Văn phòng & đội ngũ / オフィス・スタッフ'
    }];
    this.activeAlbum = 'students';
    this.galleryImages = {
      students: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80', 'https://images.unsplash.com/photo-1558021211-6d1403321394?w=900&q=80', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=900&q=80', 'https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=900&q=80', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80'],
      partnerships: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80', 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=900&q=80', 'https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=900&q=80', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80'],
      activities: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80'],
      office: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80', 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=900&q=80', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80']
    };
    this.partnerForm = this.fb.group({
      companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      contactPerson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.emailValidator.bind(this)]],
      cooperationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.inquiryForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.emailValidator.bind(this)]],
      inquiryType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    aos__WEBPACK_IMPORTED_MODULE_1__.init({
      duration: 800,
      // thời gian animation (ms)
      offset: 100,
      // khoảng cách bắt đầu hiệu ứng
      once: true,
      // chỉ chạy 1 lần khi scroll xuống
      easing: 'ease-in-out'
    });
  }
  emailValidator(control) {
    return this.isEmailValid(control.value) ? null : {
      invalidEmail: true
    };
  }
  isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  ngOnInit() {}
  ngAfterViewInit() {
    // Lắng nghe sự kiện scroll của CDK
    this.scrollDispatcher.scrolled().subscribe(() => {
      aos__WEBPACK_IMPORTED_MODULE_1__.refresh();
    });
  }
  goContact() {
    this.router.navigate(['/contact']);
  }
  // Nếu cần hành động khi click service card
  openService(id) {
    // cho demo hiện popup console
    console.log('Open service', id);
  }
  onSubmitPartnerForm() {
    this.recaptchaV3Service.execute('sendContact').subscribe(token => {
      if (token != null && token != undefined && token.includes("Invalid site key")) {
        token = "Captcha error";
      }
      if (this.partnerForm.valid) {
        this.callRegistPartnerRequest(token).subscribe({
          next: successful => {
            if (successful == "1") {
              this.partnerForm.reset();
              this.snackBar.open("Send information successful", 'Close', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              this.fafoService.triggerScrollToTop();
            } else {
              this.snackBar.open("Send information failed", 'Close', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            }
          },
          error: error => {
            console.error('Đã xảy ra lỗi khi tải danh sách:', error);
          }
        });
      }
    });
  }
  callRegistPartnerRequest(token) {
    const request = {
      accessInfo: this.accessInfo.getAll(),
      companyName: this.partnerForm.get('companyName')?.value,
      contactPerson: this.partnerForm.get('contactPerson')?.value,
      message: this.partnerForm.get('message')?.value,
      email: this.partnerForm.get('email')?.value,
      cooperationType: this.partnerForm.get('cooperationType')?.value,
      token: token
    };
    return this.webService.callWs('partnerRequest', request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(data => {
      if (data && data.successful) {
        return data.successful;
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      console.error('Lỗi xảy ra:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]); // Trả về một danh sách rỗng nếu có lỗi
    }));
  }
  onSubmitInquiryForm() {
    this.recaptchaV3Service.execute('sendContact').subscribe(token => {
      if (token != null && token != undefined && token.includes("Invalid site key")) {
        token = "Captcha error";
      }
      if (this.inquiryForm.valid) {
        this.callRegistInquiryRequest(token).subscribe({
          next: successful => {
            if (successful == "1") {
              this.inquiryForm.reset();
              this.snackBar.open("Send information successful", 'Close', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              this.fafoService.triggerScrollToTop();
            } else {
              this.snackBar.open("Send information failed", 'Close', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            }
          },
          error: error => {
            console.error('Đã xảy ra lỗi khi tải danh sách:', error);
          }
        });
      }
    });
  }
  callRegistInquiryRequest(token) {
    const request = {
      accessInfo: this.accessInfo.getAll(),
      name: this.inquiryForm.get('name')?.value,
      phone: this.inquiryForm.get('phone')?.value,
      message: this.inquiryForm.get('message')?.value,
      email: this.inquiryForm.get('email')?.value,
      inquiryType: this.inquiryForm.get('inquiryType')?.value,
      token: token
    };
    return this.webService.callWs('sendInfoRequest', request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(data => {
      if (data && data.successful) {
        return data.successful;
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      console.error('Lỗi xảy ra:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]); // Trả về một danh sách rỗng nếu có lỗi
    }));
  }
  phoneNumberValidator(control) {
    return this.isPhoneNumberValid(control.value) ? null : {
      invalidPhoneNumber: true
    };
  }
  isPhoneNumberValid(phoneNumber) {
    // Định dạng số điện thoại Nhật Bản
    const jpPhoneRegex = /^(\+81|0)(\d{1,4})(\d{1,4})(\d{4})$/;
    // Định dạng số điện thoại Việt Nam
    const vnPhoneRegex = /^(\+84|0)(3|5|7|8|9)(\d{8})$/;
    return jpPhoneRegex.test(phoneNumber) || vnPhoneRegex.test(phoneNumber);
  }
  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_2__.WebServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_3__.AccessInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_4__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__.ReCaptchaV3Service), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_vex_services_fafo_service__WEBPACK_IMPORTED_MODULE_6__.FafoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["vex-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 346,
      vars: 2,
      consts: [[1, "w-full", "font-sans", "text-gray-800"], ["id", "home", "role", "region", "aria-label", "Hero - VIJP", 1, "relative", "w-full", "min-h-[70vh]", "md:h-[70vh]", "bg-cover", "bg-center", 2, "background-image", "url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=80')"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-black/40", "to-black/10"], ["data-aos", "fade-left", "data-aos-delay", "200", 1, "absolute", "top-0", "right-8", "sm:right-10", "md:right-12", "z-30", "pointer-events-none"], ["src", "assets/img/logo/logo.png", "alt", "VIJP Logo", 1, "w-32", "sm:w-40", "md:w-48", "lg:w-56", "xl:w-64", "max-w-none"], [1, "relative", "z-30", "w-full", "flex", "items-start", "md:items-center", "pt-20", "pb-6", "md:pt-0", "md:h-[70vh]", "pl-4", "sm:pl-6", "md:pl-16", "lg:pl-48"], [1, "w-full", "md:w-7/12", "lg:w-6/12"], ["data-aos", "fade-right", "data-aos-delay", "200", 1, "text-3xl", "sm:text-4xl", "md:text-5xl", "lg:text-6xl", "font-extrabold", "text-white", "leading-tight", "drop-shadow-lg"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "mt-4", "text-base", "sm:text-lg", "text-white/90", "tracking-wide"], [1, "text-white/80"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "mt-6", "flex", "items-center", "gap-4"], ["aria-label", "Contact us", 1, "inline-flex", "items-center", "justify-center", "px-6", "py-3", "rounded-full", "bg-[#C8102E]", "hover:bg-[#a50d25]", "text-white", "font-semibold", "text-sm", "md:text-base", "shadow-lg", "transition", "transform", "hover:scale-[1.03]", 3, "click"], ["data-aos", "fade-left", "data-aos-delay", "200", 1, "z-20", "w-full", "px-4", "sm:px-6", "mt-4", "md:mt-0", "md:w-auto", "md:px-0", "md:absolute", "md:bottom-6", "md:right-6"], [1, "text-white", "text-[11px]", "sm:text-xs", "md:text-sm", "px-4", "py-3", "rounded-lg", "shadow-lg", "max-w-md", "sm:max-w-lg", "md:max-w-xl", "mx-auto", "md:mx-0", "bg-white/10", "backdrop-blur-sm", "border", "border-white/10", 2, "line-height", "1.4"], [1, "grid", "gap-x-4", "gap-y-1", 2, "grid-template-columns", "auto auto minmax(120px, 1fr)"], [1, "whitespace-nowrap"], ["data-aos", "fade-up", "data-aos-duration", "600", 1, "py-16", "bg-white"], [1, "max-w-7xl", "mx-auto", "px-6", "grid", "grid-cols-1", "md:grid-cols-3", "gap-8", "items-stretch"], ["data-aos", "fade-right", "data-aos-delay", "200", "data-aos-duration", "1000", 1, "relative", "bg-gradient-to-br", "from-[#C8102E]", "to-[#F4A300]", "rounded-2xl", "text-white", "p-8", "flex", "flex-col", "justify-between", "shadow-lg"], [1, "text-2xl", "md:text-3xl", "font-bold", "leading-tight"], [1, "text-sm", "text-white/85", "tracking-wide"], [1, "text-base", "leading-relaxed", "opacity-90"], [1, "mt-3", "text-sm", "opacity-90"], ["mat-flat-button", "", "routerLink", "/services", 1, "mt-8", "bg-white", "text-[#C8102E]", "hover:bg-gray-100", "font-semibold", "px-5", "py-2", "rounded-md", "self-start", "transition-transform", "transform", "hover:scale-105"], ["data-aos", "fade-left", "data-aos-delay", "300", "data-aos-duration", "1000", 1, "md:col-span-2", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-8"], [1, "flex", "bg-white", "rounded-2xl", "overflow-hidden", "shadow-md", "hover:shadow-xl", "transition-all", "group"], [1, "w-2/5", "relative", "overflow-hidden"], ["src", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80", "alt", "Student Support", 1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500"], [1, "w-3/5", "p-5", "flex", "flex-col", "justify-center"], [1, "text-lg", "font-semibold", "text-[#C8102E]", "mb-2"], [1, "text-sm", "text-gray-700", "leading-relaxed"], [1, "text-[#F4A300]", "font-medium"], ["src", "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80", "alt", "Real Estate", 1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500"], ["src", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80", "alt", "Jobs", 1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500"], ["src", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80", "alt", "SIM & Lifestyle", 1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500"], ["id", "about", "id", "about", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "relative", "py-24", "bg-[#FFF8F5]", "overflow-hidden"], [1, "max-w-7xl", "mx-auto", "px-6", "grid", "grid-cols-1", "md:grid-cols-2", "gap-16", "items-center"], ["data-aos", "fade-right", "data-aos-delay", "200"], [1, "text-4xl", "md:text-5xl", "font-bold", "text-[#C8102E]", "mb-3"], [1, "text-[#C8102E]/80", "text-lg", "mb-6", "tracking-wide"], [1, "text-gray-700", "leading-relaxed", "text-base", "md:text-lg", "mb-4"], [1, "mt-8", "bg-white", "rounded-2xl", "shadow-md", "border", "border-gray-100", "p-6", "md:p-8", "relative", "before:absolute", "before:left-0", "before:top-0", "before:h-full", "before:w-[4px]", "before:bg-[#C8102E]", "before:rounded-l-2xl"], [1, "space-y-3", "text-sm", "md:text-base"], [1, "grid", "grid-cols-1", "sm:grid-cols-4", "gap-2"], [1, "sm:col-span-1", "font-medium", "text-gray-500"], [1, "sm:col-span-3", "text-gray-800"], [1, "sm:col-span-3", "text-gray-800", "space-y-2"], [1, "font-semibold"], [1, "sm:col-span-3", "text-gray-800", "space-y-1"], ["mat-flat-button", "", "color", "warn", "routerLink", "/about", 1, "mt-8", "bg-[#C8102E]", "hover:bg-[#a50d25]", "text-white", "font-semibold", "px-8", "py-3", "rounded-lg", "text-base", "shadow-lg", "transition-transform", "transform", "hover:scale-105"], ["data-aos", "fade-left", "data-aos-delay", "300", 1, "relative", "grid", "grid-cols-2", "gap-4"], [1, "space-y-4"], [1, "relative", "rounded-2xl", "overflow-hidden", "shadow-lg", "group"], ["src", "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", "alt", "Office", 1, "w-full", "h-60", "object-cover", "transition-transform", "duration-700", "group-hover:scale-110"], [1, "absolute", "inset-0", "bg-[#C8102E]/30", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-500", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-semibold"], ["src", "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", "alt", "Meeting", 1, "w-full", "h-60", "object-cover", "transition-transform", "duration-700", "group-hover:scale-110"], [1, "absolute", "inset-0", "bg-[#F4A300]/30", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-500", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-semibold"], [1, "space-y-4", "mt-10", "md:mt-12"], ["src", "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", "alt", "Team", 1, "w-full", "h-60", "object-cover", "transition-transform", "duration-700", "group-hover:scale-110"], ["src", "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", "alt", "Collaboration", 1, "w-full", "h-60", "object-cover", "transition-transform", "duration-700", "group-hover:scale-110"], ["id", "services", "data-aos", "fade-up", "data-aos-duration", "800", "data-aos-once", "true", 1, "py-24", "bg-white"], [1, "max-w-7xl", "mx-auto", "px-6", "text-center"], ["data-aos", "fade-down", "data-aos-delay", "100", 1, "text-4xl", "font-bold", "text-[#C8102E]", "mb-2"], ["data-aos", "fade-down", "data-aos-delay", "200", 1, "text-[#C8102E]/80", "text-lg", "mb-12", "tracking-wide"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], ["data-aos", "zoom-in-up", "data-aos-delay", "100", 1, "group", "bg-[#FFF8F5]", "rounded-2xl", "overflow-hidden", "shadow-md", "hover:shadow-xl", "transition-all", "duration-500"], [1, "overflow-hidden", "relative"], ["src", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80", "alt", "Student Support", 1, "w-full", "h-56", "object-cover", "transform", "group-hover:scale-110", "transition-transform", "duration-700", "ease-out"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/30", "to-transparent", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-500"], [1, "p-6", "text-center"], [1, "text-[#C8102E]", "font-semibold", "text-xl", "mb-1"], [1, "text-[#C8102E]/70", "mb-3"], [1, "text-gray-600", "text-sm", "leading-relaxed"], [1, "text-gray-500", "text-sm", "mt-1"], ["data-aos", "zoom-in-up", "data-aos-delay", "200", 1, "group", "bg-[#FFF8F5]", "rounded-2xl", "overflow-hidden", "shadow-md", "hover:shadow-xl", "transition-all", "duration-500"], ["src", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", "alt", "Real Estate", 1, "w-full", "h-56", "object-cover", "transform", "group-hover:scale-110", "transition-transform", "duration-700", "ease-out"], ["data-aos", "zoom-in-up", "data-aos-delay", "300", 1, "group", "bg-[#FFF8F5]", "rounded-2xl", "overflow-hidden", "shadow-md", "hover:shadow-xl", "transition-all", "duration-500"], ["src", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80", "alt", "Jobs", 1, "w-full", "h-56", "object-cover", "transform", "group-hover:scale-110", "transition-transform", "duration-700", "ease-out"], ["data-aos", "zoom-in-up", "data-aos-delay", "400", 1, "group", "bg-[#FFF8F5]", "rounded-2xl", "overflow-hidden", "shadow-md", "hover:shadow-xl", "transition-all", "duration-500"], ["src", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80", "alt", "SIM & Services", 1, "w-full", "h-56", "object-cover", "transform", "group-hover:scale-110", "transition-transform", "duration-700", "ease-out"], ["id", "partnership", "data-aos", "fade-up", "data-aos-duration", "800", 1, "py-24", "bg-[#FFF8F5]"], ["data-aos", "fade-up", "data-aos-delay", "300", "data-aos-duration", "1000", 1, "bg-white", "shadow-xl", "rounded-2xl", "p-8", "md:p-12", "max-w-3xl", "mx-auto"], [1, "text-2xl", "font-semibold", "text-[#C8102E]", "mb-1"], [1, "text-[#C8102E]/70", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "text-left", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "companyName", "placeholder", "Enter your company name"], ["matInput", "", "formControlName", "contactPerson", "placeholder", "Enter contact name"], ["appearance", "outline", 1, "md:col-span-2"], ["matInput", "", "formControlName", "email", "placeholder", "example@domain.jp"], ["formControlName", "cooperationType"], ["value", "Real Estate / \u4E0D\u52D5\u7523"], ["value", "Language School / \u5B66\u6821"], ["value", "Recruitment / \u63A1\u7528"], ["value", "Other / \u305D\u306E\u4ED6"], ["matInput", "", "formControlName", "message", "rows", "4", "placeholder", "Describe your cooperation idea..."], [1, "md:col-span-2", "text-center"], ["mat-flat-button", "", "color", "warn", "type", "submit", 1, "bg-[#C8102E]", "hover:bg-[#a50d25]", "text-white", "font-semibold", "px-10", "py-3", "rounded-lg", "shadow-md", "transition-transform", "transform", "hover:scale-105"], ["id", "contact", "data-aos", "fade-up", "data-aos-duration", "300", 1, "bg-white", "py-20", "relative"], [1, "max-w-4xl", "mx-auto", "px-6", "text-center", "py-20"], [1, "text-4xl", "md:text-3xl", "font-bold", "text-[#C8102E]", "uppercase"], [1, "text-[#C8102E]", "text-xl", "font-medium", "mb-8"], [1, "max-w-2xl", "mx-auto", "text-gray-600", "mb-10", "text-base", "leading-relaxed"], [1, "bg-white", "rounded-2xl", "shadow-lg", "border", "border-[#F4A300]/30", "p-8", "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "text-left", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "type", "email", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "phone"], ["formControlName", "inquiryType"], ["value", "study"], ["value", "job"], ["value", "partnership"], ["value", "other"], [1, "space-y-4", "flex", "flex-col", "justify-between"], ["appearance", "outline", 1, "w-full", "flex-1"], ["matInput", "", "formControlName", "message", "rows", "8", "placeholder", "\u3054\u7528\u4EF6\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002/ Please write your message here..."], [1, "col-span-1", "md:col-span-2", "flex", "justify-center", "mt-4"], ["mat-flat-button", "", "color", "warn", "type", "submit", 1, "bg-[#C8102E]", "hover:bg-[#F4A300]", "text-white", "font-semibold", "py-3", "px-10", "rounded-md", "transition", "duration-300", "shadow-md", "hover:shadow-lg"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " \u65E5\u672C\u4FE1\u767A\u56FD\u969B\u682A\u5F0F\u4F1A\u793E - VIJP ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " \u4FE1\u983C\u3092\u790E\u306B\u3001\u672A\u6765\u3092\u767A\u3057\u3001\u4E16\u754C\u3078\u3064\u306A\u3050");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Rooted in Trust. Creating the Future. Connecting to the World ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
            return ctx.scrollToContact();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " CONTACT US ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "\u5B85\u5730\u5EFA\u7269\u53D6\u5F15\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\u514D\u8A31\u8A3C\u756A\u53F7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\u6771\u4EAC\u90FD\u77E5\u4E8B\uFF08\uFF11\uFF09\u7B2C\uFF11\uFF10\uFF19\uFF16\uFF12\uFF17\u53F7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\u6709\u6599\u8077\u696D\u7D39\u4ECB\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "\u8A31\u53EF\u756A\u53F7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "\uFF11\uFF13\u30FC\u30E6\u30FC\uFF13\uFF11\uFF12\uFF15\uFF12\uFF17");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "\u52B4\u50CD\u8005\u6D3E\u9063\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\u8A31\u53EF\u756A\u53F7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "\u6D3E\uFF11\uFF13\uFF0D\uFF13\uFF11\uFF17\uFF16\uFF19\uFF16");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\u96FB\u6C17\u901A\u4FE1\u5A92\u4ECB\u7B49");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\u5C4A\u51FA\u756A\u53F7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "C\uFF12\uFF11\uFF10\uFF14\uFF14\uFF16\uFF18");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "section", 16)(45, "div", 17)(46, "div", 18)(47, "div")(48, "h2", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, " \u4F1A\u793E\u6848\u5185 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " About Us ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, " VIJP is a member of Tin Phat Group, providing comprehensive support for students, real estate, jobs, and lifestyle services in Japan. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, " VUP\u306F\u6BCD\u4F1A\u793E\u306E\u30D9\u30C8\u30CA\u30E0\u300CT\u00EDn Ph\u00E1t\u300D\u306E\u5098\u4E0B\u4F01\u696D\u3067\u3042\u308A\u3001\u65E5\u672C\u3067\u306E\u7559\u5B66\u751F\u652F\u63F4\u3001\u4E0D\u52D5\u7523\u3001\u751F\u6D3B\u30B5\u30DD\u30FC\u30C8\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, " View All Services ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 24)(59, "div", 25)(60, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 28)(63, "h3", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "\u7559\u5B66\u751F\u652F\u63F4\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "p", 30)(66, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "Student Support Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 25)(69, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](70, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 28)(72, "h3", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "\u4E0D\u52D5\u7523\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "p", 30)(75, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "Real Estate Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "div", 25)(78, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](79, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div", 28)(81, "h3", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "\u4EBA\u6750\u7D39\u4ECB\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "p", 30)(84, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](85, "Recruitment Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 25)(87, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "div", 28)(90, "h3", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91, "\u901A\u4FE1\u95A2\u4FC2\u53CA\u3073\u751F\u6D3B\u652F\u63F4\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "p", 30)(93, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "Telecommunication and Lifestyle Support Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "section", 35)(96, "div", 36)(97, "div", 37)(98, "h2", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "\u4F1A\u793E\u6982\u8981");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "h3", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "Company Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, " \u65E5\u672C\u4FE1\u767A\u56FD\u969B\u3231\u306F\u3001\u304A\u5BA2\u69D8\u304B\u3089\u306E\u4FE1\u983C\u3092\u6700\u3082\u5927\u5207\u306A\u4FA1\u5024\u3068\u3057\u3001\u305D\u306E\u4FE1\u983C\u3092\u57FA\u76E4\u306B\u65B0\u3057\u3044\u672A\u6765\u3092\u5275\u9020\u3057\u3001 \u65E5\u672C\u3068\u4E16\u754C\u3092\u3064\u306A\u3050\u67B6\u3051\u6A4B\u3068\u306A\u308B\u3053\u3068\u3092\u4F7F\u547D\u3068\u3057\u307E\u3059\u3002 \u79C1\u305F\u3061\u306F\u3001\u8AA0\u5B9F\u3055\u3092\u3082\u3063\u3066\u793E\u4F1A\u306B\u8CA2\u732E\u3057\u3001\u8C4A\u304B\u306A\u56FD\u969B\u793E\u4F1A\u306E\u767A\u5C55\u306B\u5BC4\u4E0E\u3059\u308B\u4F01\u696D\u3067\u3042\u308A\u7D9A\u3051\u307E\u3059\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 41)(105, "dl", 42)(106, "div", 43)(107, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, " \u4F1A\u793E\u540D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "dd", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, " \u65E5\u672C\u4FE1\u767A\u56FD\u969B\u682A\u5F0F\u4F1A\u793E\uFF08VIJP Co., Ltd\uFF09 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "div", 43)(112, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, " \u4EE3\u8868 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "dd", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115, " \u4EE3\u8868\u53D6\u7DE0\u5F79\u3000\u30B0\u30A8\u30F3 \u30AB\u30C3\u30AF \u30EB\u30F3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 43)(117, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118, " \u6240\u5728\u5730 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "dd", 46)(120, "p")(121, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122, "\u3010\u672C\u793E\u3011");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](123, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124, " \u3012116-0013 \u6771\u4EAC\u90FD\u8352\u5DDD\u533A\u897F\u65E5\u66AE\u91CC5-2-19 \u30EA\u30F3\u30C8\u30F3\u7B2C2\u897F\u65E5\u66AE\u91CC2F");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](125, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](126, " TEL: 03-5850-5775\u3000FAX: 03-5850-5776 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "p")(128, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, "\u3010\u798F\u5CA1\u652F\u793E\u3011");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](130, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, " \u798F\u5CA1\u770C\uFF08\u8A73\u7D30\u4F4F\u6240\uFF09");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](132, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, " TEL: 03-5850-5775\u3000FAX: 03-5850-5776 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "p")(135, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](136, "\u3010\u718A\u672C\u652F\u793E\u3011");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](137, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](138, " \u718A\u672C\u770C\uFF08\u8A73\u7D30\u4F4F\u6240\uFF09");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](139, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, " TEL: 03-5850-5775\u3000FAX: 03-5850-5776 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "p")(142, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "\u3010\u30D9\u30C8\u30CA\u30E0\u6BCD\u4F53\u4F1A\u793E\u3011");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](144, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, " TIN PHAT GROUP");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](146, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, " 14F Sunsquare, Le Duc Tho, My Dinh, Ha Noi, Vietnam ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "div", 43)(149, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](150, "\u8A2D\u7ACB");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "dd", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, "2020\u5E7401\u670801\u65E5");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "div", 43)(154, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](155, "\u8CC7\u672C\u91D1");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "dd", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, "2,500\u4E07\u5186");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "div", 43)(159, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160, "\u53D6\u5F15\u9280\u884C");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "dd", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162, " \u4E09\u83F1UFJ\u9280\u884C \uFF0F \u4E09\u4E95\u4F4F\u53CB\u9280\u884C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "div", 43)(164, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "\u4E3B\u306A\u53D6\u5F15\u5148");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "dd", 48)(167, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168, "ZENSHO GROUP\u3001\u3059\u304B\u3044\u3089\u30FC\u304F\u30B0\u30EB\u30FC\u30D7\u3001\u65E5\u9AD8\u5C4B\u3001\u5320\u5BFF\u53F8");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170, "\u682A\u5F0F\u4F1A\u793E\u30D1\u30EB\u30B921\u3001\u682A\u5F0F\u4F1A\u793E\u30EA\u30BB\u30C3\u30C8\u30B9\u30BF\u30C3\u30D5\u3001\u682A\u5F0F\u4F1A\u793E\u30DE\u30B9\u30DF\u30B5\u30FC\u30D3\u30B9 \u4ED6");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "div", 43)(172, "dt", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173, "\u4E8B\u696D\u5185\u5BB9");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "dd", 48)(175, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176, "\u7559\u5B66\u751F\u652F\u63F4\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](178, "\u4E0D\u52D5\u7523\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](180, "\u4EBA\u6750\u7D39\u4ECB\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](182, "\u901A\u4FE1\u95A2\u4FC2\u53CA\u3073\u751F\u6D3B\u652F\u63F4\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184, " READ MORE / \u8A73\u3057\u304F\u898B\u308B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "div", 50)(186, "div", 51)(187, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](188, "img", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190, " Office / \u30AA\u30D5\u30A3\u30B9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](192, "img", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, " Meeting / \u30DF\u30FC\u30C6\u30A3\u30F3\u30B0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "div", 57)(196, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](197, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](199, " Team / \u30C1\u30FC\u30E0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](201, "img", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](203, " Collaboration / \u5354\u529B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "section", 60)(205, "div", 61)(206, "h2", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](207, " \u4E8B\u696D\u5185\u5BB9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "h3", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209, " Services ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "div", 64)(211, "div", 65)(212, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](213, "img", 67)(214, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "div", 69)(216, "h4", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](217, "\u7559\u5B66\u751F\u652F\u63F4\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "p", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](219, "Student Support Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "p", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](221, " Comprehensive support for Vietnamese students in Japan \u2014 from airport pickup to housing and daily life. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "p", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](223, " \u7A7A\u6E2F\u9001\u8FCE\u3001\u5728\u7559\u624B\u7D9A\u304D\u3001SIM\u767B\u9332\u3001\u4F4F\u5C45\u30FB\u30A2\u30EB\u30D0\u30A4\u30C8\u652F\u63F4\u306A\u3069\u3001\u7559\u5B66\u751F\u751F\u6D3B\u3092\u5168\u9762\u30B5\u30DD\u30FC\u30C8\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "div", 74)(225, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](226, "img", 75)(227, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "div", 69)(229, "h4", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](230, "\u4E0D\u52D5\u7523\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "p", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](232, "Real Estate Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](233, "p", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](234, " Introducing and managing apartments, dormitories, and housing in partnership with trusted Japanese real estate firms. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](235, "p", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](236, " \u4FE1\u983C\u3067\u304D\u308B\u65E5\u672C\u306E\u4E0D\u52D5\u7523\u4F1A\u793E\u3068\u63D0\u643A\u3057\u3001\u8CC3\u8CB8\u7269\u4EF6\u3084\u5B66\u751F\u5BEE\u3092\u7D39\u4ECB\u30FB\u5951\u7D04\u30FB\u7BA1\u7406\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](237, "div", 76)(238, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](239, "img", 77)(240, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "div", 69)(242, "h4", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](243, "\u4EBA\u6750\u7D39\u4ECB\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](244, "p", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](245, "Recruitment Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](246, "p", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](247, " Part-time job matching for students based on ability, schedule, and desired field \u2014 with interpreter support. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](248, "p", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](249, " \u5B66\u751F\u306E\u80FD\u529B\u30FB\u6642\u9593\u306B\u5408\u308F\u305B\u305F\u30A2\u30EB\u30D0\u30A4\u30C8\u7D39\u4ECB\u3002\u9762\u63A5\u3084\u5951\u7D04\u6642\u306E\u901A\u8A33\u30B5\u30DD\u30FC\u30C8\u4ED8\u304D\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](250, "div", 78)(251, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](252, "img", 79)(253, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](254, "div", 69)(255, "h4", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](256, "\u901A\u4FE1\u95A2\u4FC2\u53CA\u3073\u751F\u6D3B\u652F\u63F4\u4E8B\u696D");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](257, "p", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](258, "Telecommunication and Lifestyle Support Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](259, "p", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](260, " SIM card setup, internet, bank account, and lifestyle assistance \u2014 everything students need for life in Japan. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](261, "p", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](262, " SIM\u767B\u9332\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u3001\u9280\u884C\u53E3\u5EA7\u958B\u8A2D\u3001\u884C\u653F\u624B\u7D9A\u304D\u306A\u3069\u3001\u65E5\u672C\u751F\u6D3B\u3092\u652F\u63F4\u3057\u307E\u3059\u3002 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](263, "section", 80)(264, "div", 61)(265, "div", 81)(266, "h4", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](267, "\u63D0\u643A\u30FB\u5354\u529B\u306E\u304A\u7533\u3057\u8FBC\u307F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](268, "p", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](269, "Partnership Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](270, "form", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_270_listener() {
            return ctx.onSubmitPartnerForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "mat-form-field", 85)(272, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](273, "\u4F1A\u793E\u540D / Company Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](274, "input", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](275, "mat-form-field", 85)(276, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](277, "\u62C5\u5F53\u8005 / Contact Person");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](278, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](279, "mat-form-field", 88)(280, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](281, "\u30E1\u30FC\u30EB / Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](282, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](283, "mat-form-field", 85)(284, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](285, "\u5354\u529B\u7A2E\u5225 / Type of Cooperation");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](286, "mat-select", 90)(287, "mat-option", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](288, "\u4E0D\u52D5\u7523 / Real Estate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](289, "mat-option", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](290, "\u5B66\u6821 / Language School");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](291, "mat-option", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](292, "\u63A1\u7528 / Recruitment");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](293, "mat-option", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](294, "\u305D\u306E\u4ED6 / Other");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](295, "mat-form-field", 88)(296, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](297, "\u5185\u5BB9 / Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](298, "textarea", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](299, "div", 96)(300, "button", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](301, " \u9001\u4FE1 / SEND REQUEST ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](302, "section", 98)(303, "div", 99)(304, "h2", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](305, " \u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](306, "p", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](307, " CONTACT US ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](308, "p", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](309, " \u4E0B\u8A18\u306E\u30D5\u30A9\u30FC\u30E0\u306B\u5FC5\u8981\u4E8B\u9805\u3092\u3054\u8A18\u5165\u306E\u4E0A\u3001\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](310, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](311, " Please fill out the form below and our team will get back to you soon. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](312, "form", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_312_listener() {
            return ctx.onSubmitInquiryForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](313, "div", 51)(314, "mat-form-field", 104)(315, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](316, "\u304A\u540D\u524D / Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](317, "input", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](318, "mat-form-field", 104)(319, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](320, "\u30E1\u30FC\u30EB / Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](321, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](322, "mat-form-field", 104)(323, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](324, "\u96FB\u8A71\u756A\u53F7 / Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](325, "input", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](326, "mat-form-field", 104)(327, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](328, "\u304A\u554F\u3044\u5408\u308F\u305B\u7A2E\u985E / Inquiry Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](329, "mat-select", 108)(330, "mat-option", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](331, "\u7559\u5B66 / Study Abroad");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](332, "mat-option", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](333, "\u63A1\u7528 / Recruitment");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](334, "mat-option", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](335, "\u5354\u529B / Partnership");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](336, "mat-option", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](337, "\u305D\u306E\u4ED6 / Other");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](338, "div", 113)(339, "mat-form-field", 114)(340, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](341, "\u30E1\u30C3\u30BB\u30FC\u30B8 / Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](342, "textarea", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](343, "div", 116)(344, "button", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](345, " \u9001\u4FE1\u3059\u308B / SEND MESSAGE ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](270);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.partnerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.inquiryForm);
        }
      },
      dependencies: [ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__.RecaptchaV3Module, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule],
      styles: ["@charset \"UTF-8\";\nimg[_ngcontent-%COMP%] {\n  transition: transform 0.4s ease;\n}\n\n.group[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n@media (max-width: 768px) {\n  section[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n  .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .w-2\\/5[_ngcontent-%COMP%], \n   .w-3\\/5[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nsection[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", \"Noto Sans JP\", sans-serif;\n}\n\n.group[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n}\n\nimg[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease-in-out;\n}\n\nh4[_ngcontent-%COMP%] {\n  transition: color 0.3s ease;\n}\n\n.group[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  color: #a50d25;\n  \n\n}\n\n#news[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", \"Noto Sans JP\", sans-serif;\n}\n#news[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  transition: color 0.3s ease;\n}\n#news[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease-in-out;\n}\n#news[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n#news[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n#news[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 8px 20px rgba(200, 16, 46, 0.3);\n}\n\n#gallery[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", \"Noto Sans JP\", sans-serif;\n}\n#gallery[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 1rem;\n}\n#gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n#gallery[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 10px rgba(200, 16, 46, 0.2);\n}\n#gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.4s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSwrQkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQUVGO0VBQ0E7SUFDRSxzQkFBQTtFQUNGO0VBRUE7O0lBRUUsV0FBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLGlEQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLGlEQUFBO0FBREY7QUFHRTtFQUNFLDJCQUFBO0FBREo7QUFJRTtFQUNFLHNDQUFBO0FBRko7QUFLRTtFQUNFLHNCQUFBO0FBSEo7QUFNRTtFQUNFLHFEQUFBO0FBSko7QUFPRTtFQUNFLHNCQUFBO0VBQ0EsNkNBQUE7QUFMSjs7QUFTQTtFQUNFLGlEQUFBO0FBTkY7QUFRRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0U7RUFDRSxxREFBQTtBQVBKO0FBVUU7RUFDRSwyQkFBQTtFQUNBLDZDQUFBO0FBUko7QUFXRTtFQUNFLCtCQUFBO0FBVEoiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbi5ncm91cDpob3ZlciBpbWcge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5mbGV4IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAudy0yXFwvNSxcclxuICAudy0zXFwvNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ncm91cDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZ3JvdXA6aG92ZXIgaDQge1xyXG4gIGNvbG9yOiAjYTUwZDI1O1xyXG4gIC8qIMOEwpHDocK7wo8gw4TCkcOhwrrCrW0ga2hpIGhvdmVyICovXHJcbn1cclxuXHJcbiNuZXdzIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdOb3RvIFNhbnMgSlAnLCBzYW5zLXNlcmlmO1xyXG5cclxuICBoNCB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuZ3JvdXA6aG92ZXIgaW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyMDAsIDE2LCA0NiwgMC4zKTtcclxuICB9XHJcbn1cclxuXHJcbiNnYWxsZXJ5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdOb3RvIFNhbnMgSlAnLCBzYW5zLXNlcmlmO1xyXG5cclxuICBpZnJhbWUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMjAwLCAxNiwgNDYsIDAuMik7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 3823:
/*!***********************************************************!*\
  !*** ./src/app/layouts/components/link/link.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkComponent: () => (/* binding */ LinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);






function LinkComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 13)(5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", link_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](link_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", link_r1.url, " ");
  }
}
function LinkComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "main", 7)(7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LinkComponent_div_0_div_8_Template, 9, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.links);
  }
}
class LinkComponent {
  constructor(store, appFunction) {
    this.store = store;
    this.appFunction = appFunction;
    this.links = [{
      "title": "外国人技能実習機構",
      "description": "(Organization for Technical Intern Training)",
      "url": "https://www.otit.go.jp"
    }, {
      "title": "法務省",
      "description": "(Ministry of Justice)",
      "url": "http://www.moj.go.jp"
    }, {
      "title": "厚生労働省",
      "description": "(Ministry of Health, Labour and Welfare)",
      "url": "https://www.mhlw.go.jp/index.html"
    }, {
      "title": "JITCO",
      "description": "(Japan International Trainee & Skilled Worker Cooperation Organization)",
      "url": "https://www.jitco.or.jp"
    }, {
      "title": "Philippine Embassy Tokyo",
      "description": "",
      "url": "https://tokyo.philembassy.net"
    }, {
      "title": "Philippine Overseas Labor Office Tokyo",
      "description": "",
      "url": "https://polotokyo.dole.gov.ph"
    }, {
      "title": "Philippine Consulate General Osaka",
      "description": "",
      "url": "https://osakapcg.dfa.gov.ph"
    }, {
      "title": "Philippine Overseas Labor Office Osaka",
      "description": "",
      "url": "http://poloosaka.dole.gov.ph"
    }, {
      "title": "多々一時金",
      "description": "(Lumpsum payment)",
      "url": "https://www.nenkin.go.jp/international/english/lumpsum/lumpsum.html"
    }, {
      "title": "ONLINE PAOS",
      "description": "",
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSdEAgiGv5FjchqKlYOKv2VqvumtJeClHGw7eH0WGnmZa00tjA/viewform"
    }, {
      "title": "在東京タイ王国大使館",
      "description": "",
      "url": "http://site.thaiembassy.jp/th"
    }, {
      "title": "タイ王国大使館労働担当官事務所",
      "description": "",
      "url": "https://japan.mol.go.th"
    }, {
      "title": "タイ王国大阪総領事館",
      "description": "",
      "url": "http://www.thaiconsulate.jp/th/wwwj"
    }, {
      "title": "バンコック銀行",
      "description": "",
      "url": "https://www.bangkokbank.com/en/International-Banking-Japanese-Customer"
    }];
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("link").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  static {
    this.ɵfac = function LinkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__.AppFunctionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LinkComponent,
      selectors: [["vex-link"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "min-h-screen bg-gray-50", 4, "ngIf"], [1, "min-h-screen", "bg-gray-50"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "container", "mx-auto", "py-16"], [1, "mb-20"], ["class", "grid grid-cols-1 md:grid-cols-1 mb-4", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "md:grid-cols-1", "mb-4"], [1, "relative", "bg-white", "shadow-lg", "rounded-lg", "w-full", "p-6", "group", "transition-transform", "duration-500"], [1, "absolute", "text-center", "min-w-[400px]", "top-5", "-left-5", "bg-blue-500", "text-white", "text-sm", "font-bold", "px-4", "py-2", "rounded-tr-lg", "rounded-bl-lg", "transition-all", "duration-500", "ease-in-out", "group-hover:w-full", "group-hover:text-2xl", "group-hover:left-0", "group-hover:top-0", "group-hover:rounded-none", "group-hover:text-center", "group-hover:h-12", "group-hover:flex", "group-hover:items-center", "group-hover:justify-center"], [1, "mt-16"], [1, "text-sm", "text-gray-500", "mb-2"], ["href", "https://www.otit.go.jp", "target", "_blank", 1, "text-blue-500", "hover:underline"]],
      template: function LinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LinkComponent_div_0_Template, 9, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 5989:
/*!***********************************************************!*\
  !*** ./src/app/layouts/components/news/news.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPaginator: () => (/* binding */ CustomPaginator),
/* harmony export */   NewsComponent: () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var src_app_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/splash-screen.service */ 2044);
/* harmony import */ var src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/access-info.service */ 6411);
/* harmony import */ var src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-service.service */ 9054);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ 1032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);













const _c0 = () => [];
function NewsComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewsComponent_div_0_div_11_Template_div_click_0_listener() {
      const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.postClick(post_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", post_r3.INDEX, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](post_r3.CREATED_AT);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", post_r3.TITLE, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function NewsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "main", 8)(7, "section", 9)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, NewsComponent_div_0_div_11_Template, 8, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 14)(13, "mat-paginator", 15, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function NewsComponent_div_0_Template_mat_paginator_page_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handlePageEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r3.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r3.listFormItemNm[2], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.listPosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx_r3.length)("pageSize", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("showFirstLastButtons", ctx_r3.showFirstLastButtons)("pageSizeOptions", ctx_r3.showPageSizeOptions ? ctx_r3.pageSizeOptions : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0))("hidePageSize", ctx_r3.hidePageSize)("pageIndex", ctx_r3.pageIndex);
  }
}
function CustomPaginator() {
  const customPaginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorIntl();
  // Ghi đè hàm rangeLabel
  customPaginatorIntl.getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }
    const startIndex = page * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    return `( ${startIndex + 1}  -  ${endIndex} ) / ${length}`; // Thay "of" bằng "trong"
  };
  return customPaginatorIntl;
}
class NewsComponent {
  handlePageEvent(e) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.fnGetListNews();
  }
  setPageSizeOptions(setPageSizeOptionsInput) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  constructor(store, appFunction, splashScreenService, accessInfo, webService, paginator, postService, router) {
    this.store = store;
    this.appFunction = appFunction;
    this.splashScreenService = splashScreenService;
    this.accessInfo = accessInfo;
    this.webService = webService;
    this.paginator = paginator;
    this.postService = postService;
    this.router = router;
    this.length = 0;
    this.pageSize = 5;
    this.pageIndex = 0;
    this.pageSizeOptions = [5, 10, 15];
    this.hidePageSize = false;
    this.showPageSizeOptions = true;
    this.showFirstLastButtons = true;
    this.disabled = false;
    this.listPosts = [];
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
  }
  ngOnInit() {
    this.pageSize = this.postService.getPageSize() || 5;
    this.pageIndex = this.postService.getPageIndex() || 0;
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("news").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
          this.paginator.itemsPerPageLabel = this.listFormItemNm[3];
          this.paginator.nextPageLabel = this.listFormItemNm[4];
          this.paginator.previousPageLabel = this.listFormItemNm[5];
          this.paginator.lastPageLabel = this.listFormItemNm[6];
          this.paginator.firstPageLabel = this.listFormItemNm[7];
          this.paginator.changes.next();
          this.fnGetListNews();
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  fnGetListNews() {
    const request = {
      accessInfo: this.accessInfo.getAll(),
      pageSize: this.pageSize,
      pageIndex: this.pageIndex
    };
    this.webService.callWs('getPosts', request).subscribe({
      next: data => {
        if (data && data.listPosts) {
          this.length = data.listPostCnt;
          this.listPosts = data.listPosts;
        }
        this.splashScreenService.hide();
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  postClick(post) {
    this.postService.setPageIndex(this.pageIndex);
    this.postService.setPageSize(this.pageSize);
    this.postService.setPost(post);
    this.router.navigateByUrl("/post-detail");
  }
  static {
    this.ɵfac = function NewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__.SplashScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_4__.AccessInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_5__.WebServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["vex-news"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["paginator", ""], ["class", "min-h-screen bg-gray-50", 4, "ngIf"], [1, "min-h-screen", "bg-gray-50"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "container", "mx-auto", "py-12"], [1, "min-h-screen", "bg-gray-50", "p-8"], [1, "container", "mx-auto"], [1, "text-3xl", "font-bold", "text-blue-700", "mb-8", "text-center", 3, "innerHTML"], [1, "relative", "border-l-2", "border-blue-400"], ["class", "mb-8 flex items-center cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "mt-8"], ["aria-label", "Select page", 1, "demo-paginator", 3, "page", "length", "pageSize", "disabled", "showFirstLastButtons", "pageSizeOptions", "hidePageSize", "pageIndex"], [1, "mb-8", "flex", "items-center", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-center", "w-6", "h-6", "bg-blue-500", "text-white", "text-xs", "font-bold", "rounded-full", "-ml-3", "z-10"], [1, "w-full", "ml-8"], [1, "border-b", "border-gray-300", "mb-4"], [1, "text-blue-500", "font-semibold"], [1, "text-gray-700", 3, "innerHTML"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, NewsComponent_div_0_Template, 15, 12, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 2549:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/components/overview/overview.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _pdfviewer_pdfviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pdfviewer/pdfviewer.component */ 2097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);








function OverviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "main", 7)(7, "section", 8)(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 11)(11, "tbody", 12)(12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "th", 13)(14, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "th", 15)(17, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "th", 15)(20, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "th", 15)(23, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "th", 15)(26, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 16)(30, "ol", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "li", 18)(32, "li", 18)(33, "li", 18)(34, "li", 18)(35, "li", 18)(36, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "th", 15)(39, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "th", 15)(42, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "th", 15)(45, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 22)(51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 24)(53, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "img", 26)(56, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 27)(60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "ul", 29)(63, "li", 30)(64, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " \uFF11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "span", 33)(68, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li", 30)(70, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " \uFF12 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "span", 33)(74, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "li", 30)(76, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " \uFF13 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "span", 33)(80, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "li", 30)(82, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " \uFF14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "span", 33)(86, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "li", 30)(88, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " \uFF15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "span", 33)(92, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "li", 30)(94, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " \uFF16 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "span", 33)(98, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 27)(104, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_0_Template_p_click_106_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.licenseDetailShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "iframe", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[2], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[3], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[34], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[4], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[35], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[5], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[36], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[6], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[37], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[7], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[38], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[8], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[9], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[10], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[11], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[12], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[13], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[14], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[15], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[39], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[16], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[40], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[17], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[41], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[18], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[19], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[20], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[21], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[22], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[23], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[24], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[42], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[25], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[43], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[26], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[44], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[27], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[45], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[28], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[46], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[29], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[47], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[30], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[31], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[32], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.listFormItemNm[33], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
class OverviewComponent {
  constructor(dialog, store, appFunction) {
    this.dialog = dialog;
    this.store = store;
    this.appFunction = appFunction;
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
  }
  licenseDetailShow() {
    this.dialog.open(_pdfviewer_pdfviewer_component__WEBPACK_IMPORTED_MODULE_2__.PdfviewerComponent, {
      width: '80%',
      height: '80%',
      data: {
        pdfUrl: 'assets/img/license/監理団体の業務の運営に関する規程.pdf'
      },
      // Đường dẫn đến file PDF
      panelClass: 'custom-dialog-container' // Tuỳ chỉnh thêm nếu cần
    });
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("overview").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  static {
    this.ɵfac = function OverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_3__.AppFunctionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["vex-overview"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "min-h-screen bg-gray-50", 4, "ngIf"], [1, "min-h-screen", "bg-gray-50"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "container", "mx-auto", "py-12"], [1, "mb-16"], [1, "overflow-hidden", "rounded-lg", "shadow-lg", "bg-white", "p-8", "mb-16"], [1, "text-4xl", "font-bold", "text-blue-700", "mb-8", "text-center", 3, "innerHTML"], [1, "p-6", "min-w-full", "border-collapse", "table-auto"], [1, "divide-y", "divide-gray-200"], [1, "px-6", "w-40", "py-4", "bg-gray-50", "text-left", "text-sm", "font-bold", "text-gray-600", 3, "innerHTML"], [1, "px-6", "py-4", "text-sm", "text-gray-800", 3, "innerHTML"], [1, "px-6", "py-4", "bg-gray-50", "text-left", "text-sm", "font-bold", "text-gray-600", 3, "innerHTML"], [1, "px-6", "py-4", "text-sm", "text-gray-800"], [1, "list-decimal", "list-inside"], [3, "innerHTML"], [1, "bg-white", "shadow-lg", "rounded-xl", "p-8", "mb-16"], [1, "p-6"], [1, "text-gray-700", "leading-relaxed", "mb-6", 3, "innerHTML"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "justify-center"], [1, "flex", "flex-col", "items-center", "hover:scale-105", "transition", "duration-300"], ["src", "./assets/img/license/license-01.png", "alt", "\u76E3\u7406\u56E3\u4F53\u8A31\u53EF\u8A3C", 1, "max-h-full", "max-w-full", "object-contain"], [1, "text-center", "text-gray-600", "mt-4", 3, "innerHTML"], ["src", "./assets/img/license/license-02.png", "alt", "\u767B\u9332\u652F\u63F4\u6A5F\u95A2\u8A8D\u5B9A\u8A3C", 1, "max-h-full", "max-w-full", "object-contain"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "text-gray-700", "leading-relaxed", "space-y-6"], [1, "space-y-4"], [1, "flex", "items-center"], [1, "inline-block", "bg-blue-500", "text-white", "text-sm", "font-bold", "py-1", "px-3", "rounded-full", "mr-4"], [1, "flex-1"], [1, "font-bold", 3, "innerHTML"], [1, "shadow-lg", "flex", "justify-center", "items-center", "flex", "flex-col", "items-center", "hover:scale-105", "transition", "duration-300"], ["src", "./assets/img/license/license-03.png", "alt", "\u767B\u9332\u652F\u63F4\u6A5F\u95A2\u8A8D\u5B9A\u8A3C", 1, "max-h-full", "max-w-full", "object-contain"], [1, "text-blue-700", "cursor-pointer", "hover:underline", 3, "click", "innerHTML"], ["src", "./assets/img/license/license-04.jpg", "alt", "\u767B\u9332\u652F\u63F4\u6A5F\u95A2\u8A8D\u5B9A\u8A3C", 1, "max-h-full", "max-w-full", "object-contain"], ["id", "access-map", 1, "bg-gradient-to-br", "from-blue-50", "via-white", "to-gray-50", "shadow-lg", "rounded-xl", "p-8"], [1, "text-4xl", "font-bold", "text-blue-700", "mb-6", "text-center", 3, "innerHTML"], [1, "mb-6"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8292362672205!2d139.76944269999998!3d35.730418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dd6e5ead199%3A0x4368e2fb9082513d!2zTmjhuq10IELhuqNuLCDjgJIxMTYtMDAxMyBUb2t5bywgQXJha2F3YSBDaXR5LCBOaXNoaW5pcHBvcmksIDItY2jFjW1l4oiSNTTiiJIyIOW8peaghOODk-ODqyA1MDI!5e0!3m2!1svi!2s!4v1732852139001!5m2!1svi!2s`, "width", "100%", "height", "400", "allowfullscreen", "", "loading", "lazy", 1, "rounded-lg", "shadow-lg", "border-0"]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, OverviewComponent_div_0_Template, 113, 48, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 2097:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/components/pdfviewer/pdfviewer.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfviewerComponent: () => (/* binding */ PdfviewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);




class PdfviewerComponent {
  constructor(dialogRef, data, sanitizer) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.sanitizer = sanitizer;
    // Sử dụng DomSanitizer để xử lý URL an toàn
    this.pdfSafeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.pdfUrl);
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function PdfviewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PdfviewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PdfviewerComponent,
      selectors: [["vex-pdfviewer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "w-full", "h-full", "flex", "justify-center", "items-center", "bg-gray-50", "p-4"], ["type", "application/pdf", 1, "w-full", "h-full", "rounded-lg", "shadow-lg", "border", 2, "min-height", "500px", 3, "src"]],
      template: function PdfviewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSafeSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2193:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/components/post-detail/post-detail.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostDetailComponent: () => (/* binding */ PostDetailComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ 1032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);












function PostDetailComponent_div_0_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21)(2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const imgUrl_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "./assets/img/post/" + imgUrl_r2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r2.post.TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.listFormItemNm[7], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function PostDetailComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PostDetailComponent_div_0_div_12_div_2_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.imageList);
  }
}
function PostDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7)(7, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PostDetailComponent_div_0_div_12_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13)(17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PostDetailComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-icon", 15)(19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.post.TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.post.CREATED_AT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.imageList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.post.CONTENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.listFormItemNm[2], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
class PostDetailComponent {
  constructor(store, appFunction, postService, router) {
    this.store = store;
    this.appFunction = appFunction;
    this.postService = postService;
    this.router = router;
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
    this.post = {};
    this.imageList = [];
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("post-detail").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
        this.postService.selectedPost$.subscribe({
          next: post => {
            if (!post) {
              this.router.navigate(["/home"]);
            } else {
              this.post = post;
              this.post.IMAGE_URL.split(',').forEach(image => {
                if (image.trim().length === 0) {
                  return;
                } else {
                  let imgUrl = this.post.ID + "/" + image.trim();
                  this.imageList.push(imgUrl);
                }
              });
            }
          },
          error: error => {
            console.error('Đã xảy ra lỗi khi tải danh sách:', error);
          }
        });
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(["/news"]);
  }
  static {
    this.ɵfac = function PostDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_2__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PostDetailComponent,
      selectors: [["vex-post-detail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "min-h-screen", 4, "ngIf"], [1, "min-h-screen"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "container", "mx-auto", "p-6", "rounded-lg", "shadow-lg", "mt-8"], [1, "text-4xl", "font-bold", "text-blue-700", "mb-4", "mt-4"], [1, "text-sm", "text-blue-500", "italic", "mb-8", "flex", "items-center", "gap-2"], ["svgIcon", "mat:calendar_today", 1, "!icon-sm"], ["class", "mb-6", 4, "ngIf"], [1, "text-gray-700", "leading-relaxed"], [1, "mt-8", "text-right"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full", "py-2", "px-6", "title", 3, "click"], ["svgIcon", "mat:keyboard_arrow_left", 1, "ltr:-ml-2", "rtl:-mr-2", "ltr:mr-2", "rtl:ml-2", "!icon-lg"], [3, "innerHTML"], [1, "mb-6"], [1, "grid", "grid-cols-3", "xs:grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-10"], ["class", " p-6 hover:scale-105 transition duration-300", 4, "ngFor", "ngForOf"], [1, "p-6", "hover:scale-105", "transition", "duration-300"], [1, "rounded-lg", "shadow-lg", "w-full", "h-auto", "object-cover", 3, "src", "alt"], [1, "font-semibold", "text-center", "text-gray-600", 3, "innerHTML"]],
      template: function PostDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PostDetailComponent_div_0_Template, 20, 7, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 7661:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/quickpanel/quickpanel.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickpanelComponent: () => (/* binding */ QuickpanelComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 4063);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 3324);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);











const _c0 = () => [];
class QuickpanelComponent {
  constructor() {
    this.date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('DD');
    this.dayName = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('EEEE');
  }
  ngOnInit() {}
  static {
    this.ɵfac = function QuickpanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuickpanelComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QuickpanelComponent,
      selectors: [["vex-quickpanel"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 67,
      vars: 19,
      consts: [[1, "body-2", "p-6", "bg-primary-600", "text-on-primary-600"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matRipple", "", 1, "vex-list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", 3, "value"], ["color", "accent", "mode", "determinate", 3, "value"], ["color", "warn", "mode", "determinate", 3, "value"]],
      template: function QuickpanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list")(9, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "UPCOMING EVENTS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3)(12, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Business Meeting");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 3)(17, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ask for Vacation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "12:00 PM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 3)(22, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Dinner with Sophie");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "18:30 PM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 3)(27, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Deadline for Project X");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "21:00 PM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "TODO-LIST");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 3)(35, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Invite Jack to play golf");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Added: 6 hours ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 3)(40, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Get to know Angular more");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Added: 2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 3)(45, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Configure that new router");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Added: 5 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SERVER STATISTICS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6)(53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CPU Load (71% / 100%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-progress-bar", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6)(58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-progress-bar", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6)(63, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "CPU Temp (43\u00B0 / 80\u00B0)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-progress-bar", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dayName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 54);
        }
      },
      dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemTitle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.vex-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 72px;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 1rem;\n  padding-top: 0px;\n}\n.vex-list-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFBQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSx1Q0FBQTtBQUFSOztBQUlBO0VBQ0ksZUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnZleC1saXN0LWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNzJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgQGFwcGx5IHAtNCBwdC0wO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKTtcbiAgICB9XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7349:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/components/search-result/search-result.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultComponent: () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 4555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.const */ 9844);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/access-info.service */ 6411);
/* harmony import */ var src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/web-service.service */ 9054);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var _toolbar_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toolbar/search/search.service */ 1883);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/post.service */ 1032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);














function SearchResultComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchResultComponent_div_0_div_11_Template_div_click_0_listener() {
      const search_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.linkToDetail(search_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13)(2, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const search_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", search_r2.TITLE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", search_r2.BODY, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.basePath + "" + search_r2.LINK);
  }
}
function SearchResultComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 8)(10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SearchResultComponent_div_0_div_11_Template, 11, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.listFormItemNm[1], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.searchResult);
  }
}
class SearchResultComponent {
  constructor(store, accessInfo, webService, appFunction, searchService, postService, router) {
    this.store = store;
    this.accessInfo = accessInfo;
    this.webService = webService;
    this.appFunction = appFunction;
    this.searchService = searchService;
    this.postService = postService;
    this.router = router;
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
    this.searchResult = [];
    this.basePath = "";
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
    this.basePath = _app_const__WEBPACK_IMPORTED_MODULE_2__.fullPath;
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("search-result").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
        this.searchService.searchResult$.subscribe({
          next: searchResult => {
            if (!searchResult || searchResult.length == 0) {
              this.router.navigate(["/home"]);
            } else {
              this.searchResult = searchResult;
            }
          },
          error: error => {
            console.error('Đã xảy ra lỗi khi tải danh sách:', error);
          }
        });
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  linkToDetail(search) {
    if (search) {
      // Link to POST
      if (search.TYPE_SEARCH == "2") {
        this.fnGetListNews(search.ID);
      } else {
        if (search.FRAGMENT) {
          this.router.navigate(["/" + search.LINK], {
            fragment: search.FRAGMENT
          });
        } else {
          this.router.navigate(["/" + search.LINK]);
        }
      }
    }
  }
  fnGetListNews(postId) {
    const request = {
      accessInfo: this.accessInfo.getAll(),
      postId: postId
    };
    this.webService.callWs('getPostId', request).subscribe({
      next: data => {
        if (data && data.post) {
          this.postService.setPageIndex(0);
          this.postService.setPageSize(5);
          this.postService.setPost(data.post);
          this.router.navigateByUrl("/post-detail");
        } else {
          this.router.navigateByUrl("/home");
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  static {
    this.ɵfac = function SearchResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_3__.AccessInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_4__.WebServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_5__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_toolbar_search_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SearchResultComponent,
      selectors: [["vex-search-result"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "min-h-screen bg-gray-50", 4, "ngIf"], [1, "min-h-screen", "bg-gray-50"], [1, "relative", "bg-gradient-to-br", "from-blue-600", "via-blue-500", "to-blue-400", "text-white", "overflow-hidden"], [1, "absolute", "inset-0", "bg-cover", "bg-center", "opacity-30", 2, "background-image", "url('./assets/img/bussiness/bussiness-header.jpg')"], [1, "relative", "z-10", "text-center", "py-20", "px-4"], [1, "text-6xl", "mb-10", "font-extrabold", "tracking-wide", "drop-shadow-lg", 3, "innerHTML"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-16", "bg-white", "rounded-t-[50%]"], [1, "min-h-screen", "bg-gray-50", "py-10"], [1, "container", "mx-auto"], [1, "py-10"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "cursor-pointer bg-white rounded-lg shadow-lg border hover:border-blue-500 transition duration-300 transform hover:-translate-y-2 p-5", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "bg-white", "rounded-lg", "shadow-lg", "border", "hover:border-blue-500", "transition", "duration-300", "transform", "hover:-translate-y-2", "p-5", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-bold", "text-blue-600", "truncate"], ["svgIcon", "mat:info", 1, "icon-md", "text-blue-500"], [1, "text-sm", "text-gray-600", "mb-4", "line-clamp-3"], [1, "flex", "items-center", "text-blue-500", "text-sm", "mt-auto"], ["svgIcon", "mat:link", 1, "icon-md"], [1, "text-xs", "text-gray-400"]],
      template: function SearchResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 12, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formItemNmLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgFor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleFadeIn500ms]
      }
    });
  }
}

/***/ }),

/***/ 7332:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/search-modal/search-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModalComponent: () => (/* binding */ SearchModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);








class SearchModalComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function SearchModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchModalComponent,
      selectors: [["vex-search-modal"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 66,
      vars: 0,
      consts: [[1, "flex", "items-center", "gap-4", "px-6", "py-3", "border-b", "border-divider"], ["svgIcon", "mat:search", 1, "text-secondary", "flex-none"], ["type", "text", "placeholder", "Search...", 1, "text-xl", "font-medium", "bg-transparent", "outline-none", "flex-auto", "placeholder-secondary"], ["type", "button", "mat-icon-button", "", 1, "flex-none", "ltr:-mr-2", "rtl:-ml-2", "text-secondary"], ["svgIcon", "mat:settings"], [1, "p-4"], [1, "text-xs", "font-semibold", "text-secondary", "px-2", "mb-2"], [1, "space-y-1"], ["matRipple", "", 1, "px-2", "py-2", "hover:bg-hover", "rounded", "transition", "duration-200", "ease-out", "flex", "items-center", "gap-4", "cursor-pointer", "select-none"], ["src", "assets/img/avatars/4.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex-auto", "text-base", "font-medium"], [1, "flex-none", "text-xs", "text-secondary", "font-medium", "flex", "items-center", "gap-2"], ["svgIcon", "mat:contacts", 1, "icon-xs", "flex-none"], ["svgIcon", "mat:chevron_right", 1, "icon-sm", "flex-none"], ["src", "assets/img/avatars/3.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-foreground/20"], ["svgIcon", "mat:web", 1, "icon-sm", "flex-none"], [1, "text-secondary", "text-xs"], ["svgIcon", "mat:check", "color", "primary", 1, "icon-sm", "flex-none"]],
      template: function SearchModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1)(3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Contacts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alice Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "found in Contacts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Frank White");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "found in Contacts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10)(36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Scrumboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "/apps/scrumboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8)(42, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10)(45, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mailbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "/apps/mailbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5)(51, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7)(54, "div", 8)(55, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Configure OrderController as defined in RVT-11 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Add more data-models to product-controller ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple]
    });
  }
}

/***/ }),

/***/ 2800:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav-item/sidenav-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavItemComponent: () => (/* binding */ SidenavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/dropdown.animation */ 8933);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/navigation/navigation.service */ 7804);













const _c0 = () => ({
  exact: false
});
const _c1 = (a0, a1) => [a0, a1];
function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r0.item.icon);
  }
}
function SidenavItemComponent_a_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r0.item.badge.bgClass, ctx_r0.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.badge.value);
  }
}
function SidenavItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.level === 0 && ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
  }
}
function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r0.item.icon);
  }
}
function SidenavItemComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r0.item.badge.bgClass, ctx_r0.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.badge.value);
  }
}
function SidenavItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.level === 0 && ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
  }
}
function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r0.item.icon);
  }
}
function SidenavItemComponent_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r0.item.badge.bgClass, ctx_r0.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.badge.value);
  }
}
function SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r4)("level", ctx_r0.level + 1);
  }
}
function SidenavItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleOpen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidenavItemComponent_ng_container_2_span_5_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("vex-sidenav-item--active", ctx_r0.isOpen || ctx_r0.isActive)("vex-sidenav-item--open", ctx_r0.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.level === 0 && ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@dropdown", ctx_r0.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}
function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r5)("level", 0);
  }
}
function SidenavItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}
class SidenavItemComponent {
  constructor(router, cd, navigationService) {
    this.router = router;
    this.cd = cd;
    this.navigationService = navigationService;
    this.isOpen = false;
    this.isActive = false;
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
  }
  get levelClass() {
    return `item-level-${this.level}`;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.onRouteChange());
    this.navigationService.openChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(item => this.onOpenChange(item));
  }
  ngOnChanges(changes) {
    if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
      this.onRouteChange();
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item);
    this.cd.markForCheck();
  }
  onOpenChange(item) {
    if (this.isChildrenOf(this.item, item)) {
      return;
    }
    if (this.hasActiveChilds(this.item)) {
      return;
    }
    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }
  onRouteChange() {
    if (this.hasActiveChilds(this.item)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    }
  }
  isChildrenOf(parent, item) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }
    return parent.children.filter(child => this.isDropdown(child)).some(child => this.isChildrenOf(child, item));
  }
  hasActiveChilds(parent) {
    return parent.children.some(child => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }
      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route, false);
      }
    });
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
  static {
    this.ɵfac = function SidenavItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidenavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SidenavItemComponent,
      selectors: [["vex-sidenav-item"]],
      hostVars: 2,
      hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.levelClass);
        }
      },
      inputs: {
        item: "item",
        level: "level"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "vex-sidenav-item__icon", 3, "svgIcon", 4, "ngIf"], [1, "vex-sidenav-item__label"], ["class", "vex-sidenav-item__badge", 3, "ngClass", 4, "ngIf"], [1, "vex-sidenav-item__icon", 3, "svgIcon"], [1, "vex-sidenav-item__badge", 3, "ngClass"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "click"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-item", 3, "click"], ["svgIcon", "mat:keyboard_arrow_right", 1, "vex-sidenav-item__dropdown-icon"], [1, "vex-sidenav-item__dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "vex-sidenav-subheading"]],
      template: function SidenavItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0)(1, SidenavItemComponent_div_1_Template, 5, 3, "div", 1)(2, SidenavItemComponent_ng_container_2_Template, 9, 9, "ng-container", 2)(3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
        }
      },
      dependencies: [SidenavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor],
      styles: [".vex-sidenav-item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: rgb(var(--vex-color-primary-600)/1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: var(--vex-sidenav-item-min-height);\n  padding: var(--vex-sidenav-item-padding-vertical) var(--vex-sidenav-item-padding-horizontal);\n  position: relative;\n  text-decoration: none;\n  -webkit-user-select: none;\n          user-select: none;\n  font-weight: var(--vex-sidenav-item-font-weight);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: rgb(var(--vex-color-primary-600)/1);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: white;\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--vex-color-primary-600)/1);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: rgb(var(--vex-color-primary-600)/1);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: white;\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--vex-color-primary-600)/1);\n}\n.vex-sidenav-item.vex-sidenav-item--open[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 0);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 1);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 2);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 3);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 4);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 5);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%], \n.vex-sidenav-item__label[_ngcontent-%COMP%], \n.vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--vex-sidenav-item-icon-color);\n  font-size: var(--vex-sidenav-item-icon-size);\n  height: var(--vex-sidenav-item-icon-size);\n  margin-inline-end: var(--vex-sidenav-item-icon-gap);\n  width: var(--vex-sidenav-item-icon-size);\n}\n\n.vex-sidenav-item__label[_ngcontent-%COMP%] {\n  flex: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.vex-sidenav-item__badge[_ngcontent-%COMP%] {\n  flex: none;\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  padding: 0 7px;\n  text-align: center;\n  font-weight: 700;\n  margin-inline-start: 0.5rem;\n}\n\n.vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  transform: rotate(0deg) !important;\n  width: 18px;\n  margin-inline-start: 0.5rem;\n}\n\n.vex-sidenav-item__dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.vex-sidenav-subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--vex-sidenav-subheading-color);\n  text-transform: uppercase;\n  white-space: nowrap;\n  font-weight: 600;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-top: 1.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n\n\n[_nghost-%COMP%]:first-child   .vex-sidenav-subheading[_ngcontent-%COMP%] {\n  margin-top: -0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi1pdGVtL3NpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDRGQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQUNKO0FBQ0k7RUFDSSwrQ0FBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFFUTtFQUNJLFlBQUE7QUFBWjtBQUdRO0VBQ0ksMENBQUE7QUFEWjtBQUtJO0VBQ0ksK0NBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtBQUhaO0FBTVE7RUFDSSxZQUFBO0FBSlo7QUFPUTtFQUNJLDBDQUFBO0FBTFo7QUFVUTtFQUNJLG1DQUFBO0FBUlo7O0FBY0k7RUFDSSx1REFBQTtFQUNBLHdMQUFBO0FBWFI7QUFhUTtFQUNJLDhEQUFBO0FBWFo7QUFhWTtFQUNJLG9EQUFBO0FBWGhCO0FBZVE7RUFDSSw2REFBQTtBQWJaO0FBZVk7RUFDSSxtREFBQTtBQWJoQjs7QUFISTtFQUNJLHVEQUFBO0VBQ0Esd0xBQUE7QUFNUjtBQUpRO0VBQ0ksOERBQUE7QUFNWjtBQUpZO0VBQ0ksb0RBQUE7QUFNaEI7QUFGUTtFQUNJLDZEQUFBO0FBSVo7QUFGWTtFQUNJLG1EQUFBO0FBSWhCOztBQXBCSTtFQUNJLHVEQUFBO0VBQ0Esd0xBQUE7QUF1QlI7QUFyQlE7RUFDSSw4REFBQTtBQXVCWjtBQXJCWTtFQUNJLG9EQUFBO0FBdUJoQjtBQW5CUTtFQUNJLDZEQUFBO0FBcUJaO0FBbkJZO0VBQ0ksbURBQUE7QUFxQmhCOztBQXJDSTtFQUNJLHVEQUFBO0VBQ0Esd0xBQUE7QUF3Q1I7QUF0Q1E7RUFDSSw4REFBQTtBQXdDWjtBQXRDWTtFQUNJLG9EQUFBO0FBd0NoQjtBQXBDUTtFQUNJLDZEQUFBO0FBc0NaO0FBcENZO0VBQ0ksbURBQUE7QUFzQ2hCOztBQXRESTtFQUNJLHVEQUFBO0VBQ0Esd0xBQUE7QUF5RFI7QUF2RFE7RUFDSSw4REFBQTtBQXlEWjtBQXZEWTtFQUNJLG9EQUFBO0FBeURoQjtBQXJEUTtFQUNJLDZEQUFBO0FBdURaO0FBckRZO0VBQ0ksbURBQUE7QUF1RGhCOztBQXZFSTtFQUNJLHVEQUFBO0VBQ0Esd0xBQUE7QUEwRVI7QUF4RVE7RUFDSSw4REFBQTtBQTBFWjtBQXhFWTtFQUNJLG9EQUFBO0FBMEVoQjtBQXRFUTtFQUNJLDZEQUFBO0FBd0VaO0FBdEVZO0VBQ0ksbURBQUE7QUF3RWhCOztBQWxFQTs7O0VBR0ksbUJBQUE7QUFxRUo7O0FBbEVBO0VBQ0ksVUFBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSx5Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esd0NBQUE7QUFxRUo7O0FBbEVBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXFFSjs7QUFsRUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBcUVKOztBQWxFQTtFQUNJLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBcUVKOztBQWxFQTtFQUNJLGdCQUFBO0FBcUVKOztBQWxFQTtFQUNJLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFBQSxvQkFBQTtFQUFBLHVCQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7QUFxRUo7O0FBbEVBLGdEQUFBO0FBRUk7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1zaWRlbmF2LWl0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogcmdiKHZhcigtLXZleC1jb2xvci1wcmltYXJ5LTYwMCkvMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLW1pbi1oZWlnaHQpO1xuICAgIHBhZGRpbmc6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy12ZXJ0aWNhbCkgdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZm9udC13ZWlnaHQpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcblxuICAgICYudmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKHZhcigtLXZleC1jb2xvci1wcmltYXJ5LTYwMCkvMSk7XG5cbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICB9XG5cbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHJnYih2YXIoLS12ZXgtY29sb3ItcHJpbWFyeS02MDApLzEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKHZhcigtLXZleC1jb2xvci1wcmltYXJ5LTYwMCkvMSk7XG5cbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICB9XG5cbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHJnYih2YXIoLS12ZXgtY29sb3ItcHJpbWFyeS02MDApLzEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnZleC1zaWRlbmF2LWl0ZW0tLW9wZW4ge1xuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcbiAgICA6aG9zdCguaXRlbS1sZXZlbC0jeyRpfSkgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArICh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAjeyRpIC0gMX0pKTtcblxuICAgICAgICAmLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtYWN0aXZlKTtcblxuICAgICAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xuXG4gICAgICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24sXG4udmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwsXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gICAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gICAgZm9udC1zaXplOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xuICAgIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gICAgZmxleDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XG4gICAgZmxleDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIEBhcHBseSBtcy0yO1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIEBhcHBseSBtcy0yO1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1zdWJoZWFkaW5nLWNvbG9yKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBAYXBwbHkgdGV4dC14cyBweS0zIHB4LTYgbXQtNjtcbn1cblxuLyoqIElmIGZpcnN0IGl0ZW0gaXMgc3ViaGVhZGluZywgcmVtb3ZlIG1hcmdpbiAqL1xuOmhvc3QoOmZpcnN0LWNoaWxkKSAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyB7XG4gICAgQGFwcGx5IC1tdC0zO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_vex_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__.dropdownAnimation]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3686:
/*!*********************************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav-user-menu/sidenav-user-menu.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavUserMenuComponent: () => (/* binding */ SidenavUserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 1538);







const _c0 = () => ["/apps/social"];
const _c1 = () => ["/"];
const _c2 = () => ["/apps/social/timeline"];
const _c3 = () => ["/login"];
class SidenavUserMenuComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
  }
  ngOnInit() {}
  close() {
    /** Wait for animation to complete and then close */
    setTimeout(() => this.popoverRef.close(), 250);
  }
  static {
    this.ɵfac = function SidenavUserMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidenavUserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SidenavUserMenuComponent,
      selectors: [["vex-sidenav-user-menu"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 8,
      consts: [[1, "vex-user-menu"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item", 3, "click", "routerLink"], ["svgIcon", "mat:account_circle", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__label"], ["svgIcon", "mat:insights", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__badge"], ["svgIcon", "mat:settings", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "border-b", "border-divider", "mx-4"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item"], ["svgIcon", "mat:switch_account", 1, "vex-user-menu-item__icon", "icon-sm"], ["svgIcon", "mat:chevron_right", 1, "vex-user-menu-item__icon", "icon-sm"], ["svgIcon", "mat:logout", 1, "vex-user-menu-item__icon", "icon-sm"]],
      template: function SidenavUserMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_1_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_5_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "NEW");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_11_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Account Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Switch Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_21_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sign Out");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
      styles: [".vex-user-menu[_ngcontent-%COMP%] {\n\n    border-radius: var(--vex-border-radius);\n\n    border-width: 1px;\n\n    border-color: var(--vex-foreground-divider);\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(var(--vex-background-card-rgb) / var(--tw-bg-opacity));\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%] {\n\n    position: relative;\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    display: flex;\n\n    height: 2.5rem;\n\n    cursor: pointer;\n\n    -webkit-user-select: none;\n\n            user-select: none;\n\n    align-items: center;\n\n    gap: 1rem;\n\n    border-radius: var(--vex-border-radius);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%]:hover {\n\n    background-color: rgb(var(--vex-color-primary-600) / 0.1)\n}\n.vex-user-menu-item[_ngcontent-%COMP%]:hover   .vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__label[_ngcontent-%COMP%] {\n\n    flex: 1 1 auto;\n\n    font-weight: 500;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item__badge[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    border-radius: var(--vex-border-radius);\n\n    background-color: rgb(var(--vex-color-primary-600) / 0.1);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.25rem;\n\n    padding-bottom: 0.25rem;\n\n    font-size: 0.625rem;\n\n    font-weight: 600;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi11c2VyLW1lbnUvc2lkZW5hdi11c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsdUNBQUE7O0lBQUEsaUJBQUE7O0lBQUEsMkNBQUE7O0lBQUEsa0JBQUE7O0lBQUEsNEVBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsK0VBQUE7O0lBQUEsbUdBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxhQUFBOztJQUFBLGNBQUE7O0lBQUEsZUFBQTs7SUFBQSx5QkFBQTs7WUFBQSxpQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxTQUFBOztJQUFBLHVDQUFBOztJQUFBLG9CQUFBOztJQUFBLHFCQUFBOztJQUFBLG1CQUFBOztJQUFBLHNCQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTtBQUlROztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBTVI7O0lBQUEsY0FBQTs7SUFBQSxnQkFBQTs7SUFBQSxnS0FBQTs7SUFBQSx3SkFBQTs7SUFBQSxpTEFBQTs7SUFBQSx3REFBQTs7SUFBQSwwQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFVBQUE7O0lBQUEsdUNBQUE7O0lBQUEseURBQUE7O0lBQUEsb0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsdUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxVQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXVzZXItbWVudSB7XG4gICAgQGFwcGx5IGJnLWZvcmVncm91bmQgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZGl2aWRlciByb3VuZGVkIHB5LTI7XG59XG5cbi52ZXgtdXNlci1tZW51LWl0ZW0ge1xuICAgIEBhcHBseSByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBweC0yIG14LTIgcHktMiByb3VuZGVkIGhvdmVyOmJnLXByaW1hcnktNjAwLzEwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2Utb3V0IHNlbGVjdC1ub25lIGgtMTA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnZleC11c2VyLW1lbnUtaXRlbV9faWNvbiB7XG4gICAgICAgICAgICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZleC11c2VyLW1lbnUtaXRlbV9fbGFiZWwge1xuICAgIEBhcHBseSBmbGV4LWF1dG8gZm9udC1tZWRpdW0gdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtdXNlci1tZW51LWl0ZW1fX2JhZGdlIHtcbiAgICBAYXBwbHkgcHgtMiBweS0xIHJvdW5kZWQgYmctcHJpbWFyeS02MDAvMTAgdGV4dC1wcmltYXJ5LTYwMCB0ZXh0LTJ4cyBmb250LXNlbWlib2xkIGZsZXgtbm9uZTtcbn1cblxuLnZleC11c2VyLW1lbnUtaXRlbV9faWNvbiB7XG4gICAgQGFwcGx5IGZsZXgtbm9uZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCBlYXNlLW91dDtcbn1cblxuLnZleC11c2VyLW1lbnUtaXRlbV9fZHJvcGRvd24taWNvbiB7fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8881:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _sidenav_user_menu_sidenav_user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-user-menu/sidenav-user-menu.component */ 3686);
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-modal/search-modal.component */ 7332);
/* harmony import */ var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.component */ 2800);
/* harmony import */ var _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-scrollbar/vex-scrollbar.component */ 9183);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 7804);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/config/vex-config.service */ 5298);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 2587);



















function SidenavComponent_button_9_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 18);
  }
}
function SidenavComponent_button_9_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 19);
  }
}
function SidenavComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SidenavComponent_button_9_mat_icon_1_Template, 1, 0, "mat-icon", 16)(2, SidenavComponent_button_9_mat_icon_2_Template, 1, 0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.collapsed);
  }
}
function SidenavComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Quick Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Ctrl K");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function SidenavComponent_vex_sidenav_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "vex-sidenav-item", 25);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r4)("level", 0);
  }
}
function SidenavComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26)(1, "div", 27, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_div_21_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const userProfileMenuOriginRef_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openProfileMenu(userProfileMenuOriginRef_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 29)(6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "David Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Product Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("vex-sidenav-user--open", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r1.userMenuOpen$));
  }
}
class SidenavComponent {
  constructor(navigationService, layoutService, configService, popoverService, dialog) {
    this.navigationService = navigationService;
    this.layoutService = layoutService;
    this.configService = configService;
    this.popoverService = popoverService;
    this.dialog = dialog;
    this.collapsed = false;
    this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
    this.title$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.title));
    this.imageUrl$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.imageUrl));
    this.showCollapsePin$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.showCollapsePin));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.user.visible));
    this.searchVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.search.visible));
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false);
    this.items$ = this.navigationService.items$;
  }
  ngOnInit() {}
  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }
  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }
  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  trackByRoute(index, item) {
    if (item.type === 'link') {
      return item.route;
    }
    return item.label;
  }
  openProfileMenu(origin) {
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.popoverService.open({
      content: _sidenav_user_menu_sidenav_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.SidenavUserMenuComponent,
      origin,
      offsetY: -8,
      width: origin.clientWidth,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(true));
  }
  openSearch() {
    this.dialog.open(_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__.SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }
  static {
    this.ɵfac = function SidenavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_5__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_6__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["vex-sidenav"]],
      inputs: {
        collapsed: "collapsed"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 28,
      consts: [["userProfileMenuOriginRef", ""], [1, "vex-sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "vex-sidenav-toolbar__container"], [1, "sidenav-toolbar", "flex", "flex-col", "items-center", "justify-center"], ["alt", "Logo", 1, "w-8", "select-none", "mb-2", 3, "src"], [1, "vex-sidenav-toolbar__headline", "text-blue-700", "font-sm", "text-center"], ["class", "vex-sidenav-toolbar__collapse-toggle mt-2 leading-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], ["class", "vex-sidenav-search__container", 4, "ngIf"], [1, "vex-sidenav-toolbar__divider"], [1, "flex-1", "flex", "flex-col"], [1, "pt-6", "flex-1"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "vex-sidenav-footer", "flex", "items-center", "justify-center", "opacity-20", "px-6", "py-6", "select-none", "flex-none"], ["alt", "Logo", 1, "w-8", "select-none", 3, "src"], ["class", "vex-sidenav-user__container flex-none", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "vex-sidenav-toolbar__collapse-toggle", "mt-2", "leading-none", "hidden", "lg:block", 3, "click"], ["class", "icon-xs", "svgIcon", "mat:radio_button_checked", 4, "ngIf"], ["class", "icon-xs", "svgIcon", "mat:radio_button_unchecked", 4, "ngIf"], ["svgIcon", "mat:radio_button_checked", 1, "icon-xs"], ["svgIcon", "mat:radio_button_unchecked", 1, "icon-xs"], [1, "vex-sidenav-search__container"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-search", "relative", 3, "click"], ["svgIcon", "mat:search", 1, "flex-none", "vex-sidenav-search__icon"], [1, "flex-auto", "vex-sidenav-search__placeholder"], [1, "flex-none", "vex-sidenav-search__keybind"], [3, "item", "level"], [1, "vex-sidenav-user__container", "flex-none"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-user", "flex", "items-center", 3, "click"], ["alt", "User Avatar", "src", "../../../../assets/img/avatars/1.jpg", 1, "vex-sidenav-user__image", "flex-none"], [1, "vex-sidenav-user__content", "flex-auto"], [1, "vex-sidenav-user__title"], [1, "vex-sidenav-user__subtitle"], ["svgIcon", "mat:arrow_drop_down", 1, "vex-sidenav-user__dropdown-icon", "flex-none"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() {
            return ctx.collapseOpenSidenav();
          })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() {
            return ctx.collapseCloseSidenav();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SidenavComponent_button_9_Template, 3, 2, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SidenavComponent_div_11_Template, 7, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "vex-scrollbar", 9)(15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SidenavComponent_vex_sidenav_item_16_Template, 1, 2, "vex-sidenav-item", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SidenavComponent_div_21_Template, 11, 4, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", ctx.collapsed && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 12, ctx.collapsedOpen$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 14, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 16, ctx.title$), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 18, ctx.showCollapsePin$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 20, ctx.searchVisible$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 22, ctx.items$))("ngForTrackBy", ctx.trackByRoute);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 24, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 26, ctx.userVisible$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRipple, _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_3__.VexScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgFor, _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__.SidenavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
      styles: [".vex-sidenav[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-background);\n  color: var(--vex-sidenav-color);\n  height: 100%;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: var(--vex-sidenav-width);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-collapsed-width);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__headline[_ngcontent-%COMP%], \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  opacity: 0;\n  padding-inline-start: var(--vex-sidenav-item-padding-horizontal);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__icon {\n  margin-inline-end: var(--vex-sidenav-item-padding-horizontal);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-subheading, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__badge, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__label, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__title, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__subtitle, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__dropdown-icon, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__placeholder, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__keybind {\n  opacity: 0;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user {\n  padding-right: 0.625rem;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-subheading, \n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__label {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-width);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%]   .vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav[_ngcontent-%COMP%]     .simplebar-track.simplebar-horizontal {\n  visibility: hidden !important;\n}\n\n\n\n.vex-sidenav-toolbar__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-background);\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--vex-sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: var(--vex-toolbar-height);\n  white-space: nowrap;\n  width: 100%;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.vex-sidenav-toolbar__headline[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  letter-spacing: 0.025em;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.vex-sidenav-toolbar__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--vex-sidenav-section-divider-color);\n}\n\n\n\n.vex-sidenav-user__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-toolbar-background);\n  border-color: var(--vex-sidenav-section-divider-color);\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-width: 1px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--vex-border-radius);\n  padding: 0.375rem;\n  padding-top: 0.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.vex-sidenav-user__image[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.25rem;\n  width: 2.25rem;\n  border-radius: 9999px;\n}\n\n.vex-sidenav-user__content[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n}\n\n.vex-sidenav-user__title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__subtitle[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__dropdown-icon[_ngcontent-%COMP%] {\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user--open[_ngcontent-%COMP%] {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n\n\n.vex-sidenav-search__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-toolbar-background);\n  z-index: 10;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n  border-radius: var(--vex-border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding: 0.25rem;\n  padding-left: 0.75rem;\n  color: rgb(255 255 255 / 0.3);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.2);\n  color: rgb(255 255 255 / 0.6);\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%], .vex-sidenav-search__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-item-icon-size);\n}\n\n.vex-sidenav-search__placeholder[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  margin-left: var(--vex-sidenav-item-icon-gap);\n}\n\n.vex-sidenav-search__keybind[_ngcontent-%COMP%] {\n  border-radius: var(--vex-border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7RUFDQSwrQkFBQTtBQUNKO0FBQ0k7RUFDSSx5Q0FBQTtBQUNSO0FBR1k7O0VBRUksVUFBQTtFQUNBLGdFQUFBO0FBRGhCO0FBS2dCO0VBQ0ksNkRBQUE7QUFIcEI7QUFNZ0I7Ozs7Ozs7O0VBUUksVUFBQTtBQUpwQjtBQVFvQjtFQUFBO0FBQUE7QUFHSjtFQUNJLDZCQUFBO0FBTnBCO0FBZWdCOztFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7QUFJQTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7QUFJUjtFQUNJLCtCQUFBO0FBZFo7QUFpQmdCO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUtJO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQU9aO0VBQ0ksNkJBQUE7QUFyQlo7O0FBMEJBLHFCQUFBO0FBQ0E7RUFDSSx5Q0FBQTtFQUVBLGdCQUFBO0VBQUEsUUFBQTtFQUFBLFdBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksbUJBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtBQXhCSjs7QUE0Qkk7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsdUJBQUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUtBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFHSjtFQUNJLFdBQUE7RUFDQSxvREFBQTtBQXpCSjs7QUE0QkEsc0JBQUE7QUFDQTtFQUNJLGlEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7QUExQko7O0FBOEJJO0VBQUEsa0JBQUE7RUFBQSxlQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLHVDQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsY0FBQTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSw2QkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsNkJBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBO0FBQUE7O0FBR0osd0JBQUE7QUFDQTtFQUNJLGlEQUFBO0VBQ0EsV0FBQTtFQUFBLHFCQUFBO0VBQUEsc0JBQUE7RUFBQSx1QkFBQTtBQTFCSjs7QUE4Qkk7RUFBQSxhQUFBO0VBQUEsZUFBQTtFQUFBLHlCQUFBO1VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLHVDQUFBO0VBQUEsd0NBQUE7RUFBQSxnQkFBQTtFQUFBLHFCQUFBO0VBQUEsNkJBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLHdDQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEsZUFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBOztBQURKO0VBRUksd0NBQUE7QUExQko7O0FBOEJJO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsZ0JBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsc0RBQUE7RUFDQTtBQURBOztBQUtBO0VBQUEsdUNBQUE7RUFBQSx3Q0FBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLHVCQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1zaWRlbmF2IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtY29sb3IpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICAgIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi13aWR0aCk7XG5cbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGgpO1xuXG4gICAgICAgICY6bm90KC5vcGVuKSB7XG5cbiAgICAgICAgICAgIC52ZXgtc2lkZW5hdi10b29sYmFyX19oZWFkbGluZSxcbiAgICAgICAgICAgIC52ZXgtc2lkZW5hdi10b29sYmFyX19jb2xsYXBzZS10b2dnbGUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcsXG4gICAgICAgICAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlLFxuICAgICAgICAgICAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCxcbiAgICAgICAgICAgICAgICAudmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUsXG4gICAgICAgICAgICAgICAgLnZleC1zaWRlbmF2LXVzZXJfX3N1YnRpdGxlLFxuICAgICAgICAgICAgICAgIC52ZXgtc2lkZW5hdi11c2VyX19kcm9wZG93bi1pY29uLFxuICAgICAgICAgICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC52ZXgtc2lkZW5hdi11c2VyIHtcbiAgICAgICAgICAgICAgICAgICAgQGFwcGx5IHByLTIuNTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCB7XG5cbiAgICAgICAgICAgIC52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nLFxuICAgICAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgICAgICAgICAgICAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xuICAgICAgICAgICAgICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1vdXQtc3dpZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLXZleC1zaWRlbmF2LXdpZHRoKTtcblxuICAgICAgICAgICAgLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbGxhcHNlLXRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xuICAgICAgICAgICAgICAgICAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLWhvcml6b250YWwge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKiBTSURFTkFWIFRPT0xCQVIgKi9cbi52ZXgtc2lkZW5hdi10b29sYmFyX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWJhY2tncm91bmQpO1xuXG4gICAgQGFwcGx5IHN0aWNreSB0b3AtMCB6LTEwO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiB2YXIoLS12ZXgtdG9vbGJhci1oZWlnaHQpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGFwcGx5IHB5LTAgcHgtNjtcbn1cblxuLnZleC1zaWRlbmF2LXRvb2xiYXJfX2hlYWRsaW5lIHtcbiAgICBAYXBwbHkgdGV4dC1sZyBmb250LWJvbGQgdHJhY2tpbmctd2lkZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG4gICAgLy8gcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xufVxuXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fY29sbGFwc2UtdG9nZ2xlIHtcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2Utb3V0LXN3aWZ0O1xufVxuXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcbn1cblxuLyoqIFZFWCBTSURFTkFWIFVTRVIgKi9cbi52ZXgtc2lkZW5hdi11c2VyX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1zZWN0aW9uLWRpdmlkZXItY29sb3IpO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICBAYXBwbHkgYm9yZGVyLXQgcHgtMiBweS0zO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlciB7XG4gICAgQGFwcGx5IHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCByb3VuZGVkIGhvdmVyOmJnLXdoaXRlLzEwIHNlbGVjdC1ub25lIGN1cnNvci1wb2ludGVyIHAtMS41IHB0LTI7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19pbWFnZSB7XG4gICAgQGFwcGx5IHctOSBoLTkgYmxvY2sgcm91bmRlZC1mdWxsO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9fY29udGVudCB7XG4gICAgQGFwcGx5IHBsLTM7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX190aXRsZSB7XG4gICAgQGFwcGx5IHRleHQtc20gZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19zdWJ0aXRsZSB7XG4gICAgQGFwcGx5IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZS81MCB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX2Ryb3Bkb3duLWljb24ge1xuICAgIEBhcHBseSB0ZXh0LXdoaXRlLzUwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufVxuXG4udmV4LXNpZGVuYXYtdXNlci0tb3BlbiB7XG4gICAgQGFwcGx5IGJnLXdoaXRlLzEwO1xufVxuXG4vKiogVkVYIFNJREVOQVYgU0VBUkNIICovXG4udmV4LXNpZGVuYXYtc2VhcmNoX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gICAgQGFwcGx5IHB4LTMgcGItMyB6LTEwO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoIHtcbiAgICBAYXBwbHkgcm91bmRlZCBiZy13aGl0ZS8xMCB0ZXh0LXdoaXRlLzMwIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnRleHQtd2hpdGUvNjAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgZmxleCBpdGVtcy1jZW50ZXIgc2VsZWN0LW5vbmUgcC0xIHBsLTM7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2ljb24ge1xuICAgIEBhcHBseSBpY29uLXNtO1xuICAgIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyIHtcbiAgICBAYXBwbHkgdGV4dC14cyBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xuICAgIEBhcHBseSBiZy13aGl0ZS8xMCByb3VuZGVkIHRleHQtMnhzIHB4LTIgcHktMSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7533:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/mega-menu/mega-menu.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MegaMenuComponent: () => (/* binding */ MegaMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 1538);








function MegaMenuComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", feature_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", feature_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r3.label);
  }
}
function MegaMenuComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_19_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", page_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r5.label);
  }
}
class MegaMenuComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.features = [{
      icon: 'mat:layers',
      label: 'Dashboard',
      route: '/'
    }, {
      icon: 'mat:assignment',
      label: 'AIO-Table',
      route: '/apps/aio-table'
    }, {
      icon: 'mat:contact_support',
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      icon: 'mat:contacts',
      label: 'Contacts',
      route: '/apps/contacts/grid'
    }, {
      icon: 'mat:assessment',
      label: 'Scrumboard',
      route: '/apps/scrumboard/1'
    }, {
      icon: 'mat:book',
      label: 'Documentation',
      route: '/documentation'
    }];
    this.pages = [{
      label: 'All-In-One Table',
      route: '/apps/aio-table'
    }, {
      label: 'Authentication',
      route: '/login'
    }, {
      label: 'Components',
      route: '/ui/components/overview'
    }, {
      label: 'Documentation',
      route: '/documentation'
    }, {
      label: 'FAQ',
      route: '/pages/faq'
    }, {
      label: 'Form Elements',
      route: '/ui/forms/form-elements'
    }, {
      label: 'Form Wizard',
      route: '/ui/forms/form-wizard'
    }, {
      label: 'Guides',
      route: '/pages/guides'
    }, {
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      label: 'Scrumboard',
      route: '/apps/scrumboard'
    }];
  }
  ngOnInit() {}
  close() {
    this.popoverRef.close();
  }
  static {
    this.ɵfac = function MegaMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MegaMenuComponent,
      selectors: [["vex-mega-menu"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 2,
      consts: [[1, "card", "overflow-auto", "flex", "flex-col", "md:flex-row", "sm:mr-6"], [1, "bg-primary-600/10", "p-6", "flex-auto", "max-w-[300px]"], [1, "headline", "mb-4", "text-primary-600"], [1, "caption"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "mt-4", "w-full"], [1, "p-6", "flex-auto", "max-w-[400px]"], [1, "body-2", "m-0"], [1, "mt-4", "grid", "grid-cols-3"], ["class", "text-dark p-3 text-center hover:bg-primary-600/10 hover:text-primary-600 transition duration-400 ease-out-swift rounded block no-underline", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "p-6", "flex-auto", "max-w-[350px]"], [1, "mt-6", "grid", "grid-cols-2", "gap-x-12", "gap-y-4"], ["class", "text-dark body-1 no-underline hover:text-primary-600 transition duration-400 ease-out-swift", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "text-dark", "p-3", "text-center", "hover:bg-primary-600/10", "hover:text-primary-600", "transition", "duration-400", "ease-out-swift", "rounded", "block", "no-underline", 3, "click", "routerLink"], ["color", "primary", 1, "icon-xl", 3, "svgIcon"], [1, "body-2", "mt-2"], [1, "text-dark", "body-1", "no-underline", "hover:text-primary-600", "transition", "duration-400", "ease-out-swift", 3, "click", "routerLink"]],
      template: function MegaMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mega Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Learn More ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MegaMenuComponent_a_14_Template, 4, 3, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MegaMenuComponent_a_19_Template, 2, 2, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1331:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/search/search.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ 1883);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-loading-bar/core */ 5545);
/* harmony import */ var src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-service.service */ 9054);
/* harmony import */ var src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/access-info.service */ 6411);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var src_app_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/splash-screen.service */ 2044);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);





















const _c0 = ["searchInput"];
function SearchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class SearchComponent {
  constructor(layoutService, searchService, store, loader, webService, accessInfo, appFunction, splashScreenService, router) {
    this.layoutService = layoutService;
    this.searchService = searchService;
    this.store = store;
    this.loader = loader;
    this.webService = webService;
    this.accessInfo = accessInfo;
    this.appFunction = appFunction;
    this.splashScreenService = splashScreenService;
    this.router = router;
    this.show$ = this.layoutService.searchOpen$;
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl();
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
  }
  ngOnInit() {
    this.searchService.isOpenSubject.next(true);
    this.searchCtrl.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => this.searchService.valueChangesSubject.next(value));
    this.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(show => show), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.input?.nativeElement.focus());
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  close() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  search() {
    this.searchService.submitSubject.next(this.searchCtrl.value);
    const request = {
      accessInfo: this.accessInfo.getAll(),
      keyword: this.searchCtrl.value
    };
    this.webService.callWs('fullsearch', request).pipe().subscribe({
      next: data => {
        if (data && data.listSearchResult) {
          this.searchService.setSearchResult(data.listSearchResult);
          this.router.navigate(["/search-result"]);
          this.close();
        }
      },
      error: error => {
        this.close();
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  ngOnDestroy() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("search").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  static {
    this.ɵfac = function SearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_12__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_3__.WebServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_4__.AccessInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_5__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__.SplashScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["vex-search"]],
      viewQuery: function SearchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 10,
      consts: [["searchInput", ""], [1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], ["svgIcon", "mat:close"], [1, "search-input", 3, "keyup.enter", "formControl", "placeholder"], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.search());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 6, ctx.show$));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.listFormItemNm[2]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.searchCtrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.listFormItemNm[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 8, ctx.show$));
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
      styles: [".search[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0px;\n  border-radius: 0px;\n  border-bottom-width: 1px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-top-width: 0px;\n  background-color: transparent;\n  font-weight: 700;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: right;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-hint-text-rgb) / var(--tw-text-opacity));\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFBLGVBQUE7RUFBQSxRQUFBO0VBQUEsU0FBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFBQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtFQUNBO0FBTEE7QUFPQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFDUjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtFQUFBLHVCQUFBO0VBQUEsc0JBQUE7RUFBQSxxQkFBQTtFQUFBLDZCQUFBO0VBQUEsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtBQUFSOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0VBQUEsaUJBQUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsd0VBQUE7QUFESjs7QUFLSTtFQUFBLGVBQUE7RUFBQSxXQUFBO0VBQUEsU0FBQTtFQUFBLFdBQUE7RUFBQSxVQUFBO0VBQ0E7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIG9wYWNpdHktMDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgICB6LWluZGV4OiAxMDUwO1xuXG4gICAgJi5zaG93IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gICAgfVxufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgICBmb250LXNpemU6IDd2dztcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogNzUlO1xuICAgIEBhcHBseSBib3JkZXItYiBtLTAgcm91bmRlZC1ub25lIGJvcmRlci1yLTAgYm9yZGVyLWwtMCBib3JkZXItdC0wIGZvbnQtYm9sZCBiZy10cmFuc3BhcmVudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cblxuLnNlYXJjaC1oaW50IHtcbiAgICB3aWR0aDogNzUlO1xuICAgIEBhcHBseSB0ZXh0LWJhc2UgdGV4dC1yaWdodCBweS00IG14LWF1dG8gdGV4dC1oaW50IGZvbnQtYm9sZDtcbn1cblxuLnNlYXJjaC1vdmVybGF5IHtcbiAgICBAYXBwbHkgZml4ZWQgdy1mdWxsIGJvdHRvbS0wIGxlZnQtMCBvcGFjaXR5LTA7XG4gICAgaGVpZ2h0OiA1MHZoO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1883:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/search/search.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchService: () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);


class SearchService {
  // Hàm để set thông tin search result
  setSearchResult(searchResult) {
    if (!Array.isArray(searchResult)) {
      console.warn('searchResult should be an array, resetting to an empty array');
      this.searchResultSubject.next([]);
    } else {
      this.searchResultSubject.next(searchResult);
    }
  }
  // Hàm để get thông tin search result
  getSearchResult() {
    return this.searchResultSubject.value; // Lấy giá trị hiện tại từ BehaviorSubject
  }
  constructor() {
    this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.valueChanges$ = this.valueChangesSubject.asObservable();
    this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.submit$ = this.submitSubject.asObservable();
    this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isOpen$ = this.isOpenSubject.asObservable();
    // BehaviorSubject để lưu search results
    this.searchResultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]); // Default là mảng rỗng
    this.searchResult$ = this.searchResultSubject.asObservable(); // Observable để lắng nghe thay đổi
  }
  static {
    this.ɵfac = function SearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3061:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega-menu/mega-menu.component */ 7533);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/check-router-childs-data */ 5745);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var src_app_state_language_language_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state/language/language.actions */ 9663);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/config/vex-config.service */ 5298);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 7804);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 1707);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/access-info.service */ 6411);





















class ToolbarComponent {
  constructor(layoutService, configService, navigationService, popoverService, store, router, appFunctionService, accessInfo) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.navigationService = navigationService;
    this.popoverService = popoverService;
    this.store = store;
    this.router = router;
    this.appFunctionService = appFunctionService;
    this.accessInfo = accessInfo;
    this.showShadow = false;
    this.navigationItems$ = this.navigationService.items$;
    this.currentLanguage = "";
    this.isHorizontalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.layout === 'horizontal'));
    this.isVerticalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.layout === 'vertical'));
    this.isNavbarInToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.navbar.position === 'in-toolbar'));
    this.isNavbarBelowToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.navbar.position === 'below-toolbar'));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.toolbar.user.visible));
    this.title$ = this.configService.select(config => config.sidenav.title);
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.isMobile$ = this.layoutService.isMobile$;
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(null), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => {
      this.showShadow = (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_1__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled ?? false);
    });
    // language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.onLanguageMenuChange(language);
      this.currentLanguage = language;
    });
  }
  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }
  openSidenav() {
    this.layoutService.openSidenav();
  }
  openMegaMenu(origin) {
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.popoverService.open({
      content: _mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent,
      origin,
      offsetY: 12,
      position: [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(true));
  }
  openSearch() {
    this.layoutService.openSearch();
  }
  onLanguageMenuChange(language) {
    this.accessInfo.language = language;
    this.currentLanguage = language;
    this.store.dispatch((0,src_app_state_language_language_actions__WEBPACK_IMPORTED_MODULE_3__.setLanguage)({
      language
    }));
    // reload menu
    this.appFunctionService.reloadListFunction(this.currentLanguage);
  }
  static {
    this.ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_5__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_8__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_9__.AccessInfoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["vex-toolbar"]],
      hostVars: 2,
      hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("shadow-b", ctx.showShadow);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function ToolbarComponent_Template(rf, ctx) {},
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8058:
/*!****************************************************!*\
  !*** ./src/app/layouts/layout/layout.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _vex_components_vex_sidebar_vex_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-sidebar/vex-sidebar.component */ 6743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidenav/sidenav.component */ 8881);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toolbar/toolbar.component */ 3061);
/* harmony import */ var _components_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/quickpanel/quickpanel.component */ 7661);
/* harmony import */ var _components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/config-panel/config-panel-toggle/config-panel-toggle.component */ 8031);
/* harmony import */ var _components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/config-panel/config-panel.component */ 7297);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base-layout/base-layout.component */ 4912);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _components_toolbar_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/toolbar/search/search.component */ 1331);
/* harmony import */ var _vex_components_vex_progress_bar_vex_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vex/components/vex-progress-bar/vex-progress-bar.component */ 851);
/* harmony import */ var _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vex/config/vex-config.interface */ 7586);
/* harmony import */ var src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/state/language/language.selectors */ 7273);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4716);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vex/config/vex-config.service */ 5298);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/web-service.service */ 9054);
/* harmony import */ var src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/access-info.service */ 6411);
/* harmony import */ var src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/app-function.service */ 40);
/* harmony import */ var src_app_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/splash-screen.service */ 2044);





























const _c0 = ["customScrollContainer"];
function LayoutComponent_vex_base_layout_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "vex-base-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "vex-progress-bar")(2, "vex-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "mat-sidenav-container", 2)(4, "mat-sidenav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("closedStart", function LayoutComponent_vex_base_layout_0_Template_mat_sidenav_closedStart_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.onSidenavClosed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "vex-sidenav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "mat-sidenav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("closedStart", function LayoutComponent_vex_base_layout_0_Template_mat_sidenav_closedStart_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.onQuickpanelClosed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "vex-quickpanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "mat-sidenav-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "vex-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "main", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "footer", 10)(20, "div", 11)(21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, " \u65E5\u672C\u4FE1\u767A\u56FD\u969B\u682A\u5F0F\u4F1A\u793E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, " TINPHAT GROUP \u65E5\u672C\u652F\u793E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 15)(28, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, " \u9023\u7D61\u5148");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](34, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 20)(36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](37, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38, " Japan Office ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 23)(40, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](41, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43, "\u3012116-0013\u3000\u6771\u4EAC\u90FD\u8352\u5DDD\u533A\u897F\u65E5\u66AE\u91CC\uFF15\uFF0D\uFF12\uFF0D\uFF11\uFF19\u3000\u30EA\u30EC\u30F3\u30C8\u7B2C\uFF12\u897F\u65E5\u66AE\u91CC\uFF12F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](45, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47, "TEL: 03-5850-5775");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49, "FAX: 03-5850-5776");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](51, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](53, "info@vijp.jp");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](56, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](58, " \u00A0https://www.facebook.com/TinPhatNhatBan.VIJP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](60, "iframe", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "div", 33)(62, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LayoutComponent_vex_base_layout_0_Template_a_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.scrollToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](63, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LayoutComponent_vex_base_layout_0_Template_a_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.scrollToAbout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](65, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LayoutComponent_vex_base_layout_0_Template_a_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.scrollToServices());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](68, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LayoutComponent_vex_base_layout_0_Template_a_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.scrollToContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](71, " \u00A9 2025 VIJP \u2013 All rights reserved. | Designed by VIJP Co., Ltd. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "vex-config-panel-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("openConfig", function LayoutComponent_vex_base_layout_0_Template_vex_config_panel_toggle_openConfig_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const configpanel_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](74);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](configpanel_r3.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "vex-sidebar", 37, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](75, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](76, "vex-config-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disableClose", !!_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 8, ctx_r1.sidenavDisableClose$))("fixedInViewport", !!_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 10, ctx_r1.sidenavFixedInViewport$))("mode", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 12, ctx_r1.sidenavMode$)) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "side")("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 14, ctx_r1.sidenavOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("collapsed", !!_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 16, ctx_r1.sidenavCollapsed$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 18, ctx_r1.quickpanelOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("invisibleBackdrop", true)("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](75, 20, ctx_r1.configPanelOpen$));
  }
}
class LayoutComponent {
  constructor(layoutService, configService, router, store, webService, accessInfo, appFunction, splashScreenService) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.router = router;
    this.store = store;
    this.webService = webService;
    this.accessInfo = accessInfo;
    this.appFunction = appFunction;
    this.splashScreenService = splashScreenService;
    this.config$ = this.configService.config$;
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.sidenavDisableClose$ = this.layoutService.isDesktop$;
    this.sidenavFixedInViewport$ = this.layoutService.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(isDesktop => !isDesktop));
    this.sidenavMode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.layoutService.isDesktop$, this.configService.select(config => config.layout)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(([isDesktop, layout]) => !isDesktop || layout === 'vertical' ? 'over' : 'side'));
    this.sidenavOpen$ = this.layoutService.sidenavOpen$;
    this.configPanelOpen$ = this.layoutService.configPanelOpen$;
    this.quickpanelOpen$ = this.layoutService.quickpanelOpen$;
    this.listFormItemNm = [];
    this.formItemNmLoaded = false;
    // k_trong set default themes
    this.configService.setConfig(_vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_9__.VexConfigName.fafo);
  }
  onSidenavClosed() {
    this.layoutService.closeSidenav();
  }
  onQuickpanelClosed() {
    this.layoutService.closeQuickpanel();
  }
  linkToContact() {
    this.router.navigateByUrl("/contact");
  }
  linkToNews() {
    this.router.navigateByUrl("/news");
  }
  linkToAccessMap() {
    this.router.navigate(["/overview"], {
      fragment: 'access-map'
    });
  }
  ngOnInit() {
    // Theo dõi sự thay đổi của language
    this.currentLanguage$ = this.store.select(src_app_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_10__.selectCurrentLanguage);
    this.currentLanguage$.subscribe(language => {
      this.fnGetFormItemNm();
    });
  }
  fnGetFormItemNm() {
    this.formItemNmLoaded = false;
    this.appFunction.getListFormItemNm("layout").subscribe({
      next: listFormItemNm => {
        if (listFormItemNm) {
          this.listFormItemNm = listFormItemNm;
          this.formItemNmLoaded = true;
        } else {
          console.error('Không có dữ liệu nào được trả về từ API.');
        }
      },
      error: error => {
        console.error('Đã xảy ra lỗi khi tải danh sách:', error);
      }
    });
  }
  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToHome() {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToAbout() {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToServices() {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_11__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_12__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_21__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_web_service_service__WEBPACK_IMPORTED_MODULE_13__.WebServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_access_info_service__WEBPACK_IMPORTED_MODULE_14__.AccessInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_app_function_service__WEBPACK_IMPORTED_MODULE_15__.AppFunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_16__.SplashScreenService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["vex-layout"]],
      viewQuery: function LayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.customScrollContainer = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["configpanel", ""], [4, "ngIf"], [1, "vex-layout-sidenav-container"], [3, "closedStart", "disableClose", "fixedInViewport", "mode", "opened"], [3, "collapsed"], ["mode", "over", "position", "end", 1, "vex-layout-quickpanel", 3, "closedStart", "opened"], [1, "vex-layout-sidenav-content"], [1, "vex-toolbar"], [1, "vex-layout-content"], [1, "w-full", "h-[4px]", "bg-gradient-to-r", "from-[#F4A300]", "via-[#E63E11]", "to-[#C8102E]"], [1, "border-t", "border-gray-200", "footer-container", "py-10"], [1, "max-w-7xl", "mx-auto", "px-6", "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "items-center"], [1, "flex", "flex-col", "items-center", "text-center"], ["src", "assets/img/logo/logo.png", "alt", "VIJP Logo", 1, "w-52", "md:w-60", "mb-3", "object-contain", "transition-transform", "duration-300", "hover:scale-105"], [1, "text-red-700", "text-xl", "font-medium", "leading-relaxed"], [1, "text-red-700", "text-sm", "md:text-base", "space-y-3"], [1, "text-red-700", "text-lg", "font-semibold", "mb-3", "flex", "items-start", "gap-2"], ["svgIcon", "mat:contact_mail", 1, "text-[#F4A300]", "mt-1"], [1, "leading-tight"], [1, "text-sm", "text-red-700/80"], [1, "space-y-1"], [1, "flex", "items-center", "gap-2", "font-semibold"], ["svgIcon", "flag:japan", 1, "text-[#F4A300]"], [1, "pl-7", "space-y-1"], [1, "flex", "items-center", "gap-2"], ["svgIcon", "mat:location_on", 1, "text-red-700"], ["svgIcon", "mat:phone", 1, "text-red-700"], ["svgIcon", "mat:mail", 1, "text-red-700"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 640", 1, "w-5", "h-5", "fill-red-700", "opacity-90"], ["d", "M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 \n        376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64\n        C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"], ["href", "https://www.facebook.com/TinPhatNhatBan.VIJP?mibextid=wwXIfr&rdid=wcvRftd9YYXj958x#", "target", "_blank", 1, "hover:text-[#F4A300]", "transition"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "mt-4", "rounded-xl", "overflow-hidden", "shadow-md", "border", "border-[#C8102E]/20"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.649446431!2d139.7725309155369!3d35.74352728019379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d9902e32797%3A0xa09d7dd350db8bef!2z44CSMTE2LTAwMTMg5p2x5Lqs6YO_44GV44Gn44K_44GX5a6u5b2x5paH5bed5Yy654mH44Oe!5e0!3m2!1sja!2sjp!4v1700748512345!5m2!1sja!2sjp`, "width", "100%", "height", "200", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "flex", "flex-wrap", "gap-4", "pt-4"], [1, "hover:underline", "hover:cursor-pointer", "hover:text-blue-700", "text-red-700", 3, "click"], [1, "pt-4", "text-xs", "text-red-700/80"], [3, "openConfig"], ["position", "right", 3, "invisibleBackdrop", "opened"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, LayoutComponent_vex_base_layout_0_Template, 77, 22, "vex-base-layout", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 1, ctx.config$));
        }
      },
      dependencies: [_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__.BaseLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.ToolbarComponent, _components_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_3__.QuickpanelComponent, _components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ConfigPanelToggleComponent, _vex_components_vex_sidebar_vex_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.VexSidebarComponent, _components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterOutlet, _components_toolbar_search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent, _vex_components_vex_progress_bar_vex_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__.VexProgressBarComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon],
      styles: ["footer[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", \"Noto Sans JP\", sans-serif;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.3s ease, background-color 0.3s ease;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 2px 6px rgba(200, 16, 46, 0.3));\n}\nfooter[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  background-color: white;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQUE7QUFDRjtBQUNFO0VBQ0UsdURBQUE7QUFDSjtBQUVFO0VBQ0UscURBQUE7QUFBSjtBQUdFO0VBQ0Usc0JBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsNjVDQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gIGEge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDZweCByZ2JhKDIwMCwgMTYsIDQ2LCAwLjMpKTtcclxuICB9XHJcblxyXG4gIGlmcmFtZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG4uZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2U2ZTZlNicgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTZlNmU2JyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nNScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6411:
/*!*************************************************!*\
  !*** ./src/app/services/access-info.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessInfoService: () => (/* binding */ AccessInfoService)
/* harmony export */ });
/* harmony import */ var _state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/language/language.selectors */ 7273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 1383);



class AccessInfoService {
  constructor(store) {
    this.store = store;
    this._username = null;
    this._token = null;
    this._companyId = null;
    this._language = "";
    this._name = null;
    this._dbName = "";
    this.store.select(_state_language_language_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentLanguage).subscribe(language => {
      this._language = language;
    });
  }
  // Getters and Setters
  get username() {
    return this._username;
  }
  set username(value) {
    this._username = value;
  }
  get token() {
    return this._token;
  }
  set token(value) {
    this._token = value;
  }
  get companyId() {
    return this._companyId;
  }
  set companyId(value) {
    this._companyId = value;
  }
  get language() {
    return this._language;
  }
  set language(value) {
    this._language = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get dbName() {
    return this._dbName;
  }
  set dbName(value) {
    this._dbName = value;
  }
  getAll() {
    return {
      username: this._username,
      token: this._token,
      companyId: this._companyId,
      language: this._language,
      name: this._name,
      dbName: this._dbName
    };
  }
  // Clear all information
  clear() {
    this._username = null;
    this._token = null;
    this._companyId = null;
    this._language = "";
    this._name = null;
    this._dbName = "";
  }
  static {
    this.ɵfac = function AccessInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccessInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AccessInfoService,
      factory: AccessInfoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 40:
/*!**************************************************!*\
  !*** ./src/app/services/app-function.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFunctionService: () => (/* binding */ AppFunctionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_navigation_navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/navigation/navigation-loader.service */ 7440);
/* harmony import */ var _web_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-service.service */ 9054);
/* harmony import */ var _access_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-info.service */ 6411);





class AppFunctionService {
  constructor(navigationLoaderService, webService, accessInfo) {
    this.navigationLoaderService = navigationLoaderService;
    this.webService = webService;
    this.accessInfo = accessInfo;
  }
  reloadListFunction(language) {}
  getListFunction(language) {}
  getListFormItemNm(screenId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
  }
  static {
    this.ɵfac = function AppFunctionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppFunctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_navigation_navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__.NavigationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_web_service_service__WEBPACK_IMPORTED_MODULE_1__.WebServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_access_info_service__WEBPACK_IMPORTED_MODULE_2__.AccessInfoService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AppFunctionService,
      factory: AppFunctionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1032:
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostService: () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PostService {
  constructor() {
    this.pageSize = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.pageIndex = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.postSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.selectedPost$ = this.postSource.asObservable();
  }
  setPost(post) {
    this.postSource.next(post);
  }
  clearPost() {
    this.postSource.next(null);
  }
  setPageSize(pageSize) {
    this.pageSize.next(pageSize);
  }
  getPageSize() {
    return this.pageSize.value;
  }
  setPageIndex(pageIndex) {
    this.pageIndex.next(pageIndex);
  }
  getPageIndex() {
    return this.pageIndex.value;
  }
  static {
    this.ɵfac = function PostService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PostService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PostService,
      factory: PostService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2044:
/*!***************************************************!*\
  !*** ./src/app/services/splash-screen.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplashScreenService: () => (/* binding */ SplashScreenService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SplashScreenService {
  constructor() {
    this.splashScreenId = 'vex-splash-screen';
  }
  /**
   * Hiển thị splash screen
   */
  show() {
    const splashScreen = document.getElementById(this.splashScreenId);
    if (splashScreen) {
      splashScreen.style.display = 'flex';
      splashScreen.style.opacity = '1';
    }
  }
  /**
   * Ẩn splash screen
   */
  hide() {
    const splashScreen = document.getElementById(this.splashScreenId);
    if (splashScreen) {
      splashScreen.style.opacity = '0';
      setTimeout(() => {
        splashScreen.style.display = 'none';
      }, 100); // Thời gian cho hiệu ứng mờ dần
    }
  }
  static {
    this.ɵfac = function SplashScreenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SplashScreenService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SplashScreenService,
      factory: SplashScreenService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9054:
/*!*************************************************!*\
  !*** ./src/app/services/web-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebServiceService: () => (/* binding */ WebServiceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _app_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.const */ 9844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/core */ 5545);








class WebServiceService {
  constructor(router, http, loader) {
    this.router = router;
    this.http = http;
    this.loader = loader;
    this.SCREEN_MODE_PLUS = 'PLUS';
    this.SCREEN_MODE_MINUS = 'MINUS';
    this.FILE_TYPE_CSV = 'CSV';
    this.FILE_TYPE_PDF = 'PDF';
    this.FILE_TYPE_ZIP = 'ZIP';
    this.webServiceCnt = 0;
    this.isWaiting = false;
    this.loadingBarState = this.loader.useRef('router'); // Create a new LoadingBarState reference
  }
  fnWaitScreen(mode) {
    switch (mode) {
      case this.SCREEN_MODE_PLUS:
        this.webServiceCnt += 1;
        if (!this.isWaiting) {
          this.isWaiting = true;
          this.loadingBarState.start(); // Start loading bar
        }
        break;
      case this.SCREEN_MODE_MINUS:
        this.webServiceCnt = Math.max(0, this.webServiceCnt - 1); // Ngăn giá trị âm
        if (this.webServiceCnt === 0) {
          this.isWaiting = false;
          this.loadingBarState.complete(); // Complete loading bar
        }
        break;
    }
  }
  handleError(error) {
    const errorMsg = error.message || 'An unknown error occurred!';
    this.dispError('Error', errorMsg);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMsg));
  }
  handleResponse(response, fncSuccess) {
    if (this.fnCheckCommonError(response)) {
      if (fncSuccess) {
        fncSuccess(response);
      }
      return response; // Trả về dữ liệu thực tế
    }
    return null; // Nếu có lỗi, trả về null hoặc một đối tượng lỗi cụ thể
  }
  callWs(serviceName, data, fncSuccess, fncError) {
    this.fnWaitScreen(this.SCREEN_MODE_PLUS);
    const url = `${_app_const__WEBPACK_IMPORTED_MODULE_0__.serverHost()}/${_app_const__WEBPACK_IMPORTED_MODULE_0__.service}${serviceName}`;
    return this.http.post(url, data, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => this.handleResponse(response, fncSuccess)),
    // Trả về dữ liệu thực tế
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      if (fncError) {
        fncError();
      } else {
        this.handleError(error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null); // Trả về null nếu có lỗi
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.fnWaitScreen(this.SCREEN_MODE_MINUS)));
  }
  callSilentWs(serviceName, data, fncSuccess, fncError) {
    const url = `${_app_const__WEBPACK_IMPORTED_MODULE_0__.serverHost()}/${_app_const__WEBPACK_IMPORTED_MODULE_0__.service}${serviceName}`;
    return this.http.post(url, data, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => this.handleResponse(response, fncSuccess)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      if (fncError) {
        fncError();
      } else {
        this.handleError(error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }));
  }
  callWebServiceForFileDownload(param, webServiceNm, fileType) {
    this.fnWaitScreen(this.SCREEN_MODE_PLUS);
    const url = `${_app_const__WEBPACK_IMPORTED_MODULE_0__.service}${webServiceNm}${param}`;
    switch (fileType) {
      case this.FILE_TYPE_CSV:
      case this.FILE_TYPE_ZIP:
        window.location.href = url;
        break;
      case this.FILE_TYPE_PDF:
        window.open(url);
        break;
    }
    this.fnWaitScreen(this.SCREEN_MODE_MINUS);
  }
  callWebServiceForFileUpload(serviceName, data, fncSuccess, fncError) {
    this.fnWaitScreen(this.SCREEN_MODE_PLUS);
    const url = `${_app_const__WEBPACK_IMPORTED_MODULE_0__.serverHost()}/${serviceName}`;
    return this.http.post(url, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
      if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Response) {
        const response = event.body;
        return this.handleResponse(response, fncSuccess);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      if (fncError) {
        fncError();
      } else {
        this.handleError(error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.fnWaitScreen(this.SCREEN_MODE_MINUS)));
  }
  fnCheckCommonError(response) {
    if (response.fatalError && response.fatalError.length > 0) {
      const errors = response.fatalError;
      for (let i = 0; i < errors.length; i++) {
        if (['MC000001', 'MC000002', 'MC000003'].includes(errors[i].errId)) {
          this.fnWaitScreen(this.SCREEN_MODE_MINUS); // Tắt overlay ngay lập tức khi có lỗi
          return false;
        }
      }
    }
    return true;
  }
  dispError(code, msg) {
    let errorStr = '';
    errorStr += 'エラーが発生しました。\n\n';
    errorStr += 'エラーコード:' + code + '\n';
    errorStr += 'メッセージ:' + msg + '\n';
    window.alert(errorStr);
  }
  static {
    this.ɵfac = function WebServiceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_9__.LoadingBarService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: WebServiceService,
      factory: WebServiceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9663:
/*!****************************************************!*\
  !*** ./src/app/state/language/language.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLanguage: () => (/* binding */ setLanguage)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);
// src/app/state/language/language.actions.ts

const setLanguage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Language] Set Language', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 1979:
/*!****************************************************!*\
  !*** ./src/app/state/language/language.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   languageReducer: () => (/* binding */ languageReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _language_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.actions */ 9663);
/* harmony import */ var _language_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.state */ 1098);
// src/app/state/language/language.reducer.ts



const languageReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_language_state__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_language_actions__WEBPACK_IMPORTED_MODULE_0__.setLanguage, (state, {
  language
}) => ({
  ...state,
  currentLanguage: language
})));

/***/ }),

/***/ 7273:
/*!******************************************************!*\
  !*** ./src/app/state/language/language.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCurrentLanguage: () => (/* binding */ selectCurrentLanguage),
/* harmony export */   selectLanguageState: () => (/* binding */ selectLanguageState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectLanguageState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('language');
const selectCurrentLanguage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectLanguageState, state => state.currentLanguage);

/***/ }),

/***/ 1098:
/*!**************************************************!*\
  !*** ./src/app/state/language/language.state.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _app_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.const */ 9844);

const initialState = {
  currentLanguage: _app_const__WEBPACK_IMPORTED_MODULE_0__.JP
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map