class LocationsController {

  constructor(UserService, LocationsService) {
    this._UserService = UserService;
    this._LocationsService = LocationsService;

    this._UserService
    .isLoggedIn()
      .then((response) => {
        this.user = response;
        this.locations = this._LocationsService.getLocations(this.user);
      })
      
      .catch((error) => {
        this._$state.go("login");
      });

  }
}

export default LocationsController;
