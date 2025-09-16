import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NativeScriptCommonModule, NativeScriptModule} from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "~/app/app.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptCommonModule, AppRoutingModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
