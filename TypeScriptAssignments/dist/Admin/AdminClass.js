"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
var RestaurantClass_1 = require("../Restaurant/RestaurantClass");
var MenuClass_1 = require("../Menu/MenuClass");
var Admin = /** @class */ (function () {
    function Admin(name, password, phoneNo, emailId) {
        this.name = name;
        this.password = password;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
    }
    Admin.prototype.login = function (name, password) {
        if (name == this.name && password == this.password) {
            return true;
        }
        else
            return false;
    };
    Admin.prototype.addRestaurant = function (RId, RestaurantName, address) {
        var newRestaurant = new RestaurantClass_1.Restaurant(RId, RestaurantName, address);
        return newRestaurant;
    };
    Admin.prototype.addMenu = function (dishId, dishName, dishPrice) {
        var menu = new MenuClass_1.Menu(dishId, dishName, dishPrice);
        return menu;
    };
    return Admin;
}());
exports.Admin = Admin;
