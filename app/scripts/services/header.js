angular.module('openart')
    .factory('Header', function () {
        var _title = '', 
            _subTitle = '';

        return {
            title: function(){
                if (arguments.length){
                    _title = arguments[0];
                } else {
                    return _title;
                }
            },

            subTitle: function(){
                if (arguments.length){
                    _subTitle = arguments[0];
                } else {
                    return _subTitle;
                }
            },
        };
    });
