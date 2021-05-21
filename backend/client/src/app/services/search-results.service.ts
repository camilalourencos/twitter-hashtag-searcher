import { RootObject } from './models/new-search.model';
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  //transmitting the listening event data

  private listTweetsFound: any[];
  private url = 'http://localhost:8000/'

  constructor(private httpClient: HttpClient) {
    this.listTweetsFound = [];
  }

  get tweetsFound (){
    return this.listTweetsFound;
  }

  allTweets(): Observable<RootObject[]>{
    return this.httpClient.get<RootObject[]>(this.url);
  }

  onSearch(tweetFound: RootObject) : Observable <RootObject> {
    return this.httpClient.post<RootObject>(this.url, tweetFound);

  }





}
