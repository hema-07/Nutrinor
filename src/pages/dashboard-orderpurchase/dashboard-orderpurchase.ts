import { Component } from '@angular/core';
import { CreateOrder } from '../create-order/createorder';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DashboardPurchase } from '../dashboard-purchase/purchase';
@Component({
  selector: 'page-orderpurchase',
  templateUrl: 'dashboard-orderpurchase.html'
})
export class DashboardOrderPurchase {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
buy1(){
  this.navCtrl.push(CreateOrder);
}
// buy2(){
//   this.navCtrl.push(CreateOrder);
// }
buy3(){
  this.navCtrl.push(DashboardPurchase);
}
logout(){
  this.navCtrl.push(HomePage);
}
}
