"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminClass_1 = require("./Admin/AdminClass");
var UserClass_1 = require("./User/UserClass");
console.log("********Welcome***********");
//create a Admin
var admin = new AdminClass_1.Admin("Himali", "himali123", 9001020211, "himali123@gmail.com");
var loginResult = admin.login("Himali", "himali123");
if (loginResult) {
    console.log("Login Successful as a Admin!!!");
    var restaurant = admin.addRestaurant(101, "Holiday In", "pune");
    var menu = [
        admin.addMenu(1, "paratha", 50),
        admin.addMenu(2, "dosa", 40),
        admin.addMenu(3, "pizza", 90),
    ];
    console.log(menu);
    var user = new UserClass_1.User();
    var order = user.order("dosa", menu);
}
else {
    console.log("Invalid Login");
}
