angular.module('openart').directive('ngHoverPanel', function() {
    return {
        link: function(scope, element) {
            element.bind('mouseenter', function() {
                element.children('.panel').removeClass('hide')
            }).bind('mouseleave', function() {
                element.children('.panel').addClass('hide')
            })
        }
    }
});