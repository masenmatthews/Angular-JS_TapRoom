import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-view-keg',
  templateUrl: './view-keg.component.html',
  styleUrls: ['./view-keg.component.css']
})
export class ViewKegComponent implements OnInit {

  @Input() childSelectedKeg: Keg;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();
  
  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }


}
