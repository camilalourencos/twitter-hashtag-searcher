import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-new-search',
    templateUrl: './new-search.component.html',
    styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent {

  searchValue: string = 'Osório';
  tweetFound: string = '';


  hashtagSearch(){
    console.log('ola')
    console.log('Search for', this.searchValue);
    console.log('This was found', this.tweetFound);

  }


}
