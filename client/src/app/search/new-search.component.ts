import { Datum } from './../services/models/new-search.model';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from "@angular/core";
import { SearchResultsService } from './../services/search-results.service';


@Component({
    selector: 'app-new-search',
    templateUrl: './new-search.component.html',
    styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent {

  //listening to the typing event
  @Output() onTyping = new EventEmitter<any>();

  searchValue: string = '';

  constructor(private service: SearchResultsService){

  }

  hashtagSearch(){
      const result = ({searchValue: this.searchValue});
      this.onTyping.emit(result);
      //return result;
      this.eraseBar();
    }

    eraseBar(){
      this.searchValue = '';
    }

  }



