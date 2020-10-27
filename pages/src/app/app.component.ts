import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   http :HttpClient;
   currentPage:number = 0;
   images =[
     {
       title: 'The Betch',
       url:'https://images.unsplash.com/photo-1575804358853-9333861bf1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Ocean',
       url:'https://images.unsplash.com/photo-1450128910652-d698afa60ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Betch',
       url:'https://images.unsplash.com/photo-1575804358853-9333861bf1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Ocean',
       url:'https://images.unsplash.com/photo-1450128910652-d698afa60ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Betch',
       url:'https://images.unsplash.com/photo-1575804358853-9333861bf1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Ocean',
       url:'https://images.unsplash.com/photo-1450128910652-d698afa60ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Betch',
       url:'https://images.unsplash.com/photo-1575804358853-9333861bf1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       title: 'The Ocean',
       url:'https://images.unsplash.com/photo-1450128910652-d698afa60ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     }
   ]

  getClass() {

  }

  checkWindowIndex(i: number) {
   return  Math.abs(this.currentPage - i) < 5;
  }
}
