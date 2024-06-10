import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { XFeedComponent } from './components/x-feed/x-feed.component';
import { XEditComponent } from './components/x-edit/x-edit.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { 
    path: "",
    redirectTo: "/signin",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "x",
    component: XFeedComponent
  },
  {
    path: "x/:id",
    component: XEditComponent
  },
  { 
    path: "user/:username", 
    component: UserHomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
