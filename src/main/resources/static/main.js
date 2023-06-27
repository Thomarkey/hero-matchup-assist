"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _comparing_heroes_comparing_heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comparing-heroes/comparing-heroes.component */ 8663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: "hero/:firstHero",
  component: _hero_hero_component__WEBPACK_IMPORTED_MODULE_0__.HeroComponent
}, {
  path: ":firstHero/:secondHero",
  component: _comparing_heroes_comparing_heroes_component__WEBPACK_IMPORTED_MODULE_1__.ComparingHeroesComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/shared/shared.service */ 1571);
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/hero/hero.service */ 5849);
/* harmony import */ var _services_shared_properties_zscores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/properties-zscores.service */ 290);
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/property/property.service */ 3705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_dropdown_home_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-dropdown/home-dropdown.component */ 5869);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 970);








const _c0 = function (a1) {
  return ["/hero", a1];
};
class AppComponent {
  constructor(sharedService, heroService, propertiesZScoresService, propertyService) {
    this.sharedService = sharedService;
    this.heroService = heroService;
    this.propertiesZScoresService = propertiesZScoresService;
    this.propertyService = propertyService;
    this.title = "DOTA HERO MATCHUP ASSIST";
  }
  ngOnInit() {
    this.heroService.getAllHeroesPropertiesZScores().subscribe(data => {
      this.propertiesZScoresService.setPropertiesZScores(data);
      console.log("getAllHeroesPropertiesZScores : ");
      console.log(data);
    });
    this.heroService.getAllHeroesMinMaxPropertiesValues().subscribe(data => {
      this.propertyService.setPropertiesValues(data);
    });
  }
  resetComparison() {
    const isComparing = false;
    this.sharedService.setComparingStatus(isComparing);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_1__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_properties_zscores_service__WEBPACK_IMPORTED_MODULE_2__.PropertiesZScoresService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_property_property_service__WEBPACK_IMPORTED_MODULE_3__.PropertyService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 15,
  vars: 4,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "card-body"], [1, "card-title", "text-center", "text-white", "py-3"], ["href", "/"], [1, "text-center", "list-inline", "py-3"], [1, "list-inline-item"], [3, "heroSelectedEvent"], [1, "search-btn", 3, "routerLink", "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "app-home-dropdown", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("heroSelectedEvent", function AppComponent_Template_app_home_dropdown_heroSelectedEvent_9_listener($event) {
        return ctx.firstHero = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 7)(11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
        return ctx.resetComparison();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Look up!");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx.firstHero));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _home_dropdown_home_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.HomeDropdownComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
  styles: ["a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  background: linear-gradient(353deg, #3b6a42, #578e59, #4a8351);\n  color: #ffffff;\n  box-shadow: 0 0 6px rgba(104, 121, 216, 0.2);\n  transition: box-shadow 0.3s ease;\n  outline: none;\n}\n\n.search-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 8px #15212d, 0 0 10px rgba(21, 33, 45, 0.2), 0 0 20px 5px rgba(21, 33, 45, 0.1), 0 0 6px #f8f0d9;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\n.hero-card.isComparing[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4REFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0hBQUE7QUFDSjs7QUFHQTtFQUNJLDJDQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gMi4yNTByZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1M2RlZywgIzNiNmE0MiwgIzU3OGU1OSwgIzRhODM1MSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiKDEwNCwgMTIxLCAyMTYsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzE1MjEyZCwgMCAwIDEwcHggcmdiYSgyMSwgMzMsIDQ1LCAwLjIpLCAwIDAgMjBweCA1cHggcmdiYSgyMSwgMzMsIDQ1LCAwLjEpLCAwIDAgNnB4ICNmOGYwZDk7XHJcbn1cclxuXHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGVyby1jYXJkLmlzQ29tcGFyaW5nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _hero_dropdown_hero_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-dropdown/hero-dropdown.component */ 6871);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/round.pipe */ 8007);
/* harmony import */ var _pipes_transformed_properties_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/transformed-properties.pipe */ 7241);
/* harmony import */ var _pipes_hero_images_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/hero-images.pipe */ 8139);
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-card/hero-card.component */ 5268);
/* harmony import */ var _hero_property_checkboxes_hero_property_checkboxes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-property-checkboxes/hero-property-checkboxes.component */ 9611);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader/loader.component */ 5242);
/* harmony import */ var _hero_properties_zscore_hero_properties_zscore_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero-properties-zscore/hero-properties-zscore.component */ 8242);
/* harmony import */ var _home_dropdown_home_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-dropdown/home-dropdown.component */ 5869);
/* harmony import */ var _hero_header_hero_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hero-header/hero-header.component */ 9016);
/* harmony import */ var _comparing_heroes_comparing_heroes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comparing-heroes/comparing-heroes.component */ 8663);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _hero_dropdown_hero_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.HeroDropdownComponent, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_4__.RoundPipe, _pipes_transformed_properties_pipe__WEBPACK_IMPORTED_MODULE_5__.TransformedPropertiesPipe, _pipes_hero_images_pipe__WEBPACK_IMPORTED_MODULE_6__.HeroImagesPipe, _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_7__.HeroCardComponent, _hero_property_checkboxes_hero_property_checkboxes_component__WEBPACK_IMPORTED_MODULE_8__.HeroPropertyCheckboxesComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__.LoaderComponent, _hero_properties_zscore_hero_properties_zscore_component__WEBPACK_IMPORTED_MODULE_10__.HeroPropertiesZscoreComponent, _home_dropdown_home_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.HomeDropdownComponent, _hero_header_hero_header_component__WEBPACK_IMPORTED_MODULE_12__.HeroHeaderComponent, _comparing_heroes_comparing_heroes_component__WEBPACK_IMPORTED_MODULE_13__.ComparingHeroesComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule]
  });
})();

/***/ }),

/***/ 8663:
/*!****************************************************************!*\
  !*** ./src/app/comparing-heroes/comparing-heroes.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparingHeroesComponent": () => (/* binding */ ComparingHeroesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hero/hero.service */ 5849);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared/shared.service */ 1571);
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/property/property.service */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _hero_dropdown_hero_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero-dropdown/hero-dropdown.component */ 6871);
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hero-card/hero-card.component */ 5268);
/* harmony import */ var _hero_property_checkboxes_hero_property_checkboxes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hero-property-checkboxes/hero-property-checkboxes.component */ 9611);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/loader.component */ 5242);












function ComparingHeroesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-hero-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-hero-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hero", ctx_r0.firstHero)("compareHero", ctx_r0.secondHero)("selectedProperties", ctx_r0.showProperties)("isComparing", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hero", ctx_r0.secondHero)("compareHero", ctx_r0.firstHero)("selectedProperties", ctx_r0.showProperties)("isComparing", true);
  }
}
class ComparingHeroesComponent {
  constructor(route, heroService, sharedService, propertyService) {
    this.route = route;
    this.heroService = heroService;
    this.sharedService = sharedService;
    this.propertyService = propertyService;
    this.loading = true;
    this.heroSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.showProperties = this.propertyService.showProperties;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.paramMap.subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          const firstHero = params.get('firstHero');
          const secondHero = params.get('secondHero');
          if (firstHero && secondHero) {
            _this.firstHero = yield _this.heroService.getHero(firstHero).toPromise();
            _this.secondHero = yield _this.heroService.getHero(secondHero).toPromise();
          }
          _this.loading = false;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  onHeroSelection(firstHero, secondHero) {
    this.secondHero = secondHero;
    this.sharedService.setComparingStatus(true);
    this.heroSelectedEvent.emit({
      firstHero: firstHero,
      secondHero
    });
  }
  onPropertySelection(selectedProperties) {
    this.showProperties = selectedProperties.map(name => ({
      name,
      checked: true
    }));
  }
}
ComparingHeroesComponent.ɵfac = function ComparingHeroesComponent_Factory(t) {
  return new (t || ComparingHeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_1__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_property_property_service__WEBPACK_IMPORTED_MODULE_3__.PropertyService));
};
ComparingHeroesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ComparingHeroesComponent,
  selectors: [["app-comparing-heroes"]],
  outputs: {
    heroSelectedEvent: "heroSelectedEvent"
  },
  decls: 9,
  vars: 5,
  consts: [[1, "compare-wrapper"], [1, "toBeCompared"], [3, "firstHero", "heroSelectedEvent"], [3, "loading"], [1, "checkbox-wrapper"], [3, "showProperties", "selectedProperties"], [4, "ngIf"], [1, "hero-wrapper"], [1, "hero-card"], [3, "hero", "compareHero", "selectedProperties", "isComparing"], [1, "hero-card", "isComparing"]],
  template: function ComparingHeroesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "app-hero-dropdown", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("heroSelectedEvent", function ComparingHeroesComponent_Template_app_hero_dropdown_heroSelectedEvent_4_listener($event) {
        return ctx.onHeroSelection($event.firstHero, $event.secondHero);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-loader", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "app-hero-property-checkboxes", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedProperties", function ComparingHeroesComponent_Template_app_hero_property_checkboxes_selectedProperties_7_listener($event) {
        return ctx.onPropertySelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ComparingHeroesComponent_div_8_Template, 6, 8, "div", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("compare ", ctx.firstHero.displayName, " to : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("firstHero", ctx.firstHero);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showProperties", ctx.showProperties);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _hero_dropdown_hero_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.HeroDropdownComponent, _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_5__.HeroCardComponent, _hero_property_checkboxes_hero_property_checkboxes_component__WEBPACK_IMPORTED_MODULE_6__.HeroPropertyCheckboxesComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent],
  styles: [".hero-card.isComparing[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcGFyaW5nLWhlcm9lcy9jb21wYXJpbmctaGVyb2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWNhcmQuaXNDb21wYXJpbmcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 5,
  vars: 0,
  consts: [["href", "mailto:dotaheromatchupassist@gmail.com"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 All rights reserved. Dota 2 images and logos are the property of Valve Corporation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["footer[_ngcontent-%COMP%] {\n  font-size: 60%;\n  text-align: center;\n  margin-top: 10em;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5268:
/*!**************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroCardComponent": () => (/* binding */ HeroCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_shared_attack_type_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared/attack-type-icons */ 7731);
/* harmony import */ var _services_shared_primary_stats_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared/primary-stats-icons */ 1675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _hero_properties_zscore_hero_properties_zscore_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero-properties-zscore/hero-properties-zscore.component */ 8242);
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/round.pipe */ 8007);
/* harmony import */ var _pipes_transformed_properties_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/transformed-properties.pipe */ 7241);
/* harmony import */ var _pipes_hero_images_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/hero-images.pipe */ 8139);









const _c0 = function (a0, a1) {
  return {
    "arrow-up": a0,
    "arrow-down": a1
  };
};
function HeroCardComponent_ng_container_19_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "transformedProperties");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "transformedProperties");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 14)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "app-hero-properties-zscore", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, property_r1.name).icon, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 9, property_r1.name).displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, ctx_r2.isComparing && ctx_r2.getComparisonClass(property_r1.name) === "arrow-up", ctx_r2.isComparing && ctx_r2.getComparisonClass(property_r1.name) === "arrow-down"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 11, ctx_r2.hero && ctx_r2.hero.stat && ctx_r2.hero.stat[property_r1.name], property_r1.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hero", ctx_r2.hero)("propertyName", property_r1.name)("propertyValue", ctx_r2.hero.stat[property_r1.name]);
  }
}
function HeroCardComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeroCardComponent_ng_container_19_tr_1_Template, 13, 17, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const property_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", property_r1.checked);
  }
}
class HeroCardComponent {
  constructor() {
    this.showPropertiesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.attackTypeIcons = _services_shared_attack_type_icons__WEBPACK_IMPORTED_MODULE_0__.attackTypeIcons;
    this.primaryStatsIcons = _services_shared_primary_stats_icons__WEBPACK_IMPORTED_MODULE_1__.primaryStatsIcons;
  }
  onCheckboxChange(property) {
    property.checked = !property.checked;
    this.showPropertiesChange.emit(this.selectedProperties);
  }
  getComparisonClass(propertyName) {
    const heroValue = this.hero.stat[propertyName];
    const secondHeroValue = this.compareHero.stat[propertyName];
    if (heroValue > secondHeroValue) {
      return 'arrow-up';
    } else if (heroValue < secondHeroValue) {
      return 'arrow-down';
    }
    return '';
  }
}
HeroCardComponent.ɵfac = function HeroCardComponent_Factory(t) {
  return new (t || HeroCardComponent)();
};
HeroCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HeroCardComponent,
  selectors: [["app-hero-card"]],
  inputs: {
    hero: "hero",
    compareHero: "compareHero",
    isComparing: "isComparing",
    selectedProperties: "selectedProperties"
  },
  outputs: {
    showPropertiesChange: "showPropertiesChange"
  },
  decls: 20,
  vars: 13,
  consts: [[1, "properties-table"], ["colspan", "4", 1, "display-header"], [1, "hero-header-small-img", 3, "src"], [1, "display-name"], [1, "property-img", "inverted", 3, "src"], [1, "property-img", 3, "src"], [1, "hp-bar-container"], [1, "hp-bar"], [1, "raw-hp-stat"], [1, "raw-hp-regen-stat"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "property-name"], [1, "property-value"], [3, "hero", "propertyName", "propertyValue"]],
  template: function HeroCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "heroImages");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, HeroCardComponent_ng_container_19_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, ctx.hero == null ? null : ctx.hero.displayName).smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.attackTypeIcons[ctx.hero.stat.attackType], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.hero == null ? null : ctx.hero.displayName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.primaryStatsIcons[ctx.hero.stat.primaryAttributeEnum].icon, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hero == null ? null : ctx.hero.stat.hp);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" +", ctx.hero == null ? null : ctx.hero.stat.rawHPRegen, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c0, ctx.isComparing && ctx.getComparisonClass("hp") === "arrow-up", ctx.isComparing && ctx.getComparisonClass("hp") === "arrow-down"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedProperties);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _hero_properties_zscore_hero_properties_zscore_component__WEBPACK_IMPORTED_MODULE_2__.HeroPropertiesZscoreComponent, _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_3__.RoundPipe, _pipes_transformed_properties_pipe__WEBPACK_IMPORTED_MODULE_4__.TransformedPropertiesPipe, _pipes_hero_images_pipe__WEBPACK_IMPORTED_MODULE_5__.HeroImagesPipe],
  styles: [".property-name[_ngcontent-%COMP%] {\n  padding-right: 2em;\n}\n\n.zScore-header[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.properties-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.properties-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.properties-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.properties-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  width: 60px;\n}\n\n.properties-table[_ngcontent-%COMP%]   .display-header[_ngcontent-%COMP%], .properties-table[_ngcontent-%COMP%]   .zScore-header[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.properties-table[_ngcontent-%COMP%]   .display-header[_ngcontent-%COMP%]   .display-name[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px auto;\n  max-width: 100%;\n}\n\n.property-img[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n\n.properties-table[_ngcontent-%COMP%]   .property-value[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.properties-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 130px;\n}\n\n.inverted[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n\n.arrow-up[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 9px solid green;\n  margin-left: 4px;\n  margin-right: 2px;\n  vertical-align: middle;\n}\n\n.arrow-down[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 9px solid red;\n  margin-left: 4px;\n  margin-right: 2px;\n  vertical-align: middle;\n}\n\n.hp-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n\n.hp-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background: linear-gradient(to right, #107a2c, #12a339, #5cff8a);\n  padding: 4px 8px;\n  border-radius: 4px;\n  height: 20px;\n}\n\n.raw-hp-stat[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: lighter;\n}\n\n.raw-hp-regen-stat[_ngcontent-%COMP%] {\n  color: rgb(2, 73, 39);\n  font-size: 80%;\n  position: relative;\n  right: -20px;\n  font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVyby1jYXJkL2hlcm8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBOztFQUVJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LW5hbWUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xyXG59XHJcblxyXG4uelNjb3JlLWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ucHJvcGVydGllcy10YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzLXRhYmxlIHRoZWFkIHRyIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnByb3BlcnRpZXMtdGFibGUgdGJvZHkgdHIgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzLXRhYmxlIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLnByb3BlcnRpZXMtdGFibGUgLmRpc3BsYXktaGVhZGVyLFxyXG4ucHJvcGVydGllcy10YWJsZSAuelNjb3JlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvcGVydGllcy10YWJsZSAuZGlzcGxheS1oZWFkZXIgLmRpc3BsYXktbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvcGVydHktaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG5cclxuLnByb3BlcnRpZXMtdGFibGUgLnByb3BlcnR5LXZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvcGVydGllcy10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLmludmVydGVkIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uYXJyb3ctdXA6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA5cHggc29saWQgZ3JlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYXJyb3ctZG93bjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDlweCBzb2xpZCByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaHAtYmFyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uaHAtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEwN2EyYywgIzEyYTMzOSwgIzVjZmY4YSk7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmF3LWhwLXN0YXQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuLnJhdy1ocC1yZWdlbi1zdGF0IHtcclxuICAgIGNvbG9yOiByZ2IoMiwgNzMsIDM5KTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6871:
/*!**********************************************************!*\
  !*** ./src/app/hero-dropdown/hero-dropdown.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroDropdownComponent": () => (/* binding */ HeroDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hero/hero.service */ 5849);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared/shared.service */ 1571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function HeroDropdownComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hero_r1);
  }
}
class HeroDropdownComponent {
  constructor(heroService, sharedService, router) {
    this.heroService = heroService;
    this.sharedService = sharedService;
    this.router = router;
    this.heroSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  //TODO: set heroeNames in shared service
  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
      this.heroes = heroes;
      console.log(heroes);
    });
  }
  heroSelected(event) {
    console.log("from hero dropdown");
    const selectedHeroName = event.target.value;
    console.log('heroSelected', selectedHeroName);
    console.log('the first hero is :' + this.firstHero?.displayName);
    this.heroService.getHero(selectedHeroName).subscribe(secondHero => {
      console.log(secondHero);
      this.secondHero = secondHero;
      this.sharedService.setSecondHero(secondHero);
      console.log("start of the emit");
      this.heroSelectedEvent.emit({
        firstHero: this.firstHero,
        secondHero
      });
      console.log("emit should be done now?");
      this.router.navigate(['/' + this.firstHero?.displayName + '/' + this.secondHero?.displayName]);
    });
  }
}
HeroDropdownComponent.ɵfac = function HeroDropdownComponent_Factory(t) {
  return new (t || HeroDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
HeroDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeroDropdownComponent,
  selectors: [["app-hero-dropdown"]],
  inputs: {
    firstHero: "firstHero"
  },
  outputs: {
    heroSelectedEvent: "heroSelectedEvent"
  },
  decls: 4,
  vars: 1,
  consts: [[3, "change"], ["selected", "", "disabled", ""], [4, "ngFor", "ngForOf"]],
  template: function HeroDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HeroDropdownComponent_Template_select_change_0_listener($event) {
        return ctx.heroSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Choose hero");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeroDropdownComponent_option_3_Template, 2, 1, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heroes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9016:
/*!******************************************************!*\
  !*** ./src/app/hero-header/hero-header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroHeaderComponent": () => (/* binding */ HeroHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_hero_images_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/hero-images.pipe */ 8139);



function HeroHeaderComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "heroImages");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r1.hero == null ? null : ctx_r1.hero.displayName).largeImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HeroHeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeroHeaderComponent_div_0_img_1_Template, 2, 3, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isComparing);
  }
}
class HeroHeaderComponent {}
HeroHeaderComponent.ɵfac = function HeroHeaderComponent_Factory(t) {
  return new (t || HeroHeaderComponent)();
};
HeroHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeroHeaderComponent,
  selectors: [["app-hero-header"]],
  inputs: {
    hero: "hero",
    isComparing: "isComparing",
    loading: "loading"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [3, "src", 4, "ngIf"], [3, "src"]],
  template: function HeroHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeroHeaderComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _pipes_hero_images_pipe__WEBPACK_IMPORTED_MODULE_0__.HeroImagesPipe],
  styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVyby1oZWFkZXIvaGVyby1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8242:
/*!****************************************************************************!*\
  !*** ./src/app/hero-properties-zscore/hero-properties-zscore.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroPropertiesZscoreComponent": () => (/* binding */ HeroPropertiesZscoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hero/hero.service */ 5849);
/* harmony import */ var _services_shared_properties_zscores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared/properties-zscores.service */ 290);
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/property/property.service */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function HeroPropertiesZscoreComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r0.heroZScore, "1.2-2"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "gradient-positive": a0,
    "gradient-neutral": a1,
    "gradient-negative": a2
  };
};
class HeroPropertiesZscoreComponent {
  constructor(heroService, propertiesZScoresService, propertyService) {
    this.heroService = heroService;
    this.propertiesZScoresService = propertiesZScoresService;
    this.propertyService = propertyService;
    this.loading = true;
    this.hovering = false;
  }
  ngOnInit() {
    if (this.hero && this.hero.displayName) {
      this.getHeroZScores(this.hero?.displayName, this.propertyName);
    }
    this.minMaxPropertyValues = this.propertyService.getPropertiesValues();
  }
  ngOnChanges() {
    console.log("property checked for: ", this.propertyName);
    this.getHeroZScores(this.hero?.displayName, this.propertyName);
  }
  getHeroZScores(heroName, propertyName) {
    this.loading = true;
    this.heroService.getHeroPropertyZScore(heroName, propertyName).subscribe(zScore => {
      if (zScore !== undefined) {
        this.heroZScore = zScore;
        // this.calculateMarkerPosition(zScore, propertyName);
        // this.calculateUpdatetMarkerPosition(zScore, propertyName);
        this.calculateEasyMarkerPosition(propertyName);
      }
      this.loading = false;
    });
  }
  calculateMarkerPosition(zScore, propertyName) {
    const zScoresMap = this.propertiesZScoresService.getPropertiesZScoresMap();
    if (zScoresMap) {
      const propertyZScoresArray = [];
      const zScoresEntries = Object.entries(zScoresMap);
      for (const [, heroZScoresMap] of zScoresEntries) {
        if (heroZScoresMap.hasOwnProperty(propertyName)) {
          const propertyZScore = heroZScoresMap[propertyName];
          if (typeof propertyZScore === 'number') {
            propertyZScoresArray.push(propertyZScore);
          }
        }
      }
      const allZScoresArray = [...propertyZScoresArray, zScore];
      this.minZScore = Math.min(...allZScoresArray);
      this.maxZScore = Math.max(...allZScoresArray);
      if (this.minZScore === this.maxZScore) {
        this.markerPosition = 0.5;
      } else {
        this.markerPosition = (zScore - this.minZScore) / (this.maxZScore - this.minZScore);
      }
    }
  }
  calculateUpdatetMarkerPosition(zScore, propertyName) {
    const zScoresMap = this.propertiesZScoresService.getPropertiesZScoresMap();
    if (zScoresMap) {
      const propertyZScoresArray = [];
      const zScoresEntries = Object.entries(zScoresMap);
      for (const [, heroZScoresMap] of zScoresEntries) {
        if (heroZScoresMap.hasOwnProperty(propertyName)) {
          const propertyZScore = heroZScoresMap[propertyName];
          if (typeof propertyZScore === 'number') {
            propertyZScoresArray.push(propertyZScore);
          }
        }
      }
      const minZScore = Math.min(...propertyZScoresArray);
      const maxZScore = Math.max(...propertyZScoresArray);
      // Normalize the Z-score within the range of 0 to 1
      const normalizedZScore = (zScore - minZScore) / (maxZScore - minZScore);
      this.updatetMarkerPosition = normalizedZScore;
    }
  }
  calculateEasyMarkerPosition(propertyName) {
    const minMaxPropertyValuesMap = new Map();
    for (const [key, value] of Object.entries(this.minMaxPropertyValues)) {
      minMaxPropertyValuesMap.set(key, value);
    }
    const minMaxPropertyValuesObj = minMaxPropertyValuesMap.get(propertyName);
    console.log(minMaxPropertyValuesObj);
    if (minMaxPropertyValuesObj) {
      this.minPropertyValue = minMaxPropertyValuesObj ? Object.entries(minMaxPropertyValuesObj)[0][1] : {};
      this.maxPropertyValue = minMaxPropertyValuesObj ? Object.entries(minMaxPropertyValuesObj)[1][1] : {};
      console.log('Min:', this.minPropertyValue);
      console.log('Max:', this.maxPropertyValue);
      console.log('current:', this.propertyValue);
      if (this.minPropertyValue === this.maxPropertyValue) {
        this.easyMarkerPosition = 0.5;
      } else {
        this.easyMarkerPosition = (Number(this.propertyValue) - Number(this.minPropertyValue)) / (Number(this.maxPropertyValue) - Number(this.minPropertyValue));
      }
      console.log('marker position : ', this.easyMarkerPosition);
    }
  }
  showZScore() {
    this.hovering = true;
  }
  hideZScore() {
    this.hovering = false;
  }
}
HeroPropertiesZscoreComponent.ɵfac = function HeroPropertiesZscoreComponent_Factory(t) {
  return new (t || HeroPropertiesZscoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shared_properties_zscores_service__WEBPACK_IMPORTED_MODULE_1__.PropertiesZScoresService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_property_property_service__WEBPACK_IMPORTED_MODULE_2__.PropertyService));
};
HeroPropertiesZscoreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeroPropertiesZscoreComponent,
  selectors: [["app-hero-properties-zscore"]],
  inputs: {
    hero: "hero",
    propertyName: "propertyName",
    propertyValue: "propertyValue"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 8,
  consts: [[1, "bar", 3, "mouseenter", "mouseleave"], [1, "marker", 3, "ngClass"], ["class", "z-score", 4, "ngIf"], [1, "z-score"]],
  template: function HeroPropertiesZscoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function HeroPropertiesZscoreComponent_Template_div_mouseenter_0_listener() {
        return ctx.showZScore();
      })("mouseleave", function HeroPropertiesZscoreComponent_Template_div_mouseleave_0_listener() {
        return ctx.hideZScore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HeroPropertiesZscoreComponent_div_2_Template, 3, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.easyMarkerPosition * 100, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c0, ctx.easyMarkerPosition > 0.5, ctx.easyMarkerPosition == 0.5, ctx.easyMarkerPosition < 0.5));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hovering);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
  styles: [".gradient-positive[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, rgba(107, 142, 35, 0.5), rgba(34, 139, 34, 0.5));\n}\n\n.gradient-neutral[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, rgba(255, 255, 0, 0.5), rgba(255, 215, 0, 0.5));\n}\n\n.gradient-negative[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, rgba(255, 69, 0, 0.5), rgba(139, 0, 0, 0.5));\n}\n\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background-color: lightgray;\n}\n\n.marker[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.z-score[_ngcontent-%COMP%] {\n  transform: scale(0.5);\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVyby1wcm9wZXJ0aWVzLXpzY29yZS9oZXJvLXByb3BlcnRpZXMtenNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0ZBQUE7QUFDSjs7QUFFQTtFQUNJLHFGQUFBO0FBQ0o7O0FBRUE7RUFDSSxrRkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWRpZW50LXBvc2l0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxMDcsIDE0MiwgMzUsIDAuNSksIHJnYmEoMzQsIDEzOSwgMzQsIDAuNSkpO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtbmV1dHJhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDAsIDAuNSksIHJnYmEoMjU1LCAyMTUsIDAsIDAuNSkpO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtbmVnYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgNjksIDAsIDAuNSksIHJnYmEoMTM5LCAwLCAwLCAwLjUpKTtcclxufVxyXG5cclxuLmJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubWFya2VyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnotc2NvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9611:
/*!********************************************************************************!*\
  !*** ./src/app/hero-property-checkboxes/hero-property-checkboxes.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroPropertyCheckboxesComponent": () => (/* binding */ HeroPropertyCheckboxesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_transformed_properties_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/transformed-properties.pipe */ 7241);




function HeroPropertyCheckboxesComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "label", 5)(2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HeroPropertyCheckboxesComponent_div_3_div_1_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const property_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleProperty(property_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 7)(4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "transformedProperties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "transformedProperties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const property_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", property_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", property_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, property_r2.name).icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, property_r2.name).displayName);
  }
}
function HeroPropertyCheckboxesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeroPropertyCheckboxesComponent_div_3_div_1_Template, 9, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.showProperties);
  }
}
class HeroPropertyCheckboxesComponent {
  constructor() {
    this.showProperties = [];
    this.selectedProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.showPropertyOptions = true;
  }
  toggleProperty(property) {
    property.checked = !property.checked;
  }
  toggleShowProperties() {
    this.showPropertyOptions = !this.showPropertyOptions;
  }
}
HeroPropertyCheckboxesComponent.ɵfac = function HeroPropertyCheckboxesComponent_Factory(t) {
  return new (t || HeroPropertyCheckboxesComponent)();
};
HeroPropertyCheckboxesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeroPropertyCheckboxesComponent,
  selectors: [["app-hero-property-checkboxes"]],
  inputs: {
    showProperties: "showProperties"
  },
  outputs: {
    selectedProperties: "selectedProperties"
  },
  decls: 4,
  vars: 2,
  consts: [[1, "property-checkboxes"], [1, "show-properties-lbl", 3, "click"], ["class", "checkbox-container", 4, "ngIf"], [1, "checkbox-container"], [4, "ngFor", "ngForOf"], [1, "property-checkbox"], ["type", "checkbox", 3, "checked", "id", "change"], [1, "checkbox-custom"], [1, "property-img", 3, "src"], [1, "property-name"]],
  template: function HeroPropertyCheckboxesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroPropertyCheckboxesComponent_Template_label_click_1_listener() {
        return ctx.toggleShowProperties();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeroPropertyCheckboxesComponent_div_3_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showPropertyOptions ? "Hide stats" : "Show stats", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPropertyOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _pipes_transformed_properties_pipe__WEBPACK_IMPORTED_MODULE_0__.TransformedPropertiesPipe],
  styles: [".show-properties-lbl[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  font-size: 50%;\n  margin-bottom: 0;\n}\n\n.checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  transition: max-height 0.3s ease;\n  overflow: hidden;\n}\n\n.property-checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #ccc;\n  padding: 15px;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  background-color: #262c31;\n  flex-wrap: wrap;\n}\n\n.property-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.property-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.property-checkbox[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  margin-right: 10px;\n  box-sizing: border-box;\n}\n\n.property-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background-color: #cae8e8;\n  border: 3px solid #000;\n  box-shadow: 0 0 6px rgb(104, 121, 216);\n}\n\n.property-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + .checkbox-custom[_ngcontent-%COMP%] {\n  background-color: #000;\n  border: 2px solid #cae8e8;\n}\n\n.property-img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVyby1wcm9wZXJ0eS1jaGVja2JveGVzL2hlcm8tcHJvcGVydHktY2hlY2tib3hlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3ctcHJvcGVydGllcy1sYmwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb3BlcnR5LWNoZWNrYm94ZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJjMzE7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucHJvcGVydHktY2hlY2tib3ggLmNoZWNrYm94LWN1c3RvbSB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCsuY2hlY2tib3gtY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWU4ZTg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCByZ2IoMTA0LCAxMjEsIDIxNik7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0rLmNoZWNrYm94LWN1c3RvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NhZThlODtcclxufVxyXG5cclxuLnByb3BlcnR5LWltZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3229:
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hero/hero.service */ 5849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/property/property.service */ 3705);
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared/shared.service */ 1571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _hero_dropdown_hero_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero-dropdown/hero-dropdown.component */ 6871);
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hero-card/hero-card.component */ 5268);
/* harmony import */ var _hero_property_checkboxes_hero_property_checkboxes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hero-property-checkboxes/hero-property-checkboxes.component */ 9611);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/loader.component */ 5242);













function HeroComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-hero-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isComparing", ctx_r1.isComparing)("hero", ctx_r1.secondHero)("selectedProperties", ctx_r1.showProperties);
  }
}
function HeroComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-hero-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HeroComponent_div_8_div_4_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hero", ctx_r0.hero)("selectedProperties", ctx_r0.showProperties);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isComparing);
  }
}
class HeroComponent {
  constructor(heroService, route, propertyService, sharedService) {
    this.heroService = heroService;
    this.route = route;
    this.propertyService = propertyService;
    this.sharedService = sharedService;
    this.loading = true;
    this.isComparing = false;
    this.showProperties = this.propertyService.showProperties;
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.heroSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.sharedService.isComparing$.subscribe(isComparing => {
      this.isComparing = isComparing;
    });
  }
  onPropertySelection(selectedProperties) {
    this.showProperties = selectedProperties.map(name => ({
      name,
      checked: true
    }));
  }
  onHeroSelection(firstHero, secondHero) {
    this.secondHero = secondHero;
    this.sharedService.setComparingStatus(true);
    console.log("isComparing : " + this.isComparing);
    this.heroSelectedEvent.emit({
      firstHero: firstHero,
      secondHero
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.paramMap.subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.heroName = params.get('firstHero');
          if (_this.heroName) {
            _this.hero = yield _this.getHero(_this.heroName);
            console.log('hero retrieved', _this.hero);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getHero(heroName) {
    var _this2 = this;
    return (0,C_Users_thoma_IdeaProjects_dotaApplicationTool_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hero = yield _this2.heroService.getHero(heroName).toPromise();
        console.log('hero retrieved in getHero', hero);
        return hero;
      } catch (error) {
        console.error('Error retrieving hero', error);
        return undefined;
      } finally {
        _this2.loading = false;
      }
    })();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) {
  return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_1__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_property_property_service__WEBPACK_IMPORTED_MODULE_2__.PropertyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService));
};
HeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HeroComponent,
  selectors: [["app-hero"]],
  inputs: {
    hero: "hero"
  },
  outputs: {
    heroSelectedEvent: "heroSelectedEvent"
  },
  decls: 9,
  vars: 5,
  consts: [[1, "compare-wrapper"], [1, "toBeCompared"], [3, "firstHero", "heroSelectedEvent"], [3, "loading"], [1, "checkbox-wrapper"], [3, "showProperties", "selectedProperties"], [4, "ngIf"], [1, "hero-wrapper"], [1, "hero-card"], [3, "hero", "selectedProperties"], [1, "hero-card", "isComparing"], [3, "isComparing", "hero", "selectedProperties"]],
  template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "app-hero-dropdown", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("heroSelectedEvent", function HeroComponent_Template_app_hero_dropdown_heroSelectedEvent_4_listener($event) {
        return ctx.onHeroSelection($event.firstHero, $event.secondHero);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-loader", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "app-hero-property-checkboxes", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedProperties", function HeroComponent_Template_app_hero_property_checkboxes_selectedProperties_7_listener($event) {
        return ctx.onPropertySelection($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, HeroComponent_div_8_Template, 5, 3, "div", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("compare ", ctx.hero.displayName, " to : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("firstHero", ctx.hero);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showProperties", ctx.showProperties);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _hero_dropdown_hero_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.HeroDropdownComponent, _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_5__.HeroCardComponent, _hero_property_checkboxes_hero_property_checkboxes_component__WEBPACK_IMPORTED_MODULE_6__.HeroPropertyCheckboxesComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5869:
/*!**********************************************************!*\
  !*** ./src/app/home-dropdown/home-dropdown.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDropdownComponent": () => (/* binding */ HomeDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_hero_hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hero/hero.service */ 5849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function HomeDropdownComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hero_r1);
  }
}
class HomeDropdownComponent {
  constructor(heroService) {
    this.heroService = heroService;
    this.heroSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
      this.heroes = heroes;
      console.log(heroes);
    });
  }
  heroSelected(event) {
    console.log('heroSelected', event.target.value);
    this.heroSelectedEvent.emit(event.target.value);
  }
}
HomeDropdownComponent.ɵfac = function HomeDropdownComponent_Factory(t) {
  return new (t || HomeDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_hero_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService));
};
HomeDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeDropdownComponent,
  selectors: [["app-home-dropdown"]],
  outputs: {
    heroSelectedEvent: "heroSelectedEvent"
  },
  decls: 4,
  vars: 1,
  consts: [[3, "change"], ["selected", "", "disabled", ""], [4, "ngFor", "ngForOf"]],
  template: function HomeDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeDropdownComponent_Template_select_change_0_listener($event) {
        return ctx.heroSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Choose hero");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeDropdownComponent_option_3_Template, 2, 1, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.heroes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5242:
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class LoaderComponent {
  constructor() {
    this.loading = true;
  }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)();
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  inputs: {
    loading: "loading"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "spinner-container", 4, "ngIf"], [1, "spinner-container"], [1, "spinner"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8139:
/*!*******************************************!*\
  !*** ./src/app/pipes/hero-images.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroImagesPipe": () => (/* binding */ HeroImagesPipe)
/* harmony export */ });
/* harmony import */ var _services_hero_HeroImageMappings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hero/HeroImageMappings */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class HeroImagesPipe {
  transform(heroName) {
    const mapping = _services_hero_HeroImageMappings__WEBPACK_IMPORTED_MODULE_0__.heroImageMappings[heroName];
    if (mapping) {
      return {
        largeImage: mapping.largeImage,
        smallImage: mapping.smallImage
      };
    }
  }
}
HeroImagesPipe.ɵfac = function HeroImagesPipe_Factory(t) {
  return new (t || HeroImagesPipe)();
};
HeroImagesPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "heroImages",
  type: HeroImagesPipe,
  pure: true
});

/***/ }),

/***/ 8007:
/*!*************************************!*\
  !*** ./src/app/pipes/round.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundPipe": () => (/* binding */ RoundPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RoundPipe {
  transform(value, args) {
    if (args === 'startingArmor') {
      return value.toFixed(2);
    } else {
      return value;
    }
  }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) {
  return new (t || RoundPipe)();
};
RoundPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "round",
  type: RoundPipe,
  pure: true
});

/***/ }),

/***/ 7241:
/*!******************************************************!*\
  !*** ./src/app/pipes/transformed-properties.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformedPropertiesPipe": () => (/* binding */ TransformedPropertiesPipe)
/* harmony export */ });
/* harmony import */ var _services_property_PropertyMappings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/property/PropertyMappings */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TransformedPropertiesPipe {
  transform(propertyName) {
    const mapping = _services_property_PropertyMappings__WEBPACK_IMPORTED_MODULE_0__.propertyMappings[propertyName];
    if (mapping) {
      return {
        displayName: mapping.displayName,
        icon: mapping.icon
      };
    } else {
      return {
        displayName: propertyName,
        icon: ''
      };
    }
  }
}
TransformedPropertiesPipe.ɵfac = function TransformedPropertiesPipe_Factory(t) {
  return new (t || TransformedPropertiesPipe)();
};
TransformedPropertiesPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "transformedProperties",
  type: TransformedPropertiesPipe,
  pure: true
});

/***/ }),

/***/ 9650:
/*!****************************************************!*\
  !*** ./src/app/services/hero/HeroImageMappings.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroImageMappings": () => (/* binding */ heroImageMappings)
/* harmony export */ });
const heroImageMappings = {
  'Abaddon': {
    largeImage: 'assets/heroes/crops/abaddon.png',
    smallImage: 'assets/heroes/abaddon.png'
  },
  'Alchemist': {
    largeImage: 'assets/heroes/crops/alchemist.png',
    smallImage: 'assets/heroes/alchemist.png'
  },
  'Ancient Apparition': {
    largeImage: 'assets/heroes/crops/ancient_apparition.png',
    smallImage: 'assets/heroes/ancient_apparition.png'
  },
  'Anti-Mage': {
    largeImage: 'assets/heroes/crops/antimage.png',
    smallImage: 'assets/heroes/antimage.png'
  },
  'Arc Warden': {
    largeImage: 'assets/heroes/crops/arc_warden.png',
    smallImage: 'assets/heroes/arc_warden.png'
  },
  'Axe': {
    largeImage: 'assets/heroes/crops/axe.png',
    smallImage: 'assets/heroes/axe.png'
  },
  'Bane': {
    largeImage: 'assets/heroes/crops/bane.png',
    smallImage: 'assets/heroes/bane.png'
  },
  'Batrider': {
    largeImage: 'assets/heroes/crops/batrider.png',
    smallImage: 'assets/heroes/batrider.png'
  },
  'Beastmaster': {
    largeImage: 'assets/heroes/crops/beastmaster.png',
    smallImage: 'assets/heroes/beastmaster.png'
  },
  'Bloodseeker': {
    largeImage: 'assets/heroes/crops/bloodseeker.png',
    smallImage: 'assets/heroes/bloodseeker.png'
  },
  'Bounty Hunter': {
    largeImage: 'assets/heroes/crops/bounty_hunter.png',
    smallImage: 'assets/heroes/bounty_hunter.png'
  },
  'Brewmaster': {
    largeImage: 'assets/heroes/crops/brewmaster.png',
    smallImage: 'assets/heroes/brewmaster.png'
  },
  'Bristleback': {
    largeImage: 'assets/heroes/crops/bristleback.png',
    smallImage: 'assets/heroes/bristleback.png'
  },
  'Broodmother': {
    largeImage: 'assets/heroes/crops/broodmother.png',
    smallImage: 'assets/heroes/broodmother.png'
  },
  'Centaur Warrunner': {
    largeImage: 'assets/heroes/crops/centaur_warrunner.png',
    smallImage: 'assets/heroes/centaur_warrunner.png'
  },
  'Chaos Knight': {
    largeImage: 'assets/heroes/crops/chaos_knight.png',
    smallImage: 'assets/heroes/chaos_knight.png'
  },
  'Chen': {
    largeImage: 'assets/heroes/crops/chen.png',
    smallImage: 'assets/heroes/chen.png'
  },
  'Clinkz': {
    largeImage: 'assets/heroes/crops/clinkz.png',
    smallImage: 'assets/heroes/clinkz.png'
  },
  'Clockwerk': {
    largeImage: 'assets/heroes/crops/clockwerk.png',
    smallImage: 'assets/heroes/clockwerk.png'
  },
  'Crystal Maiden': {
    largeImage: 'assets/heroes/crops/crystal_maiden.png',
    smallImage: 'assets/heroes/crystal_maiden.png'
  },
  'Dark Seer': {
    largeImage: 'assets/heroes/crops/dark_seer.png',
    smallImage: 'assets/heroes/dark_seer.png'
  },
  'Dark Willow': {
    largeImage: 'assets/heroes/crops/dark_willow.png',
    smallImage: 'assets/heroes/dark_willow.png'
  },
  'Dawnbreaker': {
    largeImage: 'assets/heroes/crops/dawnbreaker.png',
    smallImage: 'assets/heroes/dawnbreaker.png'
  },
  'Dazzle': {
    largeImage: 'assets/heroes/crops/dazzle.png',
    smallImage: 'assets/heroes/dazzle.png'
  },
  'Death Prophet': {
    largeImage: 'assets/heroes/crops/death_prophet.png',
    smallImage: 'assets/heroes/death_prophet.png'
  },
  'Disruptor': {
    largeImage: 'assets/heroes/crops/disruptor.png',
    smallImage: 'assets/heroes/disruptor.png'
  },
  'Doom': {
    largeImage: 'assets/heroes/crops/doom.png',
    smallImage: 'assets/heroes/doom.png'
  },
  'Dragon Knight': {
    largeImage: 'assets/heroes/crops/dragon_knight.png',
    smallImage: 'assets/heroes/dragon_knight.png'
  },
  'Drow Ranger': {
    largeImage: 'assets/heroes/crops/drow_ranger.png',
    smallImage: 'assets/heroes/drow_ranger.png'
  },
  'Earth Spirit': {
    largeImage: 'assets/heroes/crops/earth_spirit.png',
    smallImage: 'assets/heroes/earth_spirit.png'
  },
  'Earthshaker': {
    largeImage: 'assets/heroes/crops/earthshaker.png',
    smallImage: 'assets/heroes/earthshaker.png'
  },
  'Elder Titan': {
    largeImage: 'assets/heroes/crops/elder_titan.png',
    smallImage: 'assets/heroes/elder_titan.png'
  },
  'Ember Spirit': {
    largeImage: 'assets/heroes/crops/ember_spirit.png',
    smallImage: 'assets/heroes/ember_spirit.png'
  },
  'Enchantress': {
    largeImage: 'assets/heroes/crops/enchantress.png',
    smallImage: 'assets/heroes/enchantress.png'
  },
  'Enigma': {
    largeImage: 'assets/heroes/crops/enigma.png',
    smallImage: 'assets/heroes/enigma.png'
  },
  'Faceless Void': {
    largeImage: 'assets/heroes/crops/faceless_void.png',
    smallImage: 'assets/heroes/faceless_void.png'
  },
  'Grimstroke': {
    largeImage: 'assets/heroes/crops/grimstroke.png',
    smallImage: 'assets/heroes/grimstroke.png'
  },
  'Gyrocopter': {
    largeImage: 'assets/heroes/crops/gyrocopter.png',
    smallImage: 'assets/heroes/gyrocopter.png'
  },
  'Hoodwink': {
    largeImage: 'assets/heroes/crops/hoodwink.png',
    smallImage: 'assets/heroes/hoodwink.png'
  },
  'Huskar': {
    largeImage: 'assets/heroes/crops/huskar.png',
    smallImage: 'assets/heroes/huskar.png'
  },
  'Invoker': {
    largeImage: 'assets/heroes/crops/invoker.png',
    smallImage: 'assets/heroes/invoker.png'
  },
  'Io': {
    largeImage: 'assets/heroes/crops/io.png',
    smallImage: 'assets/heroes/io.png'
  },
  'Jakiro': {
    largeImage: 'assets/heroes/crops/jakiro.png',
    smallImage: 'assets/heroes/jakiro.png'
  },
  'Juggernaut': {
    largeImage: 'assets/heroes/crops/juggernaut.png',
    smallImage: 'assets/heroes/juggernaut.png'
  },
  'Keeper of the Light': {
    largeImage: 'assets/heroes/crops/keeper_of_the_light.png',
    smallImage: 'assets/heroes/keeper_of_the_light.png'
  },
  'Kunkka': {
    largeImage: 'assets/heroes/crops/kunkka.png',
    smallImage: 'assets/heroes/kunkka.png'
  },
  'Legion Commander': {
    largeImage: 'assets/heroes/crops/legion_commander.png',
    smallImage: 'assets/heroes/legion_commander.png'
  },
  'Leshrac': {
    largeImage: 'assets/heroes/crops/leshrac.png',
    smallImage: 'assets/heroes/leshrac.png'
  },
  'Lich': {
    largeImage: 'assets/heroes/crops/lich.png',
    smallImage: 'assets/heroes/lich.png'
  },
  'Lifestealer': {
    largeImage: 'assets/heroes/crops/lifestealer.png',
    smallImage: 'assets/heroes/lifestealer.png'
  },
  'Lina': {
    largeImage: 'assets/heroes/crops/lina.png',
    smallImage: 'assets/heroes/lina.png'
  },
  'Lion': {
    largeImage: 'assets/heroes/crops/lion.png',
    smallImage: 'assets/heroes/lion.png'
  },
  'Lone Druid': {
    largeImage: 'assets/heroes/crops/lone_druid.png',
    smallImage: 'assets/heroes/lone_druid.png'
  },
  'Luna': {
    largeImage: 'assets/heroes/crops/luna.png',
    smallImage: 'assets/heroes/luna.png'
  },
  'Lycan': {
    largeImage: 'assets/heroes/crops/lycan.png',
    smallImage: 'assets/heroes/lycan.png'
  },
  'Magnus': {
    largeImage: 'assets/heroes/crops/magnus.png',
    smallImage: 'assets/heroes/magnus.png'
  },
  'Marci': {
    largeImage: 'assets/heroes/crops/marci.png',
    smallImage: 'assets/heroes/marci.png'
  },
  'Mars': {
    largeImage: 'assets/heroes/crops/mars.png',
    smallImage: 'assets/heroes/mars.png'
  },
  'Medusa': {
    largeImage: 'assets/heroes/crops/medusa.png',
    smallImage: 'assets/heroes/medusa.png'
  },
  'Meepo': {
    largeImage: 'assets/heroes/crops/meepo.png',
    smallImage: 'assets/heroes/meepo.png'
  },
  'Mirana': {
    largeImage: 'assets/heroes/crops/mirana.png',
    smallImage: 'assets/heroes/mirana.png'
  },
  'Monkey King': {
    largeImage: 'assets/heroes/crops/monkey_king.png',
    smallImage: 'assets/heroes/monkey_king.png'
  },
  'Morphling': {
    largeImage: 'assets/heroes/crops/morphling.png',
    smallImage: 'assets/heroes/morphling.png'
  },
  'Muerta': {
    largeImage: 'assets/heroes/crops/muerta.png',
    smallImage: 'assets/heroes/muerta.png'
  },
  'Naga Siren': {
    largeImage: 'assets/heroes/crops/naga_siren.png',
    smallImage: 'assets/heroes/naga_siren.png'
  },
  'Natures Prophet': {
    largeImage: 'assets/heroes/crops/natures_prophet.png',
    smallImage: 'assets/heroes/natures_prophet.png'
  },
  'Necrophos': {
    largeImage: 'assets/heroes/crops/necrophos.png',
    smallImage: 'assets/heroes/necrophos.png'
  },
  'Night Stalker': {
    largeImage: 'assets/heroes/crops/night_stalker.png',
    smallImage: 'assets/heroes/night_stalker.png'
  },
  'Nyx Assassin': {
    largeImage: 'assets/heroes/crops/nyx_assassin.png',
    smallImage: 'assets/heroes/nyx_assassin.png'
  },
  'Ogre Magi': {
    largeImage: 'assets/heroes/crops/ogre_magi.png',
    smallImage: 'assets/heroes/ogre_magi.png'
  },
  'Omniknight': {
    largeImage: 'assets/heroes/crops/omniknight.png',
    smallImage: 'assets/heroes/omniknight.png'
  },
  'Oracle': {
    largeImage: 'assets/heroes/crops/oracle.png',
    smallImage: 'assets/heroes/oracle.png'
  },
  'Outworld Destroyer': {
    largeImage: 'assets/heroes/crops/outworld_destroyer.png',
    smallImage: 'assets/heroes/outworld_destroyer.png'
  },
  'Pangolier': {
    largeImage: 'assets/heroes/crops/pangolier.png',
    smallImage: 'assets/heroes/pangolier.png'
  },
  'Phantom Assassin': {
    largeImage: 'assets/heroes/crops/phantom_assassin.png',
    smallImage: 'assets/heroes/phantom_assassin.png'
  },
  'Phantom Lancer': {
    largeImage: 'assets/heroes/crops/phantom_lancer.png',
    smallImage: 'assets/heroes/phantom_lancer.png'
  },
  'Phoenix': {
    largeImage: 'assets/heroes/crops/phoenix.png',
    smallImage: 'assets/heroes/phoenix.png'
  },
  'Primal Beast': {
    largeImage: 'assets/heroes/crops/lycan.png',
    smallImage: 'assets/heroes/lycan.png'
  },
  'Puck': {
    largeImage: 'assets/heroes/crops/puck.png',
    smallImage: 'assets/heroes/puck.png'
  },
  'Pudge': {
    largeImage: 'assets/heroes/crops/pudge.png',
    smallImage: 'assets/heroes/pudge.png'
  },
  'Pugna': {
    largeImage: 'assets/heroes/crops/pugna.png',
    smallImage: 'assets/heroes/pugna.png'
  },
  'Queen of Pain': {
    largeImage: 'assets/heroes/crops/queen_of_pain.png',
    smallImage: 'assets/heroes/queen_of_pain.png'
  },
  'Razor': {
    largeImage: 'assets/heroes/crops/razor.png',
    smallImage: 'assets/heroes/razor.png'
  },
  'Riki': {
    largeImage: 'assets/heroes/crops/riki.png',
    smallImage: 'assets/heroes/riki.png'
  },
  'Rubick': {
    largeImage: 'assets/heroes/crops/rubick.png',
    smallImage: 'assets/heroes/rubick.png'
  },
  'Sand King': {
    largeImage: 'assets/heroes/crops/sand_king.png',
    smallImage: 'assets/heroes/sand_king.png'
  },
  'Shadow Demon': {
    largeImage: 'assets/heroes/crops/shadow_demon.png',
    smallImage: 'assets/heroes/shadow_demon.png'
  },
  'Shadow Fiend': {
    largeImage: 'assets/heroes/crops/shadow_fiend.png',
    smallImage: 'assets/heroes/shadow_fiend.png'
  },
  'Shadow Shaman': {
    largeImage: 'assets/heroes/crops/shadow_shaman.png',
    smallImage: 'assets/heroes/shadow_shaman.png'
  },
  'Silencer': {
    largeImage: 'assets/heroes/crops/silencer.png',
    smallImage: 'assets/heroes/silencer.png'
  },
  'Skywrath Mage': {
    largeImage: 'assets/heroes/crops/skywrath_mage.png',
    smallImage: 'assets/heroes/skywrath_mage.png'
  },
  'Slardar': {
    largeImage: 'assets/heroes/crops/slardar.png',
    smallImage: 'assets/heroes/slardar.png'
  },
  'Slark': {
    largeImage: 'assets/heroes/crops/slark.png',
    smallImage: 'assets/heroes/slark.png'
  },
  'Snapfire': {
    largeImage: 'assets/heroes/crops/snapfire.png',
    smallImage: 'assets/heroes/snapfire.png'
  },
  'Sniper': {
    largeImage: 'assets/heroes/crops/sniper.png',
    smallImage: 'assets/heroes/sniper.png'
  },
  'Spectre': {
    largeImage: 'assets/heroes/crops/spectre.png',
    smallImage: 'assets/heroes/spectre.png'
  },
  'Spirit Breaker': {
    largeImage: 'assets/heroes/crops/spirit_breaker.png',
    smallImage: 'assets/heroes/spirit_breaker.png'
  },
  'Storm Spirit': {
    largeImage: 'assets/heroes/crops/storm_spirit.png',
    smallImage: 'assets/heroes/storm_spirit.png'
  },
  'Sven': {
    largeImage: 'assets/heroes/crops/sven.png',
    smallImage: 'assets/heroes/sven.png'
  },
  'Techies': {
    largeImage: 'assets/heroes/crops/techies.png',
    smallImage: 'assets/heroes/techies.png'
  },
  'Templar Assassin': {
    largeImage: 'assets/heroes/crops/templar_assassin.png',
    smallImage: 'assets/heroes/templar_assassin.png'
  },
  'Terrorblade': {
    largeImage: 'assets/heroes/crops/terrorblade.png',
    smallImage: 'assets/heroes/terrorblade.png'
  },
  'Tidehunter': {
    largeImage: 'assets/heroes/crops/tidehunter.png',
    smallImage: 'assets/heroes/tidehunter.png'
  },
  'Timbersaw': {
    largeImage: 'assets/heroes/crops/timbersaw.png',
    smallImage: 'assets/heroes/timbersaw.png'
  },
  'Tinker': {
    largeImage: 'assets/heroes/crops/tinker.png',
    smallImage: 'assets/heroes/tinker.png'
  },
  'Tiny': {
    largeImage: 'assets/heroes/crops/tiny.png',
    smallImage: 'assets/heroes/crops/tiny.png'
  },
  'Treant Protector': {
    largeImage: 'assets/heroes/crops/treant_protector.png',
    smallImage: 'assets/heroes/treant_protector.png'
  },
  'Troll Warlord': {
    largeImage: 'assets/heroes/crops/troll_warlord.png',
    smallImage: 'assets/heroes/troll_warlord.png'
  },
  'Tusk': {
    largeImage: 'assets/heroes/crops/tusk.png',
    smallImage: 'assets/heroes/tusk.png'
  },
  'Underlord': {
    largeImage: 'assets/heroes/crops/underlord.png',
    smallImage: 'assets/heroes/underlord.png'
  },
  'Undying': {
    largeImage: 'assets/heroes/crops/undying.png',
    smallImage: 'assets/heroes/undying.png'
  },
  'Ursa': {
    largeImage: 'assets/heroes/crops/ursa.png',
    smallImage: 'assets/heroes/ursa.png'
  },
  'Vengeful Spirit': {
    largeImage: 'assets/heroes/crops/vengeful_spirit.png',
    smallImage: 'assets/heroes/vengeful_spirit.png'
  },
  'Venomancer': {
    largeImage: 'assets/heroes/crops/venomancer.png',
    smallImage: 'assets/heroes/venomancer.png'
  },
  'Viper': {
    largeImage: 'assets/heroes/crops/viper.png',
    smallImage: 'assets/heroes/viper.png'
  },
  'Visage': {
    largeImage: 'assets/heroes/crops/visage.png',
    smallImage: 'assets/heroes/crops/visage.png'
  },
  'Void Spirit': {
    largeImage: 'assets/heroes/crops/void_spirit.png',
    smallImage: 'assets/heroes/crops/void_spirit.png'
  },
  'Warlock': {
    largeImage: 'assets/heroes/crops/warlock.png',
    smallImage: 'assets/heroes/warlock.png'
  },
  'Weaver': {
    largeImage: 'assets/heroes/crops/weaver.png',
    smallImage: 'assets/heroes/weaver.png'
  },
  'Windranger': {
    largeImage: 'assets/heroes/crops/windranger.png',
    smallImage: 'assets/heroes/windranger.png'
  },
  'Winter Wyvern': {
    largeImage: 'assets/heroes/crops/winter_wyvern.png',
    smallImage: 'assets/heroes/winter_wyvern.png'
  },
  'Witch Doctor': {
    largeImage: 'assets/heroes/crops/witch_doctor.png',
    smallImage: 'assets/heroes/witch_doctor.png'
  },
  'Wraith King': {
    largeImage: 'assets/heroes/crops/wraith_king.png',
    smallImage: 'assets/heroes/crops/wraith_king.png'
  },
  'Zeus': {
    largeImage: 'assets/heroes/crops/zeus.png',
    smallImage: 'assets/heroes/zeus.png'
  }
};

/***/ }),

/***/ 5849:
/*!***********************************************!*\
  !*** ./src/app/services/hero/hero.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroService": () => (/* binding */ HeroService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class HeroService {
  constructor(http) {
    this.http = http;
    this.backendApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl;
  }
  getHero(heroName) {
    const url = `${this.backendApiUrl}/hero/${heroName}`;
    return this.http.get(url);
  }
  getHeroNames() {
    return this.http.get(`${this.backendApiUrl}/heroNames`);
  }
  getHeroPropertyZScore(heroName, propertyName) {
    const url = `${this.backendApiUrl}/hero/${heroName}/${propertyName}`;
    return this.http.get(url);
  }
  getAllHeroesPropertiesZScores() {
    const url = `${this.backendApiUrl}/propertiesZScores`;
    return this.http.get(url);
  }
  getAllHeroesMinMaxPropertiesValues() {
    const url = `${this.backendApiUrl}/minMaxPropertiesValues`;
    return this.http.get(url);
  }
}
HeroService.ɵfac = function HeroService_Factory(t) {
  return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
HeroService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HeroService,
  factory: HeroService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7329:
/*!*******************************************************!*\
  !*** ./src/app/services/property/PropertyMappings.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "propertyMappings": () => (/* binding */ propertyMappings)
/* harmony export */ });
const propertyMappings = {
  startingArmor: {
    displayName: 'Starting Armor',
    icon: 'assets/icons/icon_armor.png'
  },
  startingMagicArmor: {
    displayName: 'Starting Magic Armor',
    icon: 'assets/icons/icon_magic_resist.png'
  },
  startingDamageMin: {
    displayName: 'Starting Damage (Min)',
    icon: 'assets/icons/icon_damage.png'
  },
  startingDamageMax: {
    displayName: 'Starting Damage (Max)',
    icon: 'assets/icons/icon_damage.png'
  },
  startingDamage: {
    displayName: 'Starting Damage',
    icon: 'assets/icons/icon_damage.png'
  },
  attackRate: {
    displayName: 'Attack Rate',
    icon: ''
  },
  attackAnimationPoint: {
    displayName: 'Attack Animation Point',
    icon: ''
  },
  attackAcquisitionRange: {
    displayName: 'Attack Acquisition Range',
    icon: 'assets/icons/icon_attack_range.png'
  },
  attackRange: {
    displayName: 'Attack Range',
    icon: 'assets/icons/icon_attack_range.png'
  },
  primaryAttribute: {
    displayName: 'Primary Attribute',
    icon: 'primary-attribute-icon.png'
  },
  heroPrimaryAttribute: {
    displayName: 'Hero Primary Attribute',
    icon: 'hero-primary-attribute-icon.png'
  },
  strengthBase: {
    displayName: 'Strength (Base)',
    icon: 'strength-icon.png'
  },
  strengthGain: {
    displayName: 'Strength (Gain)',
    icon: 'strength-icon.png'
  },
  intelligenceBase: {
    displayName: 'Intelligence (Base)',
    icon: 'intelligence-icon.png'
  },
  intelligenceGain: {
    displayName: 'Intelligence (Gain)',
    icon: 'intelligence-icon.png'
  },
  agilityBase: {
    displayName: 'Agility (Base)',
    icon: 'agility-icon.png'
  },
  agilityGain: {
    displayName: 'Agility (Gain)',
    icon: 'agility-icon.png'
  },
  hpRegen: {
    displayName: 'HP Regeneration',
    icon: 'hp-regen-icon.png'
  },
  mpRegen: {
    displayName: 'MP Regeneration',
    icon: 'mp-regen-icon.png'
  },
  moveSpeed: {
    displayName: 'Movement Speed',
    icon: 'assets/icons/icon_movement_speed.png'
  },
  moveTurnRate: {
    displayName: 'Turn Rate',
    icon: 'assets/icons/icon_turn_rate.png'
  },
  hpBarOffset: {
    displayName: 'HP Bar Offset',
    icon: 'hp-bar-offset-icon.png'
  },
  visionDaytimeRange: {
    displayName: 'Daytime Vision Range',
    icon: 'assets/icons/icon_vision.png'
  },
  visionNighttimeRange: {
    displayName: 'Nighttime Vision Range',
    icon: 'assets/icons/icon_vision.png'
  }
};

/***/ }),

/***/ 3705:
/*!*******************************************************!*\
  !*** ./src/app/services/property/property.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyService": () => (/* binding */ PropertyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PropertyService {
  constructor() {
    this.showProperties = [{
      name: 'startingArmor',
      checked: true,
      comparisonValue: 0
    }, {
      name: 'startingMagicArmor',
      checked: true
    }, {
      name: 'startingDamage',
      checked: true
    }, {
      name: 'attackRange',
      checked: true
    }, {
      name: 'moveSpeed',
      checked: true
    }, {
      name: 'visionDaytimeRange',
      checked: true
    }];
  }
  setPropertiesValues(data) {
    this.propertiesValues = data;
  }
  getPropertiesValues() {
    return this.propertiesValues;
  }
}
PropertyService.ɵfac = function PropertyService_Factory(t) {
  return new (t || PropertyService)();
};
PropertyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PropertyService,
  factory: PropertyService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7731:
/*!******************************************************!*\
  !*** ./src/app/services/shared/attack-type-icons.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attackTypeIcons": () => (/* binding */ attackTypeIcons)
/* harmony export */ });
const attackTypeIcons = {
  Melee: 'assets/icons/icon_melee.png',
  Ranged: 'assets/icons/icon_ranged.png'
};

/***/ }),

/***/ 1675:
/*!********************************************************!*\
  !*** ./src/app/services/shared/primary-stats-icons.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "primaryStatsIcons": () => (/* binding */ primaryStatsIcons)
/* harmony export */ });
const primaryStatsIcons = {
  0: {
    icon: 'assets/icons/hero_strength.png',
    name: 'STRENGTH'
  },
  1: {
    icon: 'assets/icons/hero_agility.png',
    name: 'AGILITY'
  },
  2: {
    icon: 'assets/icons/hero_intelligence.png',
    name: 'INTELLIGENCE'
  },
  3: {
    icon: 'assets/icons/hero_universal.png',
    name: 'UNIVERSAL'
  }
};

/***/ }),

/***/ 290:
/*!***************************************************************!*\
  !*** ./src/app/services/shared/properties-zscores.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesZScoresService": () => (/* binding */ PropertiesZScoresService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PropertiesZScoresService {
  setPropertiesZScores(data) {
    this.propertiesZScores = data;
  }
  getPropertiesZScoresMap() {
    return this.propertiesZScores;
  }
}
PropertiesZScoresService.ɵfac = function PropertiesZScoresService_Factory(t) {
  return new (t || PropertiesZScoresService)();
};
PropertiesZScoresService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PropertiesZScoresService,
  factory: PropertiesZScoresService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1571:
/*!***************************************************!*\
  !*** ./src/app/services/shared/shared.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SharedService {
  constructor() {
    this.isComparingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isComparing$ = this.isComparingSubject.asObservable();
    this.firstHeroSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.firstHero$ = this.firstHeroSubject.asObservable();
    this.secondHeroSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.secondHero$ = this.secondHeroSubject.asObservable();
  }
  setComparingStatus(isComparing) {
    this.isComparingSubject.next(isComparing);
  }
  setFirstHero(hero) {
    this.firstHeroSubject.next(hero);
  }
  setSecondHero(hero) {
    this.secondHeroSubject.next(hero);
  }
}
SharedService.ɵfac = function SharedService_Factory(t) {
  return new (t || SharedService)();
};
SharedService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SharedService,
  factory: SharedService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  backendApiUrl: 'https://dota-hero-matchup-cfe3a3ef874f.herokuapp.com'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map