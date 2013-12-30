angular.module('openart')
    .controller('LovelyCtrl',['$scope', 'BritishLibraryProjectionService', 'Header', function ($scope, projectionService, header) {
        console.log('in loved ctrl');

        header.title('-My Lovely Images-');
        header.subTitle('List of your favorites images');

        $scope.images = projectionService.loved();
    }]);