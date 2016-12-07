/**
 * Created by chanhyeong on 2016-12-07.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "majorFilter"
})
export class MajorFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query && !(query.valueOf() === "개설전공")) {
            return _.filter(array, row=>row.major.indexOf(query) > -1);
        }
        return array;
    }
}