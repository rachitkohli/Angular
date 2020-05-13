import { Component, OnInit } from '@angular/core';
import { CardRecordService } from '../card-records/card-records.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDetail } from '../card-detail.model';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css']
})
export class CardUpdateComponent implements OnInit {
  pageTitle:string = "Update Card Details"
  carddetail: CardDetail = new  CardDetail();
  constructor(private route: ActivatedRoute,
              private router: Router, 
              private cardservice: CardRecordService) { }
  
  ngOnInit(): void {
    let id= +this.route.snapshot.paramMap.get('pmId');
    this.getRecordByID(id);
    console.log('Card Update Initialized!')
  }
  
  getRecordByID(id:number) {
    this.cardservice.getCardRecordById(id).subscribe (card=>{this.carddetail=card});    
  }

  dummycard:CardDetail 
  updateCardRecord(userForm: NgForm) {
    this.dummycard = new CardDetail();
    this.dummycard.cardOwnerName = userForm.value.cardOwnerName;
    this.dummycard.cardNumber = userForm.value.cardNumber;
    this.dummycard.expirationDate = userForm.value.expirationDate;
    this.dummycard.cvv = userForm.value.cvv;
    
    if (userForm.value.pmId!=null)
    {
      this.dummycard.pmId=userForm.value.pmId;
      this.cardservice.updateRecord(this.dummycard).subscribe();
    }

    else
      {
        this.cardservice.addRecord(this.dummycard).subscribe();
      }

    console.log ('Update Fired!');
    
  }

}
