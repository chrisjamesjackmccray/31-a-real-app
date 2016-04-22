class LocationsController {

  constructor($firebaseArray) {
    let ref = new Firebase("https://29-auth-services.firebaseio.com/");
    this.list = $firebaseArray(ref);
    this.random = "";
    this.item = "";



    .isLoggedIn()
      .then((response) => {
        this.user = response;
      })
      .catch((error) => {
        this._$state.go("login");
    })
  }
}

export default LocationsController;









//   this.addresses = [ {
//       address: "500 President Clinton Ave",
//       city: "Little Rock",
//       State: "Arkansas"
//       }
//
//       {
//         address: "400 President Clinton Ave",
//       }
//
//       {
//         address: "425 W Capital Ave",
//       }
//
//     ]
//
//   }
//
//     yellAddress(e) {
//
//       alert(`Hey, I'm at ${this.addresses[this.id].address}`);
//     }
//
//     clickMarker() {
//
//     }
//   }
//
//   export default LocationsController
//
//
// }
