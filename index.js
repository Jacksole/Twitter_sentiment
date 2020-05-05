const Twitter = require('twitter-lite');

(async function (){
	const user = new Twitter({
		consumer_key: "wmDdd2eMCA3eT1e19HqAlzFWT",
		consumer_secret: "dZWdIlJYaEaweq0z2HJyFRlx2BpUSDVXNQQjwtX7KQChvxQ20C",
	});
	
	try {
		let response = await user.getBearerToken();
		const app = new Twitter({
			bearer_token: response.access_token,
		});
		
		// Search for recent tweets from the twitter API
		response = await app.get(`/search/tweets`, {
			q: "COVID-19", // The search term
			lang: "en",        // Let's only get English tweets
			cout: 100,         // Limit the results to 100 tweets
		});

		// Loop over all the tweets and print the text
		for (tweet of response.statuses) {
			console.dir(tweet.txt);
		}
	} catch(e){
		console.log("There was an error calling the Twitter API");
		console.dir(e);
	}
})();
