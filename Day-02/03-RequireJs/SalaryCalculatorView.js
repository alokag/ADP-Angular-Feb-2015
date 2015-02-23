//View
define(['jquery', 'text!SalaryCalculatorTemplate.html'], function($, template){
	function SalaryCalculatorView(calculator){
		var $root = this.$root = $("<div></div>");

		this.init = function(){
			//Model change Event Subscriptions
			calculator.addSubscriber('salary', function(){
				$("#divResult", $root).html(calculator.get('salary'));
			});
			calculator.addSubscriber('basic', function(){
				$("#txtBasic", $root).val(calculator.get('basic'));
			});
			calculator.addSubscriber('hra', function(){
				$("#txtHra", $root).val(calculator.get('hra'));
			});
			calculator.addSubscriber('da', function(){
				$("#txtDa", $root).val(calculator.get('da'));
			});
			calculator.addSubscriber('tax', function(){
				//make the following line work
				//$("#rangeTax").val(this.get('tax'));

				$("#rangeTax", $root).val(calculator.get('tax'));
				$("#spanTax", $root).html(calculator.get('tax') + '%');
			});

			//UI interation events
			$root.on("change", "#txtBasic", function(){
				calculator.set('basic', parseInt(this.value,10));
			});
			$root.on("change", "#txtHra", function(){
				calculator.set('hra', parseInt(this.value,10));
			});
			$root.on("change", "#txtDa", function(){
				calculator.set('da', parseInt(this.value,10));
			});
			$root.on("change", "#rangeTax", function(){
				calculator.set('tax', parseInt(this.value,10));
			});

			$root.on("click", "#btnCalculate", function(){
				calculator.calculate();
			});

		};

		this.render = function(){
			$root.html(template);
		}
	}
	return SalaryCalculatorView;
});
	