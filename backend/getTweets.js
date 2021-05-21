const { TwitterApi } = require('twitter-api-v2');
const getUserInput = require('./client/src/app/search/new-search.component.ts');

    //login to TwitterAPI
    const consumerClient = new TwitterApi({ 
    appKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
    appSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
    accessToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
    accessSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
    });


    
    //searching for the most recent tweets

    exports.searchTweets = async function (){
    const userInput = await getUserInput.hashtagSearch();
    const results = await consumerClient.v2.get('tweets/search/recent', {query: '#'+ 'BBB21', max_results: '10'});
    console.log(results);
    return results.data;
}




