import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },  
    { path: 'todos', component: TabsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,TabsComponent]