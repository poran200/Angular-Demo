import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'views',
    loadChildren:() => import('./views/views.module')
      .then(module => module.ViewsModule)
  },
  {path: 'collection',
    loadChildren:()=> import('./collections/collections.module')
      .then(m=> m.CollectionsModule)},
  {path: 'element',
    loadChildren:()=> import('./elementes/elementes.module')
      .then(m=> m.ElementesModule)},

  {path:'', component:HomeComponent},
  {path: '**', component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
