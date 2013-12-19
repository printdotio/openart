angular.module('openart')
    .factory('BritishLibraryApi', ['$http', function ($http) {
        return {
            getPage:function(page){
                return $http({method:"GET",url:'/api/british-library/'+page});
            }
        };
    }]);
