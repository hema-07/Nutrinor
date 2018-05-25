import { Component } from '@angular/core';
import { DashboardOrderPurchase } from '../dashboard-orderpurchase/dashboard-orderpurchase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-order',
  templateUrl: 'createorder.html'
})
export class CreateOrder {
  Order1: any[];
  pet:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
     this.pet = "By Product";
    // this.Order1 = [
    //   {Item: "UREA", code:"AO101", Quantity:"1000 Ton"},
    //   {Item: "Potassium Nitrate", code:"PO101", Quantity:"2200 Ton"},
    //   {Item: "Calcium Nitrate", code: "CA101", Quantity:"1500 Ton"}
    // ];
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad OpenOrdersPage');
  // }
  editItem(event,item){
    let alert = this.alertCtrl.create({
    title: 'Order Confirmed',
    subTitle: 'Order has been confirmed with farmers',
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
