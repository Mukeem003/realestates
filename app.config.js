angular.module("myApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<main-component></main-component>",
      })
      .when("/home", {
        template: "<main-component></main-component>",
      })
      .when("/contactUs", {
        template: "<contact-us></contact-us>",
      })
      .when("/aboutUs", {
        template: "<about-us></about-us>",
      })
      .when("/myProperties", {
        template: "<my-properties></my-properties>",
      })
      .otherwise("/home");
  },
]);
