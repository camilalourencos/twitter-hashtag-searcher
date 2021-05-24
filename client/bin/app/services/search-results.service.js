import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SearchResultsService = class SearchResultsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/data';
        this.listTweetsFound = [];
    }
    get tweetsFound() {
        return this.listTweetsFound;
    }
    allTweets() {
        return this.httpClient.get(this.url);
    }
    onSearch(tweetFound) {
        return this.httpClient.post(this.url, tweetFound);
    }
};
SearchResultsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SearchResultsService);
export { SearchResultsService };
//# sourceMappingURL=search-results.service.js.map