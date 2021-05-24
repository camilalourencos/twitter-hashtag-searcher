import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from "@angular/core";
let NewSearchComponent = class NewSearchComponent {
    constructor(service) {
        this.service = service;
        //listening to the typing event
        this.onTyping = new EventEmitter();
        this.searchValue = '';
    }
    hashtagSearch() {
        const result = ({ searchValue: this.searchValue });
        this.onTyping.emit(result);
        //return result;
        this.eraseBar();
    }
    eraseBar() {
        this.searchValue = '';
    }
};
__decorate([
    Output()
], NewSearchComponent.prototype, "onTyping", void 0);
NewSearchComponent = __decorate([
    Component({
        selector: 'app-new-search',
        templateUrl: './new-search.component.html',
        styleUrls: ['./new-search.component.css']
    })
], NewSearchComponent);
export { NewSearchComponent };
//# sourceMappingURL=new-search.component.js.map