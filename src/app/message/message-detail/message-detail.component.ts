import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMessageDetail } from 'src/app/models/IMessageDetail';
import { MessageDetailService } from 'src/app/services/message-detail.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  //  @Input() id!:string;
  messageDetail:IMessageDetail | undefined;
  constructor(private messageDetailService :MessageDetailService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.messageDetailService.getMessageDetail(this.id).subscribe(data=>
    //   {this.messageDetail=data;
    //   console.log(data)});
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get("id");
      this.messageDetailService.getMessageDetail(id).subscribe(m => this.messageDetail = m);
    })
  }


}
