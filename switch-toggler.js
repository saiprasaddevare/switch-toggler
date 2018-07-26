DemoApp.directive('switchToggler',[
  function() {

    return {
      restrict: 'E',
      scope: {
        toggleValue: '=ngModel'
      },
      require: 'ngModel',
      templateUrl: 'switch.html'
    };
  }
]);
