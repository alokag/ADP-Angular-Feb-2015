 var utils = angular.module('utils', []);

	 utils.filter("toMoment", function(myMoment){
	 	return function(data){
	 		return myMoment(data).fromNow();
	 	}
	 });

	 utils.value("myMoment", moment);