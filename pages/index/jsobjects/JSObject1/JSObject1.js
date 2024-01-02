export default {
	getDeckListValueForNewDeck(factionName) {
		return btoa(JSON.stringify({f:factionName,ids:[],qtys:[]}))
	}
}