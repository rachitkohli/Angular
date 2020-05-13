import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  ngOnInit(): void {
    console.log('Star Initialized');
  }

  onClick() : void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
