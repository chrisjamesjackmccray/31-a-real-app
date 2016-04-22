function config($stateProvider) {
  $stateProvider
  .state("locations", {
    url: '/locations',
    controller: 'LocationsController as LocationsCtrl'
    template: require('./view.locations.html')
  });
}

export default config;
