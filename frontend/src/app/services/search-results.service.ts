import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  private listTweetsFound: any[];

  constructor() {
    this.listTweetsFound = [];
  }

  get tweetsFound (){
    return this.listTweetsFound;
  }

  onSearch(tweetFound: any){
    this.listTweetsFound.push(tweetFound);
  }



}
