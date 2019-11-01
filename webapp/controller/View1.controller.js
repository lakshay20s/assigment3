sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Fragment.Fragment.controller.View1", {

		onValueHelpRequested: function (oEvent) {
			var id = oEvent.getParameters().id.split('--')[2];
			var oDialog = new sap.ui.xmlfragment("Fragment.Fragment.fragments.FragmentControl", this);
			this.getView().addDependent(oDialog);

			if (id == "input1") {
				oDialog.bindAggregation("items", {
					path: "city>/city",
					template: new sap.m.StandardListItem({
						title: "{city>name}"
					})

				});
			} else {
				oDialog.bindAggregation("items", {
					path: "country>/country",
					template: new sap.m.StandardListItem({
						title: "{country>name}"
					})

				});
			}

			oDialog.open();

		}
	});
});