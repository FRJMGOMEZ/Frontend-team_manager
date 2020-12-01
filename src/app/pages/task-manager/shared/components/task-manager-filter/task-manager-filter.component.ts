import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { User } from '../../../../../shared/models/user.model';
import { OOService } from '../../../../../library/providers/objects-operations.service';

@Component({
  selector: 'app-task-manager-filter',
  templateUrl: './task-manager-filter.component.html',
  styleUrls: ['./task-manager-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskManagerFilterComponent implements OnChanges {

  @Output() getItems: EventEmitter<string> = new EventEmitter<string>();
  @Input() projectId:string
  @Input() participants:User[]
  filters={
    _id:'',
    name:'',
    user:'',
    participants:[],
    status:null,
    from:null,
    to:null,
    priority:'',
    project:''
  }
  options = {
     status:[{label:'done',value:true},{label:'pending',value:false}],
     user:[],
     participants:[],
     priority:[{label:'low',value:3},{label:'medium',value:2},{label:'high',value:1}]
  }
  constructor() { }

  ngOnInit(){
    this.filters.project = this.projectId;
  }
  ngOnChanges(changes:SimpleChanges){
       if(changes.participants && this.participants){
         this.options.participants = OOService.copyObject(this.participants);
         this.options.user = this.participants.filter((p)=>{console.log({p}); return p.role === 'ADMIN_ROLE'})
       }
  }

  setDate(date:Date,key:string){
     this.filters[key] = date.getTime()
  }
  searchItems(){
    let queryString = OOService.toQueryString(this.filters);
    this.getItems.next(queryString)
  }


}