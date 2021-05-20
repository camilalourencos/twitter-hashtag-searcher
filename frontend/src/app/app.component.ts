import { Component } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NewSearchComponent } from './search/new-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends SearchResultsComponent {
  title = 'twitter-hashtag-searcher';

}
