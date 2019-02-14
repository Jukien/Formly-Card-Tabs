import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormlyUsingCardAsTypeComponent} from "./formly-using-card-as-type/formly-using-card-as-type.component";
import {FormlyUsingCardComponent} from "./formly-using-card/formly-using-card.component";

const routes: Routes = [
  {path: '', redirectTo: '/formly-using-card', pathMatch: 'full'},
  {path: 'formly-using-card', component: FormlyUsingCardComponent},
  {path: 'formly-using-card-as-type', component: FormlyUsingCardAsTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
