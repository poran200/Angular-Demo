import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewsHomeComponent} from './views-home/views-home.component';
import {ViewsRoutingModule} from "./views-routing.module";
import {StatisticsComponent} from './statistics/statistics.component';
import {ItemListComponent} from './item-list/item-list.component';


@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
