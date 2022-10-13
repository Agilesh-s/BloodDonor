import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';
import { DeleteDonorComponent } from './delete-donor/delete-donor.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllDonorComponent } from './view-all-donor/view-all-donor.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddDonorComponent
  },
  {
    path:"search",component:SearchDonorComponent
  },
  {
    path:"delete",component:DeleteDonorComponent
  },
  {
    path:"view",component:ViewAllDonorComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDonorComponent,
    SearchDonorComponent,
    DeleteDonorComponent,
    ViewAllDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
