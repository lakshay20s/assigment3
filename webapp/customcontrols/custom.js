sap.ui.define(["sap/m/Image"],
function (Image) {

	return Image.extend("Fragment.Fragment.customcontrols.custom", {
		metadata: {
			events: {
				"hover": {} //new event definition hover
			}
		},
		//hover event handler
		onmouseover: function () {
			this.fireHover();
		},
		renderer: {} //Standard renderer method is not overridden

	});

});