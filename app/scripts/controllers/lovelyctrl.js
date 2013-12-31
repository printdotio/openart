angular.module('openart')
    .controller('LovelyCtrl',['$scope', 'BritishLibraryProjectionService', 'Header','Widget', function ($scope, projectionService, header,widget) {
        console.log('in loved ctrl');

        header.title('-My Lovely Images-');
        header.subTitle('List of your favorites images');

        $scope.images = projectionService.loved();

        $scope.launch = function(){
            widget.launch();
        };
    }]);