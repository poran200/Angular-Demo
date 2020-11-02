import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
   @Input() data = [];
  public  openIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    if (index === this.openIndex){
       this.openIndex = -1;
    }else {
      this.openIndex = index;
    }
  }
}
