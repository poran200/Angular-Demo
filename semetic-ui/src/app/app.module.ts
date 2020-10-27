import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ElementesModule} from "./elementes/elementes.module";
import {ElementsHomeComponent} from "./elementes/elements-home/elements-home.component";
import {CollectionsModule} from "./collections/collections.module";
import {CollectionHomeComponent} from "./collections/collection-home/collection-home.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementesModule,
    CollectionsModule
  ],
  exports:[
    ElementsHomeComponent,
    CollectionHomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
