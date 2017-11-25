import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDetalle } from '../../servicios/servicio.detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  detalle = [];
  deta = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicioDetalle: ServicioDetalle) {
      this.detalle = this.ServicioDetalle.getDetalles();
      this.deta = this.ServicioDetalle.getDetalles();  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public goToPageDetalle(id){
    this.navCtrl.push('DetallePage', {id:id});
  }

}
