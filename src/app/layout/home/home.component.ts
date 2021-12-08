import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit,AfterViewInit,AfterViewChecked {
  title = 'rayvarz';
  itemIdFromSideBar:string="";
  @ViewChild(SideBarComponent)
  sbc!: { itemIdFromMessages: string; };
  ngOnInit(){

  }
  ngAfterViewInit(){
    setTimeout(()=>this.itemIdFromSideBar = this.sbc.itemIdFromMessages,0);
    // console.log('afterViewChecked');
    // console.log(this.sbc.itemIdFromMessages);
  }
  ngAfterViewChecked(){
    setTimeout(()=>this.itemIdFromSideBar = this.sbc.itemIdFromMessages,0);
    // console.log('afterViewChecked');
    // console.log(this.sbc.itemIdFromMessages);
  }
}
