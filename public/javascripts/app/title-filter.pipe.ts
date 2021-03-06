/**
 * Created by chanhyeong on 2016-11-30.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "titleFilter"
})
export class TitleFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.krTitle.indexOf(query) > -1);
        }
        return array;
    }
}