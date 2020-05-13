import { Component, OnInit } from '@angular/core';
import { CardRecordService } from './card-records.service';
import { CardDetail } from '../card-detail.model';

@Component({
  selector: 'app-card-records',
  templateUrl: './card-records.component.html',
  styleUrls: ['./card-records.component.css']
})
export class CardRecordsComponent implements OnInit {
  cardrecords: CardDetail[];
  pageTitle: string = "This are Card Record details";
  constructor(private cardservice: CardRecordService) { }

  ngOnInit(): void {
    this.cardservice.getCardRecordList().subscribe (cards =>{
      this.cardrecords = cards
    })
    console.log('API Called');
  }

}
