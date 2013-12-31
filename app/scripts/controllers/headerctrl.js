angular.module('openart')
    .controller('HeaderCtrl',['$scope', 'Header', function ($scope, header) {
    	$scope.header = header;
        $scope.goToCart = function(){
          PIO.open({
              goTo:'tpl-cart'
          });
        };
    }]);