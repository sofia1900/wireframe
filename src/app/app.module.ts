import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {TraficoModule} from "./trafico/trafico.module";
import {HDModule} from "./hd/hd.module";
import {EmailModule} from "./email/email.module";
import {FtpModule} from "./ftp/ftp.module";
import {DbModule} from "./db/db.module";
import {SeguridadModule} from "./seguridad/seguridad.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    TraficoModule,
    HDModule,
    EmailModule,
    FtpModule,
    DbModule,
    SeguridadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
