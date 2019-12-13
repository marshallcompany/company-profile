import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { WelcomeGuard } from './guards/welcome.guard';

import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApplicationComponent } from './pages/application/application.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JobDescriptionComponent } from './pages/job-description/job-description.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [WelcomeGuard] },
  { path: 'application', component: ApplicationComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'job-description', component: JobDescriptionComponent, canActivate: [AuthGuard] },
  { path: 'apply/:jobId/keep/:keep', component: JobDescriptionComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/profile', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

