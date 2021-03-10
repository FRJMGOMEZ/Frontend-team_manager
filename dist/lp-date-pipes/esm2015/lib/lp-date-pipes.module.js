import { NgModule } from '@angular/core';
import { LpParseHourPipe } from './lp-parse-hour.pipe';
import { LpParseDatePipe } from './lp-parse-date.pipe';
export class LpDatePipesModule {
}
LpDatePipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LpParseDatePipe, LpParseHourPipe],
                imports: [],
                exports: [LpParseDatePipe, LpParseHourPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtZGF0ZS1waXBlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvMzQ2OTUvRGVza3RvcC9EUkFGVC90ZWFtLW1hbmFnZXItZnJvbnRlbmQvcHJvamVjdHMvbHAtZGF0ZS1waXBlcy9zcmMvIiwic291cmNlcyI6WyJsaWIvbHAtZGF0ZS1waXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXZELE1BQU0sT0FBTyxpQkFBaUI7OztZQU43QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMcFBhcnNlSG91clBpcGUgfSBmcm9tICcuL2xwLXBhcnNlLWhvdXIucGlwZSc7XG5pbXBvcnQgeyBMcFBhcnNlRGF0ZVBpcGUgfSBmcm9tICcuL2xwLXBhcnNlLWRhdGUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xwUGFyc2VEYXRlUGlwZSwgTHBQYXJzZUhvdXJQaXBlXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbTHBQYXJzZURhdGVQaXBlLCBMcFBhcnNlSG91clBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIExwRGF0ZVBpcGVzTW9kdWxlIHsgfVxuIl19