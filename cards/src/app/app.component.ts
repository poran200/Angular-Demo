import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  posts = [
    {
      title: 'Natural',
      imageUrl: "assets/images/tree.jpeg",
      userName: 'userName',
      content:'Saw this awesome tree during my hike today'
    },
    {
      title: 'Natural',
      imageUrl: "assets/images/tree.jpeg",
      userName: 'userName',
      content:'Saw this awesome tree during my hike today'
    },
    {
      title: 'Natural',
      imageUrl: "assets/images/tree.jpeg",
      userName: 'userName',
      content:'Saw this awesome tree during my hike today'
    },
    {
      title: 'Natural',
      imageUrl: "assets/images/tree.jpeg",
      userName: 'userName',
      content:'Saw this awesome tree during my hike today'
    },
  ]
}
