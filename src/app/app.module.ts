import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AgmCoreModule } from '@agm/core';
import { MapshowComponent } from './mapshow/mapshow.component';
import { VehicleOwnerDetailsComponent } from './vehicle-owner-details/vehicle-owner-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    SignupformComponent,
    LoginformComponent,
    MapshowComponent,
    VehicleOwnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
     AgmCoreModule.forRoot({
   apiKey: 'AIzaSyAgkUN5K8t8X_SfXSWe60mn4xqu5SPc_fo'
 }),
    RouterModule.forRoot([
    {path:'',pathMatch:'full',redirectTo:'header'},
    {path:'header',component:HeaderComponent},
    {path:'signup',component:SignupComponent},
    {path:'signupform',component:SignupformComponent},
    {path:'login',component:LoginComponent},
    {path:'loginform',component:LoginformComponent},
    {path:'user',component:UserComponent},
    {path:'mapshow',component:MapshowComponent},
    {path:'vehicle-owner-details',component:VehicleOwnerDetailsComponent},


    ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
