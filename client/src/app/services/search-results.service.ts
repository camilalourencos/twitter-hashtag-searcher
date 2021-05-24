import { Datum } from './models/new-search.model';
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  //transmitting the listening event data

  private listTweetsFound: any[];
  private url = 'http://localhost:3000/data'

  constructor(private httpClient: HttpClient) {
    this.listTweetsFound = [];
  }

  get tweetsFound (){
    return this.listTweetsFound;
  }

  allTweets(): Observable<Datum[]>{
    return this.httpClient.get<Datum[]>(this.url);
  }

  onSearch(tweetFound: Datum) : Observable <Datum> {
    return this.httpClient.post<Datum>(this.url, tweetFound);

  }


}
