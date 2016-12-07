/**
 * Created by chanhyeong on 2016-12-07.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "categoryFilter"
})
export class CatetegoryFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query && !(query.valueOf() === "교과구분(과목분류)")) {
            return _.filter(array, row=>row.category.indexOf(query) > -1);
        }
        return array;
    }
}