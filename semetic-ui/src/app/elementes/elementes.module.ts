import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElementesRoutingModule} from './elementes-routing.module';
import {ElementsHomeComponent} from './elements-home/elements-home.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';


@NgModule({
    declarations: [ElementsHomeComponent, PlaceholderComponent],
    exports: [
     ],
    imports: [
        CommonModule,
        ElementesRoutingModule
    ]
})
export class ElementesModule { }
