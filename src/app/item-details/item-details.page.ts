import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  titre : string;
  description : string;
  prix : number;

  constructor(private route: ActivatedRoute, private router: Router, private navControl : NavController) { 
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        let produit = this.router.getCurrentNavigation().extras.state.item;
        if (produit){
          this.titre = produit.titre;
          this.description = produit.description;
          this.prix = produit.prix;
        }
      }
    })
    
  }

  ngOnInit() {
  }
  navigatetoHome()
  {
    this.navControl.navigateBack('home');

  }

}
