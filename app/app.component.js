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
var item_1 = require('./models/item');
var config_1 = require('./config');
var AppComponent = (function () {
    function AppComponent() {
        this.title = config_1.Config.APP_TITLE;
        this.version = config_1.Config.APP_VERSION;
        this.collection = [
            new item_1.Item({ reference: '1234', name: 'Thomas', state: 0 }),
            new item_1.Item({ reference: '3456', name: 'Gabby', state: 1 }),
            new item_1.Item({ reference: '5678', name: 'Elise', state: 2 })
        ];
        this.resetNewItem();
    }
    AppComponent.prototype.getDetails = function (event, param) {
        event.preventDefault();
        var element = event.target || event.srcElement || event.currentTarget;
        console.log(param);
    };
    AppComponent.prototype.creatObject = function () {
        this.collection.push(this.newItem);
        this.resetNewItem();
    };
    AppComponent.prototype.resetNewItem = function () {
        this.newItem = new item_1.Item({ reference: '', name: '', state: 0 });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            //styles: ['.state-0 { color:red; }','.state-1 { color:orange; }','.state-2 { color:green; }']
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map