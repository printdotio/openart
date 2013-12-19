angular.module('openart')
    .controller('MainCtrl',['$scope','$routeParams','BritishLibraryApi','BritishLibraryProjectionService', function ($scope,$routeParams,britishLibraryApi, bProjector) {
        console.log('in main ctrl');
        $scope.images = [];
        $scope.page = 0;

        var onPageChange = function(page){
            britishLibraryApi.getPage(page)
                .success(function(data){
                    $scope.images = bProjector.project(data);
                });
        };

        $scope.$watch('page',onPageChange);
        $scope.$watch('$routeParams',onPageChange)
        

        //gets called on init
        //onPageChange(0);
    }]);
