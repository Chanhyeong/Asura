/**
 * Created by chanhyeong on 2016-12-07.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "timeFilter"
})
export class TimeFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.timetable.indexOf(query) > -1);
        }
        return array;
    }
}