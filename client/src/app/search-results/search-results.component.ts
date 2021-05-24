import { Datum } from './../services/models/new-search.model';
import { SearchResultsService } from './../services/search-results.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css',]
})
export class SearchResultsComponent implements OnInit {

  tweetsFound: any[] = [];

  constructor(private service: SearchResultsService) {}

  ngOnInit() {
    this.service.allTweets().subscribe((tweetsFound: Datum[]) => {
      console.log(tweetsFound);
      this.tweetsFound = tweetsFound;
      //return tweetsFound;
    })
  }


}
