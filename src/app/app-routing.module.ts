import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddependentComponent } from './adddependent/adddependent.component';
import { AvailableclaimComponent } from './availableclaim/availableclaim.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemregComponent } from './memreg/memreg.component';
import { SearchComponent } from './search/search.component';
import { SubmitclaimComponent } from './submitclaim/submitclaim.component';
//import { LoggedInGuard } from "./auth/logged-in.guard";

const routes: Routes = [
  {path:'home',component:MemregComponent},
  {path:'search',component:SearchComponent},
  {path:'submit',component:SubmitclaimComponent},
  {path:'submit/:name/:dob',component:SubmitclaimComponent},
  {path:'Login',component:LoginComponent},
  {path:"Logout",component:LoginComponent},
  {path:'Add',component:AdddependentComponent},
  {path:"Available",component:AvailableclaimComponent
  //,canActivate: [LoginComponent]
},
  {path:'homepage',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

