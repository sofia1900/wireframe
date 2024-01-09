import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBuzonesComponent } from './widget-buzones/widget-buzones.component';



@NgModule({
    declarations: [
        WidgetBuzonesComponent
    ],
    exports: [
        WidgetBuzonesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EmailModule { }
