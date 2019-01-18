import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormlyModule} from "@ngx-formly/core";
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {CardComponent} from "./type/card/card.component";
import {CardTabComponent} from "./type/card-tab/card-tab.component";
import {CardTabsComponent} from "./type/card-tabs/card-tabs.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTabComponent,
    CardTabsComponent
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
