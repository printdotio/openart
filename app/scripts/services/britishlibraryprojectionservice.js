angular.module('openart')
    .factory('BritishLibraryProjectionService',  function () {
        return {
            project:function(data){
                if(data && data.query && data.query.results && data.query.results.photo){
                    return data.query.results.photo.map(function(d){
                        return {
                            title: d.title,
                            thumbUrl: d.url_s,
                            imageUrl:d.url_l,
                        };
                    });
                }
            }
        };
    });
