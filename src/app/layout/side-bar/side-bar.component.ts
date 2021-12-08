import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from 'src/app/message/messages/messages.component';
import { MessagesService } from 'src/app/services/messages.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements  OnInit {
  itemIdFromMessages:string="";
  shareMessage:number=0;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.shareService.getMessage().subscribe(data=>this.shareMessage=data);
  }

  receiveItemId(s:string){
    this.itemIdFromMessages=s;
    console.log('s');
    console.log(this.itemIdFromMessages);
  }


}
