import { SearchResultsService } from './services/search-results.service';
import { Component } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NewSearchComponent } from './search/new-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter-hashtag-searcher';

  constructor(private service: SearchResultsService) {}

  //calling the event of typing
  onTyping($event:any){
    this.service.onSearch($event);
  }

}