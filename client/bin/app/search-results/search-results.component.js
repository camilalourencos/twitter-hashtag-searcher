import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SearchResultsComponent = class SearchResultsComponent {
    constructor(service) {
        this.service = service;
        this.tweetsFound = [];
    }
    ngOnInit() {
        this.service.allTweets().subscribe((tweetsFound) => {
            console.log(tweetsFound);
            this.tweetsFound = tweetsFound;
        });
    }
};
SearchResultsComponent = __decorate([
    Component({
        selector: 'app-search-results',
        templateUrl: './search-results.component.html',
        styleUrls: ['./search-results.component.css',]
    })
], SearchResultsComponent);
export { SearchResultsComponent };
//# sourceMappingURL=search-results.component.js.map