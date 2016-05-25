(function() {
  'use strict';

  angular
    .module('tutorial2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
