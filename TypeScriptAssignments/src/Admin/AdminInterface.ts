interface AdminInterface {
  name: string;
  password: string;
  phoneNo: number;
  emailId: string;

  login(name: string, password: string): boolean;
  addRestaurant(RId: number | string, RestaurantName: string, address: string): Object;
  addMenu(dishId: number | string, dishName: string, dishPrice: number): Object;
}
