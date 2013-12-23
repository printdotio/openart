angular.module('openart')
    .controller('MainCtrl',['$scope','$routeParams','BritishLibraryApi','BritishLibraryProjectionService', 'localStorageService', function ($scope,$routeParams,britishLibraryApi, bProjector, localStorageService) {
        console.log('in main ctrl');
        $scope.images = [];
        $scope.page = $routeParams.page || 0;

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