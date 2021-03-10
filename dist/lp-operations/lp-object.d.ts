export declare class LpObject {
    static copyObject(object: any): any;
    static areEquals(obj1: any, obj2: any): boolean;
    static getObjectDifferences(obj1: any, obj2: any): {
        [key: string]: any;
    };
    static mergeObjects(initialObj: any, newObj: any): any;
    static toQueryString(filters: any): string;
}
