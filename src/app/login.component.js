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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.data = {
            username: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var userdata = localStorage.getItem('LMSUSER');
        if (userdata)
            this.router.navigate(['/home']);
    };
    LoginComponent.prototype.formSubmit = function () {
        var _this = this;
        this.LoginService.doLogin(this.data)
            .then(function (data) {
            localStorage.setItem('LMSUSER', JSON.stringify(data));
            _this.router.navigate(['/home']);
        })
            .catch(function (err) {
            _this.error = err.error;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'Login-page',
        template: "\n   <h1>Login Here</h1>\n   <form (ngSubmit)=\"formSubmit()\">\n    <div>\n      <label>Username:</label>\n      <input type=\"text\" id=\"uname\" name=\"username\" [(ngModel)]=\"data.username\"/>\n    </div>\n    <div>\n      <label>Username:</label>\n      <input type=\"text\" id=\"pwd\" name=\"password\" [(ngModel)]=\"data.password\"/>\n    </div>\n    <div>{{error}}</div>\n    <button type=\"submit\">Login</button>\n   </form>\n  ",
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router, login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map