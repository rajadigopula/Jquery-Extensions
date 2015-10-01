(function(){
	'use strict';
	
	jQuery.fn.extend({
		//Use to check if an element exists 
		exists : function(){
			return this.length > 0;
		},
		//Use to parse a url string and get the path, hostname, querystring, protocol, hash.
		parseUrl: function(urlString){
			var a = $('<a>',{href:urlString});
			var returnObj = {};
			returnObj.hostname = a.prop('hostname');
			returnObj.path = a.prop('pathname');
			returnObj.querystring = a.prop('search');
			returnObj.protocol = a.prop('protocol');
			returnObj.hash = a.prop('hash');
			return returnObj;
		}
	});
}());