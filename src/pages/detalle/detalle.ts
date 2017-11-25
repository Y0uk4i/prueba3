import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioDetalle } from '../../servicios/servicio.detalle';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
    
    id=null;
    detalle = {id: null , titulo: null, img: null, descripcion: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicioDetalle: ServicioDetalle) {
  
    this.id  = this.navParams.get('id');
    this.detalle = this.ServicioDetalle.getDetalle(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}