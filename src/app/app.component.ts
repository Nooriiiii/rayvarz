import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MessagesComponent } from './message/messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rayvarz';

  ngOnInit(){
  }
  }
