import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { ClassInfoComponent } from "./class.info.component";
import { AppComponent } from "./app.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlanComponent}   from "./plan.component";
import {ListComponent}   from "./class-list.component";
import {CartComponent}  from "./cart.component";

@NgModule({
    imports: [ BrowserModule,FormsModule,NgbModule.forRoot() ],
    declarations: [ ClassInfoComponent,AppComponent,PlanComponent,ListComponent,CartComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }