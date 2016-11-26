import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { InfoComponent } from "./table.component";
import { AppComponent } from "./app.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {PlanComponent}   from "./plan.component";
import {ListComponent}   from "./class-list.component";

@NgModule({
    imports: [ BrowserModule,FormsModule,NgbModule.forRoot() ],
    declarations: [ InfoComponent,AppComponent,PlanComponent,ListComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }