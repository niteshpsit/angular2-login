"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DisplayTableComponent = (function () {
    function DisplayTableComponent() {
        this.tabledata = [{ name: "nitesh", age: 5 }, { name: "rahul", age: 45 }];
        this.tableheader = ["name", "age"];
    }
    return DisplayTableComponent;
}());
DisplayTableComponent = __decorate([
    core_1.Component({
        selector: 'display-table',
        template: "\n   <h3>Table</h3>\n   <my-table [data]=\"tabledata\" [headers]=\"tableheader\"></my-table>\n  "
    })
], DisplayTableComponent);
exports.DisplayTableComponent = DisplayTableComponent;
//# sourceMappingURL=displaytable.component.js.map