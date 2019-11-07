sap.ui.define([],
	function (){
		return{
			availablecolor:function(available) {
				if (available > 50) {
					return "Success";
				} else {
					return "Error";
				}
			},
			city:function(place){
			if (place === "D"){return "Delhi";}
			else if(place === "M"){return "Mumbai";}
			else if(place === "N"){return "Noida";}
			else if(place === "H"){return "Hydrabad";}
			else if(place === "P"){return "Pune";}
			else{return "Others";}
			},
			dateformat : function(date){
				var newdate = date.substring(0,2)+"/"+date.substring(2,4)+"/"+date.substring(4);
				return newdate;
				
			},
			isavilable:function(available){
					if (available > 50) {
					return true;
				} else {
					return false;
				}
				
			}
		};
	}
	/*,
	function(){
		return{
			city:function(officecity){
			if (officecity === "D"){return "Delhi";}
			else if(officecity === "M"){return "Mumbai";}
			else if(officecity === "N"){return "Noida";}
			else if(officecity === "H"){return "Hydrabad";}
			else if(officecity === "H"){return "Pune";}
			else{return "Others";}
			}	
		};
	}*/
	

);