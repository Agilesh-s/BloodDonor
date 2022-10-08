import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';
import { DeleteDonorComponent } from './delete-donor/delete-donor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDonorComponent,
    SearchDonorComponent,
    DeleteDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
