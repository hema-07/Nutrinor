import { Component } from '@angular/core';
import { CreateOrder } from '../create-order/createorder';
import {  NavController, NavParams } from 'ionic-angular';
import { DashboardOrderPurchase } from '../dashboard-orderpurchase/dashboard-orderpurchase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController) {
  }

  login() {
    this.navCtrl.push(DashboardOrderPurchase);
  }
}
