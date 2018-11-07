(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  font-size: large;\n  background-color: rgb(223, 213, 213);\n  color: rgb(0, 0, 0);\n  \n}\n\n.navbar-brand{\n  font-size: large;\n  background-color: rgb(223, 213, 213);\n  color: rgb(0, 0, 0);\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'MyTVGuide Product Management';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-root',
            template: "\n    <nav class='navbar navbar-expand navbar-light bg-light'>\n        <a class='navbar-brand'>{{pageTitle}}</a>\n        <ul class='nav nav-pills'>\n          <li><a class='nav-link' routerLinkActive='active'\n                 [routerLink]=\"['/welcome']\">Home</a>\n          </li>\n          <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/products']\">Product List</a>\n          </li>\n          <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/products', 0, 'edit']\">Add Product</a>\n          </li>\n        </ul>\n    </nav>\n    <div class='container'>\n      <router-outlet></router-outlet>\n    </div>\n    ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _products_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product.module */ "./src/app/products/product.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),
                _products_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/welcome.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/welcome.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n  <div class=\"card-body\">\n    <div class=\"container-fluid\">\n      <div class=\"text-center\">\n        <img src=\"./assets/images/logo2.jpg\"\n             class=\"img-responsive center-block\"\n             style=\"max-height:300px;padding-bottom:50px\" />\n      </div>\n\n      <div class=\"text-center\">Developed by:</div>\n      <div class=\"text-center\">\n        <h3>Saquib Khan</h3>\n      </div>\n\n      <div class=\"text-center\">@SaquibKhan</div>\n      <div class=\"text-center\">\n        <a href=\"https://github.com/saqkhan1995\">https://github.com/saqkhan1995</a>\n      </div>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/home/welcome.component.html")
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/products/product-data.ts":
/*!******************************************!*\
  !*** ./src/app/products/product-data.ts ***!
  \******************************************/
/*! exports provided: ProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductData", function() { return ProductData; });
var ProductData = /** @class */ (function () {
    function ProductData() {
    }
    ProductData.prototype.createDb = function () {
        var products = [
            {
                'id': 1,
                'productName': 'Game of Thrones',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2018',
                'description': 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/81SEA1FUdNL._SL1500_.jpg',
                'tags': ['HBO', 'Fantasy', 'TV', 'Season']
            },
            {
                'id': 2,
                'productName': 'Vikings',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2018',
                'description': 'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'https://m.media-amazon.com/images/M/MV5BNDYyNzk1NzYwOF5BMl5BanBnXkFtZTgwMTQ0Nzc4MzI@._V1_QL50_SY1000_CR0,0,738,1000_AL_.jpg'
            },
            {
                'id': 5,
                'productName': 'The Big Bang Theory',
                'productCode': 'TBX-0048',
                'releaseDate': 'May 21, 2018',
                'description': 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
                'tags': ['TV', 'Comedy', 'Season']
            },
            {
                'id': 8,
                'productName': 'Into the Badlands',
                'productCode': 'TBX-0022',
                'releaseDate': 'May 15, 2018',
                'description': 'A mighty warrior and a young boy search for enlightenment in a ruthless territory controlled by feudal barons.',
                'price': 11.55,
                'starRating': 3.7,
                'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/916oynxCGlL._RI_SX380_.jpg'
            },
            {
                'id': 10,
                'productName': 'Narcos',
                'productCode': 'GMG-0042',
                'releaseDate': 'October 15, 2018',
                'description': 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'http://idora.gazetevatan.com/vatanmediafile/Haber598x362/2016/09/09/narcos-3-ve-4-sezonlari-icin-hayranlarina-mujde--2386545.Jpeg'
            }
        ];
        return { products: products };
    };
    return ProductData;
}());



/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header'\n       *ngIf='product'>\n    {{pageTitle + ': ' + product.productName}}\n  </div>\n\n  <div class='card-body'\n       *ngIf='product'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-3'>Name:</div>\n          <div class='col-md-6'>{{product.productName}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Code:</div>\n          <div class='col-md-6'>{{product.productCode}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Description:</div>\n          <div class='col-md-6'>{{product.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Availability:</div>\n          <div class='col-md-6'>{{product.releaseDate}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Price:</div>\n          <div class='col-md-6'>{{product.price|currency:'USD':'symbol'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>5 Star Rating:</div>\n          <div class='col-md-6'>\n            <pm-star [rating]='product.starRating'>\n            </pm-star>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Tags:</div>\n          <div class=\"col-md-6\">{{product.tags}}</div>\n        </div>\n      </div>\n\n      <div class='col-md-4'\n           *ngIf=\"product.imageUrl\">\n        <img class='center-block img-responsive'\n             [style.width.px]='200'\n             [style.margin.px]='2'\n             [src]='product.imageUrl'\n             [title]='product.productName'>\n      </div>\n    </div>\n\n    <div class='row'>\n      <div class=\"col-md-1\">\n        <button class='btn btn-outline-secondary'\n                style='width:80px'\n                (click)='onBack()'>\n          <i class='fa fa-chevron-left'></i> Back\n        </button>\n      </div>\n      <div class=\"col-md-1\">\n        <button class=\"btn btn-outline-primary\"\n                style=\"width:80px\"\n                [routerLink]=\"['/products', product.id, 'edit']\">\n          Edit\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class='alert alert-danger'\n       *ngIf='errorMessage'>{{errorMessage}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/products/product-detail.guard.ts ***!
  \**************************************************/
/*! exports provided: ProductDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailGuard", function() { return ProductDetailGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailGuard = /** @class */ (function () {
    function ProductDetailGuard(router) {
        this.router = router;
    }
    ProductDetailGuard.prototype.canActivate = function (next, state) {
        var id = +next.paramMap.get('id');
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    };
    ProductDetailGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductDetailGuard);
    return ProductDetailGuard;
}());



/***/ }),

/***/ "./src/app/products/product-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n    <form novalidate\n          autocomplete=\"off\"\n          (ngSubmit)=\"saveProduct()\"\n          [formGroup]=\"productForm\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"productNameId\">Product Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"productNameId\"\n                 type=\"text\"\n                 placeholder=\"Name (required)\"\n                 formControlName=\"productName\"\n                 [ngClass]=\"{'is-invalid': displayMessage.productName }\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.productName}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"productCodeId\">Product Code</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"productCodeId\"\n                 type=\"text\"\n                 placeholder=\"Code (required)\"\n                 formControlName=\"productCode\"\n                 [ngClass]=\"{'is-invalid': displayMessage.productCode}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.productCode}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"starRatingId\">Star Rating (1-5)</label>\n\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"starRatingId\"\n                 type=\"text\"\n                 placeholder=\"Rating (1-5)\"\n                 formControlName=\"starRating\"\n                 [ngClass]=\"{'is-invalid': displayMessage.starRating}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.starRating}}\n          </span>\n        </div>\n      </div>\n\n      <div formArrayName=\"tags\">\n        <div class=\"row\">\n          <div class=\"col-md-1\">\n            <button class=\"btn btn-outline-secondary\"\n                    type=\"button\"\n                    (click)=\"addTag()\">Add Tag\n            </button>\n          </div>\n        </div>\n        <div class=\"form-group row\"\n             *ngFor=\"let tag of tags.controls; let i=index\">\n          <label class=\"col-md-2 col-form-label\"\n                 [attr.for]=\"i\">Tag</label>\n\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   [id]=\"i\"\n                   type=\"text\"\n                   placeholder=\"Tag\"\n                   [formControlName]=\"i\" />\n          </div>\n          <button class=\"col-md-1 btn btn-outline-warning\"\n                  type=\"button\"\n                  (click)=\"deleteTag(i)\">Delete Tag\n          </button>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"descriptionId\">Description</label>\n\n        <div class=\"col-md-8\">\n          <textarea class=\"form-control\"\n                    id=\"descriptionId\"\n                    placeholder=\"Description\"\n                    rows=3\n                    formControlName=\"description\"\n                    [ngClass]=\"{'is-invalid': displayMessage.description}\"></textarea>\n          <span class=\"invalid-feedback\">\n            {{ displayMessage.description}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-1\">\n          <button class=\"btn btn-primary\"\n                  style='width:80px'\n                  type=\"submit\"\n                  [disabled]=\"!productForm.valid || !productForm.dirty\">\n            Save\n          </button>\n        </div>\n        <div class=\"col-md-1\">\n          <button class=\"btn btn-outline-secondary\"\n                  style='width:80px'\n                  type=\"button\"\n                  [routerLink]=\"['/products']\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col-md-1\">\n          <button class=\"btn btn-outline-warning\"\n                  style='width:80px'\n                  type=\"button\"\n                  (click)=\"deleteProduct()\">\n            Delete\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class='alert alert-danger'\n       *ngIf='errorMessage'>{{errorMessage}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/product-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-edit.component.ts ***!
  \****************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _shared_number_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/number.validator */ "./src/app/shared/number.validator.ts");
/* harmony import */ var _shared_generic_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/generic-validator */ "./src/app/shared/generic-validator.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(fb, route, router, productService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }
        };
        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_7__["GenericValidator"](this.validationMessages);
    }
    Object.defineProperty(ProductEditComponent.prototype, "tags", {
        get: function () {
            return this.productForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this.fb.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            productCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            starRating: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidators"].range(1, 5)],
            tags: this.fb.array([]),
            description: ''
        });
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, [this.productForm.valueChanges].concat(controlBlurs)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(800)).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
    };
    ProductEditComponent.prototype.deleteTag = function (index) {
        this.tags.removeAt(index);
        this.tags.markAsDirty();
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.displayProduct(product); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.displayProduct = function (product) {
        if (this.productForm) {
            this.productForm.reset();
        }
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
        // Update the data on the form
        this.productForm.patchValue({
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description
        });
        this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.productForm.valid) {
            if (this.productForm.dirty) {
                // Copy over all of the original product properties
                // Then copy over the values from the form
                // This ensures values not on the form, such as the Id, are retained
                var p = __assign({}, this.product, this.productForm.value);
                if (p.id === 0) {
                    this.productService.createProduct(p)
                        .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                }
                else {
                    this.productService.updateProduct(p)
                        .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                }
            }
            else {
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.productForm.reset();
        this.router.navigate(['/products']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Array)
    ], ProductEditComponent.prototype, "formInputElements", void 0);
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/products/product-edit.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/products/product-edit.guard.ts":
/*!************************************************!*\
  !*** ./src/app/products/product-edit.guard.ts ***!
  \************************************************/
/*! exports provided: ProductEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditGuard", function() { return ProductEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductEditGuard = /** @class */ (function () {
    function ProductEditGuard() {
    }
    ProductEditGuard.prototype.canDeactivate = function (component) {
        if (component.productForm.dirty) {
            var productName = component.productForm.get('productName').value || 'New Product';
            return confirm("Navigate away and lose all changes to " + productName + "?");
        }
        return true;
    };
    ProductEditGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductEditGuard);
    return ProductEditGuard;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {\n  color: rgb(12, 12, 12);\n}\n\n"

/***/ }),

/***/ "./src/app/products/product-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header'>\n    {{pageTitle}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-2'>Filter by:</div>\n      <div class='col-md-4'>\n        <input type='text'\n               [(ngModel)]='listFilter' />\n      </div>\n    </div>\n    <div class='row'\n         *ngIf='listFilter'>\n      <div class='col-md-6'>\n        <h4>Filtered by: {{listFilter}}</h4>\n      </div>\n    </div>\n    <div class='table-responsive'>\n      <table class='table'\n             *ngIf='products && products.length'>\n        <thead>\n          <tr>\n            <th>\n              <button class='btn btn-primary'\n                      (click)='toggleImage()'>\n                {{showImage ? 'Hide' : 'Show'}} Image\n              </button>\n            </th>\n            <th>Product</th>\n            <th>Code</th>\n            <th>Available</th>\n            <th>Price</th>\n            <th>5 Star Rating</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let product of filteredProducts'>\n            <td>\n              <img *ngIf='showImage && product.imageUrl'\n                   [src]='product.imageUrl'\n                   [title]='product.productName'\n                   [style.width.px]='imageWidth'\n                   [style.margin.px]='imageMargin'>\n            </td>\n            <td>\n              <a [routerLink]=\"['/products', product.id]\">\n                {{ product.productName }}\n              </a>\n            </td>\n            <td>{{ product.productCode | lowercase }}</td>\n            <td>{{ product.releaseDate }}</td>\n            <td>{{ product.price | currency:'USD':'symbol':'1.2-2' }}</td>\n            <td>\n              <pm-star [rating]='product.starRating'\n                       (ratingClicked)='onRatingClicked($event)'>\n              </pm-star>\n            </td>\n            <td>\n              <a class=\"btn btn-primary\"\n                 [routerLink]=\"['/products', product.id, 'edit']\">\n                Edit\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div *ngIf='errorMessage'\n     class='alert alert-danger'>\n  Error: {{ errorMessage }}\n</div>"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredProducts = [];
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.filteredProducts = _this.products;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _product_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-data */ "./src/app/products/product-data.ts");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony import */ var _product_detail_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-detail.guard */ "./src/app/products/product-detail.guard.ts");
/* harmony import */ var _product_edit_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-edit.guard */ "./src/app/products/product-edit.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Imports for loading & configuring the in-memory web api







var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["InMemoryWebApiModule"].forRoot(_product_data__WEBPACK_IMPORTED_MODULE_5__["ProductData"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'products', component: _product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"] },
                    {
                        path: 'products/:id',
                        canActivate: [_product_detail_guard__WEBPACK_IMPORTED_MODULE_9__["ProductDetailGuard"]],
                        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"]
                    },
                    {
                        path: 'products/:id/edit',
                        canDeactivate: [_product_edit_guard__WEBPACK_IMPORTED_MODULE_10__["ProductEditGuard"]],
                        component: _product_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditComponent"]
                    },
                ])
            ],
            declarations: [
                _product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _product_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditComponent"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        if (id === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.initializeProduct());
        }
        var url = this.productsUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('getProduct: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.createProduct = function (product) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        product.id = null;
        return this.http.post(this.productsUrl, product, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('createProduct: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('deleteProduct: ' + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.updateProduct = function (product) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.productsUrl + "/" + product.id;
        return this.http.put(url, product, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return console.log('updateProduct: ' + product.id); }), 
        // Return the product on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return product; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ProductService.prototype.initializeProduct = function () {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            tags: [''],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/generic-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/generic-validator.ts ***!
  \*********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = /** @class */ (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    GenericValidator.prototype.getErrorCount = function (container) {
        var errorCount = 0;
        for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                    console.log(errorCount);
                }
            }
        }
        return errorCount;
    };
    return GenericValidator;
}());



/***/ }),

/***/ "./src/app/shared/number.validator.ts":
/*!********************************************!*\
  !*** ./src/app/shared/number.validator.ts ***!
  \********************************************/
/*! exports provided: NumberValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidators", function() { return NumberValidators; });
var NumberValidators = /** @class */ (function () {
    function NumberValidators() {
    }
    NumberValidators.range = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    return NumberValidators;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star.component */ "./src/app/shared/star.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"]
            ],
            exports: [
                _star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n  overflow: hidden;\n}\ndiv {\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/shared/star.component.html":
/*!********************************************!*\
  !*** ./src/app/shared/star.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\n     [style.width.px]=\"starWidth\"\n     [title]=\"rating\"\n     (click)=\"onClick()\">\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.rating = 0;
        this.starWidth = 0;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\apps\APMF\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map