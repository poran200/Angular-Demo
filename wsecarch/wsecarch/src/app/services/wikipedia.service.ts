import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {wikipediaServiceUrl} from "../../environments/environment";
import {pluck} from "rxjs/operators";

interface WikipediaResponse {
    query: {
      search: {
        title: string
        snippet: string
        pageid: number
      }[]
    }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url = wikipediaServiceUrl.url;
  constructor(private http: HttpClient) { }

  public search(term:string){
   return  this.http.get<WikipediaResponse>(this.url,{
      params:{
        action: "query",
        format: "json",
        list: "search",
         utf8:'1',
        srsearch: term,
        origin: "*"
      }
    }).pipe(pluck("query","search"))
  }

}
