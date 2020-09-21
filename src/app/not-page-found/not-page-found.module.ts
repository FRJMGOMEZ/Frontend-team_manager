import { NotPageFoundComponent } from './not-page-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const notPageFoundRoutes: Routes = [
    {
        path: '',
        component:NotPageFoundComponent
    },
];
@NgModule({
    declarations: [
        NotPageFoundComponent
    ],
    imports: [
        RouterModule.forChild(notPageFoundRoutes)
    ],
    providers: []
})
export class NotPageFoundModule { }