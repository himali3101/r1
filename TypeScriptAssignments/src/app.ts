import { Admin } from "./Admin/AdminClass";
import { User } from "./User/UserClass";
import { Menu } from "./Menu/MenuClass";

console.log("********Welcome***********");


//create a Admin
var admin = new Admin("Himali", "himali123", 9001020211, "himali123@gmail.com");

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

  var user = new User();
  var order = user.order("dosa", menu);
} else {
  console.log("Invalid Login");
}
