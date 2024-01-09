import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetEspacioComponent } from './widget-espacio/widget-espacio.component';



@NgModule({
    declarations: [
        WidgetEspacioComponent
    ],
    exports: [
        WidgetEspacioComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HDModule { }
