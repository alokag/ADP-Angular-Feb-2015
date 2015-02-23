define([], function(){
	function SalaryCalculator(){
		var _data = {
			basic : 0,
			hra : 0,
			da : 0,
			tax :0,
			salary: 0
		};

		/*this.val = function(attrName, value){
			if (arguments.length === 1) return _data[attrName];
			_data[attrName] = value;
			//trigger Change for 'attrName'
		}*/

		this.get = function(attrName){
			return _data[attrName];
		};
		this.set = function(attrName, value){
			_data[attrName] = value;
			//trigger Change for 'attrName'
			trigger(attrName);
		};
		var _subscribers = { };

		this.addSubscriber = function(attrName, subscriptionFn){
			_subscribers[attrName] = _subscribers[attrName] || [];
			_subscribers[attrName].push(subscriptionFn);
		};

		this.removeSubscriber = function(attrName, subscriptionFn){
			//fill in the blanks
		};

		function trigger(attrName){
			var _subscriptionFns = _subscribers[attrName] || [];
			for(var i=0; i < _subscriptionFns.length; i++){
				var subscriberFn = _subscriptionFns[i];
				subscriberFn();
			}
		}

	}
	SalaryCalculator.prototype.calculate = function(){
		var gross = this.get('basic') + this.get('hra') + this.get('da');
		var net = gross * ((100-this.get('tax'))/100);
		this.set('salary', net);
	}
	return SalaryCalculator;
});