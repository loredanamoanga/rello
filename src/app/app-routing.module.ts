import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExtraComponent} from "./views/extra/extra.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '', component: ExtraComponent, data: {
      title: 'Home'
    }
  },
  {
    path: 'Dashboard', component: DashboardComponent, data: {
      title: 'Dashboard'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
