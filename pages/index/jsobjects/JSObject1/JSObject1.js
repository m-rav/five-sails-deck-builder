export default {
	getDeckListValueForNewDeck(factionName) {
		return btoa(JSON.stringify({f:factionName,ids:[],qtys:[]}))
	},
	async setUpDiscord () {
		if (appsmith.URL.queryParams.hasOwnProperty('access_token')) {
			console.log('hi :)');
		} else {
			let response = await fetch("https://discord.com/api/users/@me", { headers: {
				authorization: "Bearer yoHzDxpWxEn4de5ayGKk8hVW9FXisx",
			}}).then(result => result.json()).then(resultResponse => {
				console.log(resultResponse);
			});
		}
	}
}