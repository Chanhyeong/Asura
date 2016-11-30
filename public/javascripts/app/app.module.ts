import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import { ClassInfoComponent } from "./class.info.component";
import { AppComponent } from "./app.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlanComponent}   from "./plan.component";
import {ClassListComponent} from "./class.list.component"
import {CartComponent}  from "./cart.component";
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
        ClassListComponent,
        ClassInfoComponent,
        AppComponent,
        PlanComponent,
        CartComponent,
        DataFilterPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }