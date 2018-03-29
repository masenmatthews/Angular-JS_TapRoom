import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewKegComponent } from '../view-keg/view-keg.component';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-detail-keg',
  templateUrl: './detail-keg.component.html',
  styleUrls: ['./detail-keg.component.css']
})
export class DetailKegComponent implements OnInit {

  @Input() childSelectedKeg: Keg;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();
  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  decreaseBeer(){
      // alert("Keg selected = " + this.childSelectedKeg);
      this.childSelectedKeg.pints--;
      console.log("only " + this.childSelectedKeg.pints + " pints left." );
  }

}
