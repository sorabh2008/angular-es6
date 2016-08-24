import angular from 'angular';
import HomeController from './components/home/HomeController';
import EmployeeService from './components/home/service/EmployeeService';

angular.module('myApp',[])
.controller('HomeController', HomeController)
.service('EmployeeService',EmployeeService);