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
				
			},
			genderstat:function(empgender){
					if (empgender === "Male") {
					return "sap-icon://status-positive";
				} else {
					return "sap-icon://status-critical";
				}
			},
			locstat:function(loc){
				if (loc === "Dwarka") {
					return "Indication01";
				} else if(loc === "Pune"){
					return "Indication02";
				}else if(loc === "Mumbai"){
					return "Indication04";
				}
				else if(loc === "Noida"){
					return "Indication05";
				}
				else{
					return "Indication03";
				}
				
			},
			fieldst:function(isf){
					if (isf === "Yes") {
					return "Warning";
				} else {
					return "Success";
				}
			},
			projstat:function(projct){
					if (projct === "NA") {
					return "Indication01";
				} else {
					return "Success";
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