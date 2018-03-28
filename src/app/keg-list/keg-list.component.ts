import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {

  @Input() childKegList: Keg[];
  @Input() showFormBool: boolean;

  @Output() clickedBool = new EventEmitter;

  displayForm() {
    this.showFormBool = !this.showFormBool;
    this.clickedBool.emit(this.showFormBool);
  }

  constructor() { }

  ngOnInit() {
  }

  @Output() viewSender = new EventEmitter();
  kegClicked(kegToView: Keg) {
    this.viewSender.emit(kegToView);
  }

  @Output() newKeg = new EventEmitter();
  newKegClicked() {
    this.newKeg.emit();
  }

}
