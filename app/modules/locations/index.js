import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

let locations = angular.module('tiy.locations', []);

locations.config(config);
locations.controller('LocationsController', controller);
// wire up the service


export default locations;
