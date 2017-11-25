import {Injectable} from '@angular/core';

@Injectable()

export class ServicioDetalle {
    detalle =  [
      { id: 1, titulo: "Guns N' Roses", img: "https://pbs.twimg.com/profile_images/885491686327169024/ufh03Wmg_400x400.jpg", descripcion: "Nacidos en Los Ángeles a partir de la fusión entre las bandas Hollywood Rose y L.A. Guns, la banda estaba formada por Axl Rose en la voz, Slash en la guitarra líder, Izzy Stradlin en la segunda guitarra, Duff McKagan en bajo y Steven Adler en la batería. Mira el video para saber como continúa la historia!"},
      { id: 2, titulo: "Scorpions", img: "https://i.pinimg.com/736x/c9/85/71/c98571aa77b34adb8cd86e65535a3c01--rock-design-scorpion.jpg", descripcion: "Una de las bandas de hard rock más importantes y comerciales de los años 70 y 80 fue Scorpions, grupo que desde Alemania conquistó el mundo con su combinación de exaltadas baladas y fibrosas canciones rock de arrojo guitarrero e intensa factura vocal."},
      { id: 3, titulo: "Aerosmith", img: "http://www.elpopular.pe/sites/default/files/styles/img_620x465/public/imagen/2016/05/11/Noticia-152312-aerosmith.jpg?itok=hAkZ1Iqc", descripcion: "Etiquetados inicialmente como una versión amplificada de The Rollings Stones, tenidos luego por una banda heavy ordinaria, y al final resurgidos y elegidos como arquetipo de rock'n'roll band de perfecto estilo años setenta ésta es la retorcida y poco realista historia de Aerosmith, uno de los mejores grupos surgidos en el área de Boston en los años setenta."},
      { id: 4, titulo: "Iron maiden", img: "https://shortlist.imgix.net/app/uploads/2013/06/24184224/40-pieces-of-wisdom-from-iron-maiden-lyrics-36.jpg?w=1200&h=1&q=90&fit=max&auto=format", descripcion: "La historia de Iron Maiden parte en el año 1971, cuando Steve Harris inspirado en bandas como Wishbone Ash, Thin Lizzy, UFO, Black Sabbath, Jethro Tull, Genesis, King Crimson, The Who y Deep Purple, entre otros, adquiere un bajo Fender Precision Bass por unas 40 libras esterlinas, y tras dejar atrás la opción de la parte de su carrera. Sin embargo, la banda basó su éxito en llegar directamente a los aficionados, grabando discos de alta calidad y realizando actuaciones en vivo consideradas de las mejores del género."},
      { id: 5, titulo: "Rata blanca", img: "http://www.ratablanca.net/img/Imagen-Home-Provisoria-2.png", descripcion: "La banda se disolvió finalmente a comienzos de 1998 y Walter decidió llevar a cabo un proyecto solista llamado Walter Giardino Temple, donde después de varios cambios de músicos el sonido obtenido era semejante al de Rata Blanca. Mientras, Gustavo Rowek y Sergio Berdichevsky permanecieron juntos y formaron Nativo."},
      { id: 6, titulo: "Betzefer", img: "https://www.rookiesandkings-shop.de/images/product_images/popup_images/image_73213_1.jpg", descripcion: "En el 2001 publicaron un EP auto-producido con el sugerente título de: 'Some Tits, But No Bush', en 2003 repitieron con otro EP auto-producido al que llamaron 'New Hate', su disco debut de larga duración 'Down Low', lo publico en 2005 Roadnunner Records y fue producido por el afamado Tue Madsen, en marzo de 2007 rompen"}
    ];

    public getDetalles (){
        return this.detalle;
    }

    public getDetalle(id){
        return this.detalle.filter(function(e,i){
            return e.id == id
        })[0] || {id: null , titulo: null, img: null, descripcion: null};
    }
}