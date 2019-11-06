sap.ui.define([],
	function (){
		return{
			availablecolor:function(available) {
				if (available > 50) {
					return "Success";
				} else {
					return "Error";
				}
			}
		};
	}

);