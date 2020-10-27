import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionHomeComponent} from './collection-home/collection-home.component';


@NgModule({
  declarations: [CollectionHomeComponent],
  exports: [
    CollectionHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
