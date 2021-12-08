import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private message=new BehaviorSubject(0);
constructor(private messagesService: MessagesService) {
  this.messagesService.getAllMessages().subscribe(data=>{
    this.message.next(data.length);});
}
  getMessage(){
    return this.message.asObservable();
  }
  changeMessage(n: number){
    this.message.next(n);
  }
}
