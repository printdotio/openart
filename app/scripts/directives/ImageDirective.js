angular.module('openart')
    .factory('image',  function () {
        return {
            restrict:'E',
            scope:{
                data:'@'
            },
            template:'<p>hi</p>',
            link:function(scope,el,attrs){

            }
        };
    });
