import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BackendService } from 'src/app/services/backend.service';

export interface IOutcomeDetail {
  prixod: number
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [DatePipe]
})


export class ReportComponent implements OnInit {

  date1: Date
  date2: Date
  someError: boolean = false
  errorText: string
  gain: any
  sortedInfo: any
  outcomeDetail: IOutcomeDetail[] = [{prixod: 0}, {prixod: 0}]


  constructor(private datePipe: DatePipe, public api: BackendService) { }

  ngOnInit(): void {
  }

  async onPicked(){
    console.log(this.transformDate(this.date1), "    ", this.transformDate(this.date2))

    this.someError = false
    // console.log("date1: ", this.date1.toDateString(), "  date2: ", this.date2.toDateString())
    if (this.date1 > this.date2){
      this.someError = true
      this.errorText = `Sana noto'g'ri tanlandi`
      return
    }
    if (this.date1 == undefined || this.date2 == undefined){
      this.someError = true
      this.errorText = `Sana tanlanmadi`
      return
    }
    let data = {
      date1: this.transformDate(this.date1),
      date2: this.transformDate(this.date2)
    }
    let result = await this.api.getGain(data)
    this.gain = result[0].sum
    this.sortedInfo = await this.api.getSertedInfo(data)
    this.outcomeDetail = await this.api.outcomeDetail(data)

    console.log("sorted: ", this.sortedInfo)
  }

  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
