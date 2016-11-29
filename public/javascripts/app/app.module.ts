import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { TableComponent } from "./table.component";
import { AppComponent } from "./app.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlanComponent}   from "./plan.component";
import {CartComponent}  from "./cart.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpModule,
        JsonpModule
    ],
    declarations: [
        TableComponent,
        AppComponent,
        PlanComponent,
        CartComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }