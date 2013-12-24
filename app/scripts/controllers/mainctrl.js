angular.module('openart')
    .controller('MainCtrl',['$scope','$routeParams','BritishLibraryApi','BritishLibraryProjectionService', function ($scope,$routeParams,britishLibraryApi, bProjector) {
        console.log('in main ctrl');
        $scope.images = [];
        $scope.page = parseInt($routeParams.page, 10) || 1;

        var onPageChange = function(page){
            if (page == void 0){
                return;
            }

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