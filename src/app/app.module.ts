import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateOrder } from '../pages/create-order/createorder';
import { DashboardPurchase } from '../pages/dashboard-purchase/purchase';
import { DashboardOrderPurchase } from '../pages/dashboard-orderpurchase/dashboard-orderpurchase';
import { DashboardInvoice } from '../pages/dashboard-invoice/dashboard-invoice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateOrder,
    DashboardPurchase,
    DashboardOrderPurchase,
    DashboardInvoice
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateOrder,
    DashboardPurchase,
    DashboardOrderPurchase,
    DashboardInvoice
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
