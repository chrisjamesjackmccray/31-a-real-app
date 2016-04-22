class LocationsController {

  constructor($firebaseArray) {
    let ref = new Firebase("https://29-auth-services.firebaseio.com/");
    this._UserService = $firebaseArray(ref);



    login() {
      this._UserService
        .login(this.user)
        .then((response) => {
          this._$state.go("profile");
        });
    }

    this.addresses = [ {
        address: "500 President Clinton Ave",
        city: "Little Rock",
        State: "Arkansas"
        }

        {
          address: "400 President Clinton Ave",
        }

        {
          address: "425 W Capital Ave",
        }

      ]

    }

      yellAddress(e) {

        alert(`Hey, I'm at ${this.addresses[this.id].address}`);
      }

        clickMarker() {

      }
    }
  }
}

export default LocationsController;
