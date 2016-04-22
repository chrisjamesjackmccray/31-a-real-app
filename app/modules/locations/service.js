class LocationsService {
  constructor($firebaseArray) {
    this.ref = new Firebase("https://29-auth-services.firebaseio.com/");
  }

  getLocations(user) {
    this.locations = this._$firebaseArray(this.ref.child('users').child(user.uid).child('locations'));
    return this.locations;
  }

}

new() {
return {
   address: "",
   city: "",
   State: ""
};

all() {
  return this.locations;
}

add(item) {
  this.locations.$add(item);
}

export default LocationsService
