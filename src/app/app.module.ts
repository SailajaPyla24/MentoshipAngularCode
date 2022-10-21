import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemregComponent } from './memreg/memreg.component';
import { SearchComponent } from './search/search.component';
import { SubmitclaimComponent } from './submitclaim/submitclaim.component';
import { LoginComponent } from './login/login.component';
import { AvailableclaimComponent } from './availableclaim/availableclaim.component';
import { AdddependentComponent } from './adddependent/adddependent.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MemregComponent,
    SearchComponent,
    SubmitclaimComponent,
    LoginComponent,
    AvailableclaimComponent,
    AdddependentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
