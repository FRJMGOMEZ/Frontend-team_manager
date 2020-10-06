import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayOperationsService {
  constructor() {}
 divideArray(array:any[],size:number){
   const chunked_arr = [];
   for (let i = 0; i < array.length; i++) {
     const last = chunked_arr[chunked_arr.length - 1];
     if (!last || last.length === size) {
       chunked_arr.push([array[i]]);
     } else {
       last.push(array[i]);
     }
   }
   return chunked_arr;
 }
  public static update(oldArray,item,method:string){
    let updated
    switch(method){
      case 'POST':
        updated = [...oldArray,item];
      break;
      case 'PUT':
        updated = oldArray.map((eachItem)=>{ return eachItem._id === item._id ? item : eachItem}) 
      break;  
      case 'DELETE':
        updated = oldArray.filter((eachItem)=>{ return eachItem._id != item._id}) 
        break;
    }
    return updated
  }

  public static hasItem(array,item):boolean{
    if(array.map((eachItem)=>{ return eachItem._id}).includes(item._id)){
      return true
    }
    return false;
  }
}
