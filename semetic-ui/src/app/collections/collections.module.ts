import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionHomeComponent} from './collection-home/collection-home.component';
import {TableComponent} from './table/table.component';
import {BiographyComponent} from './biography/biography.component';
import {CompaniesComponent} from './companies/companies.component';
import {PartnersComponent} from './partners/partners.component';
import {TabsComponent} from './tabs/tabs.component';


@NgModule({
  declarations: [CollectionHomeComponent, TableComponent, BiographyComponent, CompaniesComponent, PartnersComponent, TabsComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
