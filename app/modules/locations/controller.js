class LocationsController {

  constructor(UserService) {
    this._UserService = UserService;

    this._UserService
    .isLoggedIn()
      .then((response) => {
        this.user = response;
      })
      .catch((error) => {
        this._$state.go("login");
      });

  }

    // this.address = [ {
    //     address: "11600 N Rodney Parham Rd Ste B",
    //     city: "Little Rock",
    //     State: "Arkansas"
    //     }
    //
    //     {
    //       address: "11410 North Rodney Parham Rd",
    //       city: "Little Rock",
    //       State: "Arkansas"
    //     }
    //
    //     {
    //       address: "Valley Village Shopping Center, 11319 N Rodney Parham Rd",
    //       city: "Little Rock",
    //       State: "Arkansas"
    //     }
    //
    //   ]
    //
    // }

      // yellAddress(e) {
      //
      //   alert(`Hey, I'm at ${this.addresses[this.id].address}`);
      // }
      //
      //   clickMarker() {
      //
      // }
  //   }
  // }
}

export default LocationsController;
