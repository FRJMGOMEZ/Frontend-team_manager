export declare class LpDate {
    static dateComparison(date1: Date, date2: Date): boolean;
    static isRangeInRange(event: {
        start: Date;
        end: Date;
    }, dayRange: {
        start: Date;
        end: Date;
    }): boolean;
    static createMonthlyRange(selectedDate: Date): {
        start: Date;
        end: Date;
    };
    static milisecondsToPeriod(milisecs1: number, milisecs2: number): any[];
    static milisecsToString(milisecs: any): any[];
    static monthValue(month: string | number): any;
}
