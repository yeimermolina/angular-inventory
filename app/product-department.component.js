"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
* @ProductDepartment: A component to show the breadcrumbs to a
* Product's department
*/
var ProductDepartment = (function () {
    function ProductDepartment() {
    }
    ProductDepartment = __decorate([
        core_1.Component({
            selector: 'product-department',
            inputs: ['product'],
            template: "\n<div class=\"product-department\">\n<span *ngFor=\"let name of product.department; let i=index\">\n<a href=\"#\">{{ name }}</a>\n<span>{{i < (product.department.length-1) ? '>' : ''}}</span>\n</span>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDepartment);
    return ProductDepartment;
}());
exports.ProductDepartment = ProductDepartment;
//# sourceMappingURL=product-department.component.js.map