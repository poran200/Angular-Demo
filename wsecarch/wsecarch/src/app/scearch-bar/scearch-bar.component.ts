import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-scearch-bar',
  templateUrl: './scearch-bar.component.html',
  styleUrls: ['./scearch-bar.component.css']
})
export class ScearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter();
   term = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
