import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { AppComponent } from "./app.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TitleFilterPipe} from "./title-filter.pipe"
import {DepartFilterPipe} from "./depart-filter.pipe"
import {MajorFilterPipe} from "./major-filter.pipe"
import {CatetegoryFilterPipe} from "./category-filter.pipe"
import {TimeFilterPipe} from "./time-filter.pipe"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpModule,
        JsonpModule,
        DataTableModule,
    ],
    declarations: [
        AppComponent,
        TitleFilterPipe,
        DepartFilterPipe,
        MajorFilterPipe,
        CatetegoryFilterPipe,
        TimeFilterPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }