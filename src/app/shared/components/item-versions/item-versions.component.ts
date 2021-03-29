import { Component, Input, OnInit, SimpleChanges, forwardRef, Output, EventEmitter } from '@angular/core';
import { LpObject } from 'lp-operations';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-item-versions',
  templateUrl: './item-versions.component.html',
  styleUrls: ['./item-versions.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ItemVersionsComponent),
      multi: true,
    },
  ]
})
export class ItemVersionsComponent implements OnInit, ControlValueAccessor {

  @Input() item: any;

  @Input() date: number;

  @Output() prevVersion = new EventEmitter<any>();

  @Output() currentVersion = new EventEmitter<number>();

  itemVersions:any[];

  itemV:number;

  constructor() { }

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.date && this.date) {
       if(changes.date.firstChange){
         timer(250).subscribe(()=>{
           this.selectVersion()
         })
       }else{
         this.selectVersion();
       }
    }
  }
  private propagateChange = (_: any) => { };
  public writeValue(obj: any) { 
    if(obj){
      if(!this.item){
        this.item = LpObject.copyObject(obj);
        this.generateVersions(obj);
      }else{
        this.generateVersions(obj);
        this.propagateChange(this.item);
      }  
    }
  }
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  public registerOnTouched() { }

  generateVersions(item:any) {
    this.itemVersions = [];
    this.itemVersions.push( item ? item : this.item);
    for (let i = item ? item.prevStates.length : this.item.prevStates.length; i >= 1; i--) {
      this.itemVersions.unshift(this.getVersion(this.itemVersions[0], item ? item.prevStates[i-1].changes : this.item.prevStates[i - 1].changes));
    }
  }
  getVersion(taskBase, taskToMerge) {
    return LpObject.mergeObjects(taskBase, taskToMerge);
  }
  selectVersion(version?:number){
    if(version === undefined){
      this.item.prevStates.forEach((pS, i) => {
        this.date > pS.date ? version = i + 1 : null;
      })
      if (version === undefined) {
        version = 0;
      }
    }
    this.item = this.itemVersions[version];
    this.itemV = version;
    this.prevVersion.emit(this.itemVersions[version-1] ? this.itemVersions[version -1] :this.itemVersions[this.itemVersions.length -1]);
    this.currentVersion.emit(this.itemV);
    this.propagateChange(this.item);
  }

}
