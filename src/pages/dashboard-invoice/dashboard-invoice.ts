import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DashboardOrderPurchase } from '../dashboard-orderpurchase/dashboard-orderpurchase';

@Component({
  selector: 'page-invoice',
  templateUrl: 'dashboard-invoice.html'
})
export class DashboardInvoice {

  searchQuery: string = '';
  Order1: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }
buy(){
  let alert = this.alertCtrl.create({
    title: 'Invoice Confirmed',
    subTitle: 'Farmer has been invoiced',
    buttons: [
           {
        text: 'ok',
        handler: data => {
          this.navCtrl.push(DashboardOrderPurchase);
        }
      }
    ]
  });
  alert.present();
}
}
