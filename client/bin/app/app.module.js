import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsService } from './services/search-results.service';
import { NewSearchComponent } from './search/new-search.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NewSearchComponent,
            SearchResultsComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
        ],
        providers: [SearchResultsService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map