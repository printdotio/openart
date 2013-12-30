angular.module('openart')
    .controller('MainCtrl',['$scope','$routeParams','BritishLibraryApi','BritishLibraryProjectionService', 'Header', function ($scope,$routeParams,britishLibraryApi, bProjector, header) {
        console.log('in main ctrl');

        header.title('-Print Your Art-');
        header.subTitle('Select your favorite');

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