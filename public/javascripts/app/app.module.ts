import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { AppComponent } from "./app.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataFilterPipe} from "./data-filter.pipe"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpModule,
        JsonpModule,
        DataTableModule
    ],
    declarations: [
        AppComponent,
        DataFilterPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }