import { style } from "@angular/animations";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-new-search',
    templateUrl: './new-search.component.html',
    styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent {

  @Output() onTyping = new EventEmitter();


  searchValue: string = '';

  hashtagSearch(){
    console.log('ola');
    const searchResult = {searchValue: this.searchValue}
    this.onTyping.emit(searchResult);

    this.eraseBar();

  }

  eraseBar(){
    this.searchValue = '';
  }


}
