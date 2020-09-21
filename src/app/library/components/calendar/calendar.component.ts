import { Component, OnInit, Input, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true,
    }
  ]
})
export class CalendarComponent implements OnInit, ControlValueAccessor {

  @Input() modeNoBack: boolean = false

  @Input() selectionColor:string = "#ffb380";

  @Input() weekDayFilter:number

  frame:Date[]
  firstDate: Date
  month:{word:string,number:number}
  @Input()dateSelected:Date = null;

  ngOnInit() {
    this.init();
  }

  init(date?:Date){
    
    if(!date) { 
      let today = new Date();
      today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
      date = new Date(today.getTime() + 86400000) 
    
    }else{

      date = new Date(date);
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);

    }


    this.firstDate = date;
    this.firstDate.setDate((this.firstDate.getDate() - this.firstDate.getDate()) + 1)

    this.getStructure()
    this.getMonth(new Date(this.firstDate))


  }

  async getStructure() {
    this.frame = []
    for (let i = 1; i <= this.firstDate.getDay(); i++) {
      let dayBefore = new Date(this.firstDate);
      dayBefore.setDate(dayBefore.getDate() - (this.firstDate.getDay() - i))
      this.frame.push(dayBefore)
    }
    let referenceDay = this.firstDate;
    for (let i = this.firstDate.getDay(); i <= 34; i++) {
      referenceDay = new Date(referenceDay.getFullYear(), referenceDay.getMonth(), referenceDay.getDate() + 1, referenceDay.getHours(), referenceDay.getMinutes(), referenceDay.getMilliseconds())
      this.frame.push(referenceDay)
    }
  }

  switchMonth(month: number) {
    let newMonth = this.firstDate.getMonth() + month;
    let year = this.firstDate.getFullYear();
    let date = this.firstDate.getDate();
    this.firstDate = new Date(year, newMonth, date)
    this.getMonth(this.firstDate)
    this.getStructure()
  }

  switchYear(year: number) {
    let month = this.firstDate.getMonth();
    let newYear = this.firstDate.getFullYear() + year;
    let date = this.firstDate.getDate();
    this.firstDate = new Date(newYear, month, date)
    this.getMonth(this.firstDate);
    this.getStructure()
  }

  valueChange(date:Date){
    this.dateSelected = date;
    this.propagateChange(this.dateSelected)
  }
   private propagateChange = (_: any) => { };
  public writeValue(date: Date) {
    if(date){
      this.dateSelected = new Date(date.getTime());
      this.init(new Date(date.getTime()));
    }
   }
  public registerOnChange(fn: any) {this.propagateChange = fn;}
  public registerOnTouched() { }
  
  btnStyle(position:number,attribute:string){

    if (attribute === 'display') {
      if (this.frame[position].getMonth() != this.month.number) {
        return 'none'
      }
    }
    
    if(attribute === 'bg'){
      if ( this.dateSelected && this.dateAreEqual(this.frame[position], this.dateSelected)){
        return this.selectionColor;
      }else{
        return
      }
    }


    let today = new Date()

    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);

    if(attribute === 'opacity'){
      if ((this.frame[position].getTime() < today.getTime()) && this.modeNoBack){
        return 0.5
      }
    }else{
      return
    }

    if(this.weekDayFilter || this.weekDayFilter === 0){
      if(this.frame[position].getDay() != this.weekDayFilter ){
        return 0.5
      }
    }
  }

  dateAreEqual(date1:Date,date2:Date){
    if((date1.getFullYear() === date2.getFullYear()) && (date1.getMonth() === date2.getMonth()) && (date1.getDate() === date2.getDate())){
      return true
    }else{
      return false
    }
  }

  btnDisabled(position:string){
    let today = new Date()
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    if ((this.frame[Number(position)] < today) && this.modeNoBack) {
      return true
    }
    if (this.weekDayFilter|| this.weekDayFilter === 0) {
      if (this.frame[position].getDay() != this.weekDayFilter) {
        return true
      }
    }
  }
  getMonth(date: Date) {
    switch (date.getMonth()) {
      case 0: this.month = {word:'Enero', number:0}
        break;
      case 1: this.month = { word: 'Febrero', number: 1 }
        break;
      case 2: this.month = { word: 'Marzo', number: 2 };
        break;
      case 3: this.month = { word: 'Abril', number: 3 }
        break;
      case 4: this.month = { word: 'Mayo', number: 4 }
        break;
      case 5: this.month = { word: 'Junio', number: 5 }
        break;
      case 6: this.month = { word:'Julio', number: 6 }
        break;
      case 7: this.month = {word:'Agosto', number:7}
        break;
      case 8: this.month = { word: 'Septiembre', number: 8 }
        break;
      case 9: this.month = { word: 'Octubre', number: 9 }
        break;
      case 10: this.month = { word: 'Noviembre', number: 10 }
        break;
      case 11: this.month = { word: 'Diciembre', number: 11 }
    }
  }

}
