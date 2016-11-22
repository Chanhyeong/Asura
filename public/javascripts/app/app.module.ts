/**
 * Created by chanhyeong on 2016-11-03.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { TableComponent } from "./table.component";

@NgModule({
    imports: [ BrowserModule,FormsModule ],
    declarations: [ TableComponent ],
    bootstrap: [ TableComponent ]
})
export class AppModule { }