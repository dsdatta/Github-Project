import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Lazy loading
const routes: Routes = [
   { path: 'repos', loadChildren: () => import('./components/repos/repos.module').then(m => m.ReposModule) },
   { path: 'commits/:owner/:repo', loadChildren: () => import('./components/commits/commits.module').then(m => m.CommitsModule) },
   {  path: '**', redirectTo: 'repos'} //by default redirect to repos
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
