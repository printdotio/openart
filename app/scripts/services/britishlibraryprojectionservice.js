angular.module('openart')
    .factory('BritishLibraryProjectionService',  ['localStorageService', function (localStorageService) {
        return {
            project:function(data){
                if(data && data.query && data.query.results && data.query.results.photo){
                    return data.query.results.photo.map(function(d){
                        return {
                            title: d.title,
                            thumbUrl: d.url_s,
                            imageUrl:d.url_l,
                            id: d.id
                        };
                    });
                }
                return [];
            },

            _setter: function(photo, prop){
                var val = localStorageService.get(photo.id);

                if (!val){
                    val = {
                        thumbUrl: photo.thumbUrl
                    };
                }

                val[prop] = true;

                localStorageService.set(photo.id, val);
            },

            _getter: function(photo, prop){
                var val = localStorageService.get(photo.id);

                if (!!val){
                    return val[prop];
                }

                return false;
            },

            select: function(photo){
                this._setter(photo, 'selected');
            },

            love: function(photo){
                this._setter(photo, 'loved');
            },

            isSelected: function(photo){
                return this._getter(photo, 'selected');
            },

            isLoved: function(photo){
                return this._getter(photo, 'loved');
            },

            loved: function(){
                var ids = localStorageService.keys();
                
                return ids.map(function(id){
                    return localStorageService.get(id);
                });
            }
        };
    }]);
