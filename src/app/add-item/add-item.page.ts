import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  public titre : string;
  public description : string;
  public prix : number;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }
  saveItem(){
    let newItem = {
      titre : this.titre,
      description : this.description,
      prix : this.prix
    }
    this.modal.dismiss(newItem);

  }
  close(){
    this.modal.dismiss();
  }
}
