import { Injectable } from "@angular/core";
import { CardDetail } from '../card-detail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class CardRecordService {
    readonly apiUrl = 'http://localhost:62725/api/paymentdetails';
    cardList: CardDetail[];

    constructor(private http: HttpClient, 
        private route: ActivatedRoute) {}

    getCardRecordList() : Observable<CardDetail[]> {
        // return this.http.get<CardDetail[]>(this.apiUrl);
        return this.http.get<CardDetail[]>(this.apiUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data)))
        );
    }

    getCardRecordById(id:number) : Observable<CardDetail> {
        console.log(this.apiUrl + '/' + id);
        return this.http.get<CardDetail>(this.apiUrl + `/${id}`).pipe(
            tap(data => console.log('Card Detail : ' + JSON.stringify(data)))
        );
    }

    addRecord(carddetail: CardDetail) : Observable<CardDetail> {       
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body={
            "cardOwnerName": carddetail.cardOwnerName,
            "cardNumber": carddetail.cardNumber,
            "expirationDate": carddetail.expirationDate,
            "cvv": carddetail.cvv
        }
        return this.http.post<CardDetail>(this.apiUrl, body, {headers});
    }

    updateRecord(carddetail: CardDetail) : Observable<CardDetail> {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        //let id =  +this.route.snapshot.paramMap.get('pmId');
        var body={
            "pmId": carddetail.pmId,
            "cardOwnerName": carddetail.cardOwnerName,
            "cardNumber": carddetail.cardNumber,
            "expirationDate": carddetail.expirationDate,
            "cvv": carddetail.cvv
        }
        return this.http.put<CardDetail>(this.apiUrl + `/${carddetail.pmId}`, body, {headers});
    }
}