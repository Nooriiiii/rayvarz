import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMessage } from '../models/IMessage';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http:HttpClient) { }
  getAllMessages():Observable<IMessage[]>{
    return this.http.get<IMessage[]>('data/messages.json')
  }

}
