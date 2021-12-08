import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './layout/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MessagesComponent } from './message/messages/messages.component';
import { CategoriesComponent } from './message/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageDetailComponent } from './message/message-detail/message-detail.component';
import { MessageDetailService } from './services/message-detail.service';
import { ShareService } from './services/share.service';
import { HampaComponent } from './hampa/hampa.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ContentComponent,
    MessagesComponent,
    CategoriesComponent,
    MessageDetailComponent,
    HampaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageDetailService,ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
