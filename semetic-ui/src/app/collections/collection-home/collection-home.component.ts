import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  data = [
    {name: 'jone',age:23,job: 'Designer'},
    {name: 'james',age:45,job: 'engineer'},
    {name: 'james',age:45,job: 'engineer'},
    {name: 'james',age:45,job: 'engineer'},
    {name: 'james',age:45,job: 'engineer'},
    {name: 'jone',age:23,job: 'Designer'}
  ];
  headers = [
    {key: 'name',label: 'Name'},
    {key: 'age',label: 'Age'},
    {key: 'job',label: 'Job'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
