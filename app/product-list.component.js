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
var ProductsList = (function () {
    function ProductsList() {
        this.onProductSelected = new core_1.EventEmitter();
    }
    ProductsList.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };
    ProductsList.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    };
    ProductsList = __decorate([
        core_1.Component({
            selector: 'products-list',
            inputs: ['productList'],
            outputs: ['onProductSelected'],
            template: "\n\t\t<div class=\"ui items\">\n\t\t<product-row\n\t\t*ngFor=\"let myProduct of productList\"\n\t\t[product]=\"myProduct\"\n\t\t(click)='clicked(myProduct)'\n\t\t[class.selected]=\"isSelected(myProduct)\">\n\t\t</product-row>\n\t\t</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsList);
    return ProductsList;
}());
exports.ProductsList = ProductsList;
//# sourceMappingURL=product-list.component.js.map