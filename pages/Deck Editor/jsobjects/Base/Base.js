export default {
	deck_list: [],
	getCurrentFaction () {
		var currentFaction;
		for(var faction of (GetFactionMetaData.data)) {
			if (faction.playable) {
				currentFaction = faction;
			}
			console.log(faction);
			console.log(faction.faction_name === appsmith.URL.queryParams.faction);
		}
		return currentFaction;
	},
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