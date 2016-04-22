function config($stateProvider) {
  $stateProvider
  .state("locations", {
    url: '/locations',
    controller: 'LocationsController as LocationsCtrl'
    template: require('./view.html')
  });
}

export default config;
