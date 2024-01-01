export default {
	deck_list: [],
	getCurrentFaction () {
		var currentFaction;
		for(var faction of (GetFactionMetaDeta.data)) {
			if (faction.playable) {
				currentFaction = faction;
			}
			console.log(faction);
			console.log(faction.faction_name === appsmith.URL.queryParams.faction);
		}
		return currentFaction;
	},
	setExportData() {
		let decodedExport = {f:0, ids:[1,19,125,200],qtys:[1,0,0,1]};
		return btoa(decodedExport.toString());
  },
	copyExportData: () => copyToClipboard(Input1.text),
	currentFaction: this.getCurrentFaction()
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