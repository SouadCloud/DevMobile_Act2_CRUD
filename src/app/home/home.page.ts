import { Component, OnInit } from '@angular/core';
import { AddItemPage } from '../add-item/add-item.page';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public produits =[];
 

  constructor(public modal: ModalController, private router : Router) {}

  ngOnInit(){

    this.produits = [
      {titre : "Pull", description : "Pull - femme", prix : 45.500 },
      {titre : "Pantalon", description : "Pantalon - femme", prix : 50.000},
      {titre : "Chemise", description : "Chemise - femme", prix : 50.000}
    ]
    console.log(this.produits)

  }
  async addItem(){
    const modal = await this.modal.create({
      component: AddItemPage

    });
    modal.onDidDismiss().then((item) =>{
      this.produits.push(item.data);

    });
    return await modal.present();
  }
  viewDetails(produit){
    let navigationExtras: NavigationExtras = {state: {item: produit}};
    this.router.navigateByUrl('item-details', navigationExtras)

  }

}
