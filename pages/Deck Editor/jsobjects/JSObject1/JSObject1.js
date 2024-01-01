export default {
	deck_list: [],
	setExportData() {
		let decodedExport = {f:0, ids:[1,19,125,200],qtys:[1,0,0,1]};
		let encodedExport = btoa(JSON.stringify((decodedExport)));
		let returnPath = appsmith.URL.pathname + "?deckList=" + encodedExport;
		console.log(JSON.stringify(decodedExport));
		console.log({"path": appsmith.URL.fullPath});
		console.log({"path": returnPath});
		export_string_textbox.setValue(returnPath)
		return returnPath;
  },
	copyExportData: () => copyToClipboard(export_string_textbox.text),
	// allFactions : GetFactionMetaDeta.data,
	// currentFaction : CurrentFaction.data[0],
	// allCardsCore: GetCardsCore.data,
	// updateDeck () {
		// //	write code here
		// //	this.myVar1 = [1,2,3]
		//deck_list{{tbl_customerInfo.triggeredRow}}
		// 
		// 
	// },
	
}