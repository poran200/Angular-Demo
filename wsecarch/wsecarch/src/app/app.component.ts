import {Component} from '@angular/core';
import {WikipediaService} from "./services/wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsecarch';
  searchResult = [];
 constructor(private wikipediaService: WikipediaService) {
 }
  onTermSubmit(term: string) {
   this.wikipediaService.search(term).subscribe((response)=>{
     this.searchResult= response;
      console.log(this.searchResult);
   })
  }
}
