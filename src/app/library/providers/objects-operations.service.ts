import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/* Object-operations-service */
export class OOService {

  public static copyObject(object: any) {
    return JSON.parse(JSON.stringify(object));
  }

  public static areEquals(obj1: any, obj2: any): boolean {
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
    if ((obj1 === undefined && obj2 !== undefined) ||
      (obj1 === undefined && obj1 !== undefined) ||
      (obj1 === null && obj2 !== null) ||
      (obj2 === null && obj1 !== null)) {
      return false;
    }
    if (typeof obj1 === 'object') {
      if (Array.isArray(obj1)) {
        if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
          return false;
        }
        for (let i = 0; i < obj1.length; i++) {
          if (!this.areEquals(obj1[i], obj2[i])) {
            return false;
          }
        }
      } else {
        for (let prop in obj1) {
          if (obj1.hasOwnProperty(prop)) {
            if (!obj2.hasOwnProperty(prop)) {
              return false;
            }
            //Endless loop fix for recursive properties
            if (!this.areEquals(obj1[prop], obj2[prop])) {

              return false;
            }
          }
        }
        for (let prop in obj2) {
          if (obj2.hasOwnProperty(prop)) {
            if (!obj1.hasOwnProperty(prop)) {
              return false;
            }
          }
        }
      }
      return true;
    }
    return obj1 === obj2;
  }
  public static  getObjectDifferences(obj1,obj2){ 
    let differences: { [key: string]: any } = {};
    Object.keys(obj1).forEach((key1,index)=>{
       Object.keys(obj2).forEach((key2)=>{
          if(key1 === key2){
              if( typeof obj1[key1] === 'object'){
                    if(!OOService.areEquals(obj1[key1],obj2[key2])){
                        differences[key2] = obj2[key2]
                    }
              }else{
                   if(obj1[key1] != obj2[key2]){
                     differences[key2] = obj2[key2]
                   }
              }
          }
       })
    })
    console.log({ differences })

    return differences

 
  }
}
