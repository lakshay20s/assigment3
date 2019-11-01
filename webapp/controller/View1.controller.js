sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Fragment.Fragment.controller.View1", {

		onValueHelpRequested: function (oEvent) {
			var id = oEvent.getParameters().id.split('--')[2];
			/*var oField = new sap.ui.core.CustomData();
			oField.setKey("field");
			oField.setValue("id");*/
			var oDialog = new sap.ui.xmlfragment("Fragment.Fragment.fragments.FragmentControl", this);
			this.getView().addDependent(oDialog);
		/*	if (id === "input1") {*/
				oDialog.bindAggregation("items", {
					path: "city>/city",
					template: new sap.m.StandardListItem({
						title: "{city>name}"
					})

				});
				/*var check = "input1";*/
		/*	} else {*/
				/*oDialog.bindAggregation("items", {
					path: "country>/country",
					template: new sap.m.StandardListItem({
						title: "{country>name}"
					})

				});
					var check = "input2";
			}*/

			oDialog.open();

		},
		_handleValueHelpClose: function (evt) {
			
			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId("input1");
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		}

	});
});