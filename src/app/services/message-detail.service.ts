import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMessageDetail } from '../models/IMessageDetail';
import { map } from 'rxjs/Operators';

@Injectable()
export class MessageDetailService {
  messagesDetail : IMessageDetail[]=[];
  messageDetail !:IMessageDetail;
  constructor(private http:HttpClient) { }

  getMessageDetail(id:any){
     return this.http.get<IMessageDetail[]>('data/messageDetail.json').pipe(
       map (d => {
        // throw new Error('Some error');
        return d.find(p => p.messageID === id);
      }));
  };
}
