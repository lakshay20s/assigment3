var id = "";
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Fragment/Fragment/utils/formatter"
], function (Controller,formatter) {
	"use strict";

	return Controller.extend("Fragment.Fragment.controller.View1", {
		
		test:formatter,

		onValueHelpRequested: function (oEvent) {

			id = oEvent.getParameters().id.split('--')[2];
			var oDialog = new sap.ui.xmlfragment("Fragment.Fragment.fragments.FragmentControl", this);
			this.getView().addDependent(oDialog);

			if (id === "input2") {
				oDialog.bindAggregation("items", {
					path: "country>/country",
					template: new sap.m.StandardListItem({
						title: "{country>name}"
					})

				});
			} else {
				oDialog.bindAggregation("items", {
					path: "city>/city",
					template: new sap.m.StandardListItem({
						title: "{city>name}"
					})

				});
			}
			oDialog.open();

		},
		_handleValueHelpClose: function (oEvent) {

			var oSelectedItem = oEvent.getParameter("selectedItem");
			if (id === "input1") {
				if (oSelectedItem) {
					var productInput = this.byId("input1");
					productInput.setValue(oSelectedItem.getTitle());
				}
				oEvent.getSource().getBinding("items").filter([]);
			} else {
				if (oSelectedItem) {
					var productInput = this.byId("input2");
					productInput.setValue(oSelectedItem.getTitle());
				}
				oEvent.getSource().getBinding("items").filter([]);
			}
		}

	});
});