export default {
	defaultFaction: "Castille",
	async getDefaultDeck() {
		const faction = this.determineFaction(this.defaultFaction);
		const availableFactionCards = await GetAvailableFactionCardsCopy.run(faction);
		return {
			"faction": faction,
			"availableFactionCards": availableFactionCards,
			"deckList": []
		};
	},
	determineFaction(factionName) {
		console.log(factionName);
		const factionData = GetFactionMetaData.data;
		for (var i = 0; i < factionData.length; i++) {
			let faction = factionData[i];
			if (faction.faction_name === factionName) return faction;
		}
		throw new Error("No Faction with name " + factionName);
	},
	async parseUrlData() {
		let hasDeckId = appsmith.URL.queryParams.hasOwnProperty('deckId');
		if (hasDeckId) {
			const savedDeckId = parseInt(appsmith.URL.queryParams.deckId);
			const savedDeckData = GetDeckById.run(savedDeckId);
		}
		let hasDeckList = appsmith.URL.queryParams.hasOwnProperty('deckList');
		if (hasDeckList) {
			try{
				const deckDataEncoded = appsmith.URL.queryParams.deckList;
				const deckDataDecoded = JSON.parse(atob(deckDataEncoded));
				const faction = this.determineFaction(deckDataDecoded.f);
				const availableFactionCards = await GetAvailableFactionCardsCopy.run(faction);
				return {
						faction:faction,
						"availableFactionCards": availableFactionCards,
						ids: [1],
						qtys: [1]
				};
			}
			catch(error){ 
				console.log(error);
			}
		}
		return this.getDefaultDeck();
	},
	setExportData() {
		let decodedExport = {f:0, ids:[1,19,125,200,10,38,20,21],qtys:[1,0,0,1]};
		let encodedExport = btoa(JSON.stringify((decodedExport)));
		let returnPath = appsmith.URL.protocol + "//" + appsmith.URL.host + appsmith.URL.pathname + "?deckList=" + encodedExport;
		console.log(JSON.stringify(decodedExport));
		console.log({"path-host": appsmith.URL.host});
		console.log({"path-protocol": appsmith.URL.protocol});
		console.log({"path": appsmith.URL.hostname});
		console.log({"path": appsmith.URL.fullPath});
		
		console.log({"path": returnPath});
		export_string_textbox.setValue(returnPath)
		return returnPath;
  }
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