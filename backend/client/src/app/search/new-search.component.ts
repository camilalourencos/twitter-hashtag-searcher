import { RootObject } from '../services/models/new-search.model';
import { HttpClient } from '@angular/common/http';
import { style } from "@angular/animations";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { SearchResultsService } from './../services/search-results.service';


@Component({
    selector: 'app-new-search',
    templateUrl: './new-search.component.html',
    styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent {

  //listening to the typing event
  @Output() onTyping = new EventEmitter();

  searchValue: string = '';

  constructor(private service: SearchResultsService){

  }

  hashtagSearch(){
    const searchResult: RootObject = {text: this.searchValue}
    this.service.onSearch(searchResult).subscribe(result => {
      console.log(result);
      return result;
      this.eraseBar();
    },

    (error) => console.error(error)

    );

  }

  eraseBar(){
    this.searchValue = '';
  }


}
