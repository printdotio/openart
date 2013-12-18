/**
 * Created by micah on 12/17/13.
 */
var express = require('express');
var request = require('request');

var config = require('./config.json');

var app = express();
app.use('/scripts',express.static(__dirname + '/scripts'));
app.use('/styles',express.static(__dirname + '/styles'));
app.use('/images',express.static(__dirname + '/images'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));


app.get('/',function(req,res){
    return res.sendfile(__dirname+"/index.html",{maxAge:3000});
});

app.get('/api/british-library/:page',function(req,res){
    var p = req.params.page;
    res.setHeader('Content-Type','application/json');
    var r = request("http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20flickr.people.publicphotos("+p+"%2C50)%20WHERE%20user_id%3D'12403504%40N02'%20AND%20extras%3D'url_sq'%20and%20api_key%3D'"+config.flickr_api_key+"'%0A&format=json&diagnostics=true&callback=");
    r.pipe(res);
});

app.listen(8081);