import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMessage } from 'src/app/models/IMessage';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messagesList!:IMessage[];

  @Output() itemIdOutput=new EventEmitter<string>();
  constructor(private messagesService:MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getAllMessages().subscribe(data=>{
      this.messagesList=data;
  })
  }

  onMessageItemClick(s:string){
    this.itemIdOutput.emit(s);
  }

}
