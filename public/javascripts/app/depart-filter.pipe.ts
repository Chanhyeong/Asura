/**
 * Created by chanhyeong on 2016-12-07.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "departFilter"
})
export class DepartFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query && !(query.valueOf() === "개설학과")) {
            return _.filter(array, row=>row.department.indexOf(query) > -1);
        }
        return array;
    }
}