import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElementesRoutingModule} from './elementes-routing.module';
import {ElementsHomeComponent} from './elements-home/elements-home.component';


@NgModule({
    declarations: [ElementsHomeComponent],
    exports: [
        ElementsHomeComponent
    ],
    imports: [
        CommonModule,
        ElementesRoutingModule
    ]
})
export class ElementesModule { }
