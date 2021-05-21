const { TwitterApi } = require('twitter-api-v2');
const getUserInput = require('./client/src/app/search/new-search.component.ts');

    //login to TwitterAPI
    const consumerClient = new TwitterApi({ 
    appKey: 'DJ8ZkyMlHtXr7B1sWQlbPipiN', 
    appSecret: 'ZHGNaXyga1cONRYaSQIX7obzXoJdkdsnKk7i9ZNMJmAHiYxnMa', 
    accessToken: '3598634896-UcwATP9AGGocpRJF4xsgMMRvFoh8tXF4pxe7ojc', 
    accessSecret: 'dAPiANCscuMORtjui1wRBnWSSiuDDhFceBrc3Ir4W7GWP', 
    });


    
    //searching for the most recent tweets

    exports.searchTweets = async function (){
    const userInput = await getUserInput.hashtagSearch();
    const results = await consumerClient.v2.get('tweets/search/recent', {query: '#'+ 'BBB21', max_results: '10'});
    console.log(results);
    return results.data;
}




