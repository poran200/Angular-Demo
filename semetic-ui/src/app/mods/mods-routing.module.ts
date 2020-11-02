import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModHomeComponent} from "./mod-home/mod-home.component";

const routes: Routes = [
  {path: '', component: ModHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
