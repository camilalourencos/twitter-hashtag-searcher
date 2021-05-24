import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'twitter-hashtag-searcher';
        this.searchValue = '';
    }
    newSearch($event) {
        this.searchValue = $event.searchValue;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map