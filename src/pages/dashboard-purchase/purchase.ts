import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DashboardInvoice } from '../dashboard-invoice/dashboard-invoice';
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html'
})
export class DashboardPurchase {

  searchQuery: string = '';
  Order1: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }
buy(){
  let alert = this.alertCtrl.create({
    title: 'Order Confirmed',
    subTitle: 'Shipment Advice has been send to farmers',
    buttons: [
           {
        text: 'ok',
        handler: data => {
          this.navCtrl.push(DashboardInvoice);
        }
      }
    ]
  });
  alert.present();
}

}
