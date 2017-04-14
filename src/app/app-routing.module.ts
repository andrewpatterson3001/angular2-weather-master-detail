import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastsComponent } from './forecasts/forecasts.component';

const routes: Routes = [
  {path: '',      redirectTo: '/forecasts', pathMatch: 'full' },
  {path: 'forecasts', component: ForecastsComponent},
  {path: '**',     redirectTo: '/forecasts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
