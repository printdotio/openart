/**
 * Created by micah on 12/31/13.
 */
angular.module('openart')
    .factory('Widget',['BritishLibraryProjectionService', function (projectionService) {
        return {
            launch:function(){
                var imgs = projectionService.loved().map(function(i){
                    return i.imageUrl;
                });
                PIO.open({
                    images:imgs
                });
            }
        };

    }]);