import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionHomeComponent} from './collection-home/collection-home.component';
import {TableComponent} from './table/table.component';


@NgModule({
  declarations: [CollectionHomeComponent, TableComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
