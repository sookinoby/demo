(function() {
  'use strict';

  angular
    .module('tutorial2')
    .controller('TutorialController', TutorialController);

  /** @ngInject */
  function TutorialController($scope,$timeout, webDevTec, toastr,$log) {
    var vm = this;
    this.text1 = "text12";
    $scope.text2 = "some more text";
    $log.debug("")
    this.enable = true;


    this.flip = function () {
      $log.debug("flip called");
      return this.enable = !this.enable;
    };
    $log.debug($scope);
    $log.debug(this);

  }
})();
