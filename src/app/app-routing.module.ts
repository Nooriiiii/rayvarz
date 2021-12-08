import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HampaComponent } from './hampa/hampa.component';
import { HomeComponent } from './layout/home/home.component';
import { MessageDetailComponent } from './message/message-detail/message-detail.component';

const routes: Routes = [
  {path: '', component:MessageDetailComponent },
  {path: ':id', component: MessageDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
