/**
 * Created by chanhyeong on 2016-11-21.
 */
import { Component } from '@angular/core';
import { Lecture } from './lecture'

@Component({
    selector: 'list',
    template: `<table class="table-fill">
    <thead>
      <tr>
        <th class="">수강번호</th>
        <th class="">개설학부</th>
        <th class="">개설전공</th>
        <th class="">과목명</th>
        <th class="">영문 과목명</th>
        <th class="">교과 구분</th>
        <th class="">공학인증</th>
        <th class="">학점</th>
        <th class="">시간</th>
        <th class="">교수명</th>
        <th class="">강의 시간</th>
        <th class="">영어 강의</th>
        <th class="">정원</th>
        <th class="">여석</th>
        <th class="">추가</th>
      </tr>
    </thead>
    <tbody class="table-hover">
    <tr>
        <td class="code"></td>
        <td class="department"></td>
        <td class="major"></td>
        <td class="title"></td>
        <td class="enTitle"></td>
        <td class="abeek"></td>
        <td class="point"></td>
        <td class="time"></td>
        <td class="professor"></td>
        <td class="timetable"></td>
        <td class="enLecture"></td>
        <td class="total"></td>
        <td class="leftSeat"></td>
        <td class="remove"></td>
        <td class="add"></td>
    </tr>
    </tbody>
 </table>
`
})

export class TableComponent {

}