import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/admin-layout'
import { SimpleLayoutComponent } from '@colmena/admin-layout'

import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterComponent } from './components/router/router.component'

const routes: Routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '', component: SimpleLayoutComponent, children: [
    { path: '', loadChildren: '@colmena/module-admin-auth#AuthModule' },
    { path: 'router', component: RouterComponent },
    { path: 'not-found', component: NotFoundComponent },
  ]
  }, {
    path: '', component: FullLayoutComponent, children: [
      { path: '', loadChildren: '@colmena/module-admin-content#ContentModule' },
      { path: '', loadChildren: '@colmena/module-admin-dashboard#DashboardModule' },
      { path: '', loadChildren: '@colmena/module-admin-dev#DevModule' },
      { path: '', loadChildren: '@colmena/module-admin-system#SystemModule' },
    ]
  },
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
