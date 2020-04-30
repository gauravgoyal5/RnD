import "jquery";
import * as angular from 'angular';

//import '@progress/kendo-ui/';
import "kendo-ui";

import {TestComponent, TestController} from './test.component';


const greetingApp: angular.IModule = angular.module('greeting-webpart-app', ['kendo.directives']);



greetingApp
   .controller('TestController', TestController);

  greetingApp
  .component(TestComponent.selector, TestComponent);
