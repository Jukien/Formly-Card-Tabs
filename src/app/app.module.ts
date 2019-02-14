import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormlyModule} from "@ngx-formly/core";
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {FormlyUsingCardAsTypeComponent} from './formly-using-card-as-type/formly-using-card-as-type.component';
import {CardTabsComponent} from "./shared/ui/card-tabs/card-tabs.component";
import {CardTabComponent} from "./shared/ui/card-tab/card-tab.component";
import {CardComponent} from "./shared/formly/type/card/card.component";
import {FormlyUsingCardComponent} from './formly-using-card/formly-using-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTabComponent,
    CardTabsComponent,
    FormlyUsingCardAsTypeComponent,
    FormlyUsingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {name: 'card', component: CardComponent},
      ],
    }),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
