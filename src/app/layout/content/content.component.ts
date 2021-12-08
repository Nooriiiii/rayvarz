import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
// import {ShareService} from '../../services/share.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
mid:string='19';
shareMessage:number=0;
  constructor(private shareService : ShareService) { }

  ngOnInit(): void {
    this.shareService.getMessage().subscribe(arg => this.shareMessage = arg);
  }
  // onInput(s:string){
  onInput(event:any){
    // this.shareMessage=(event.target as HTMLInputElement).value;
    this.shareService.changeMessage(event.target.value);
    // this.shareService.changeMessage(s);
  }
}
