import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 const rout:Routes=[
   {
     path:"men",
     component:MenComponent
   },
   {
     path:"login",
     component:LoginComponent    
   },{
     path:"women",
     component:WomenComponent
   },{
     path:"mobile",
     component:MobileComponent
   },{
     path:"register",
     component:RegisterComponent
   }
 ]

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    MobileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(rout),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
