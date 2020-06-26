import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectManageComponent} from './manage/manage.component';

const routes: Routes = [ {path: 'manage', component: ProjectManageComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }
