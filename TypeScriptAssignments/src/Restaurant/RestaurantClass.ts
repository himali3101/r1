export class Restaurant implements RestaurantInterface {
  RId: string | number;
  RestaurantName: string;
  address: string;

  constructor(RId: number | string, RestaurantName: string, address: string) {
    this.RId = RId;
    this.RestaurantName = RestaurantName;
    this.address = address;
    console.log("Restaurant added ");
  }
}
