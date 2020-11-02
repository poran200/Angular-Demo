import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mod-home',
  templateUrl: './mod-home.component.html',
  styleUrls: ['./mod-home.component.css']
})
export class ModHomeComponent implements OnInit {
  isModalOpen: boolean = false;
  accordionItems = [
    {title: ' What is a dog?', content:'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'},
    {title: ' What kinds of dogs are there?',content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isModalOpen = !this.isModalOpen;
  }
}
