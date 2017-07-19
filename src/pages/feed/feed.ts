import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  
  public obj_feed = {
    titulo: "Thiago de Aguiar Silva",
    data: "17 de Julho de 2017", 
    descricao: "#FazendoUmPrograma",
    qntd_likes: 567, 
    qntd_coment: 102, 
    time_pub: "11 Horas atras",
    like: 1
  }

  public nomeUsuario: String = "Thiago Hercules";
  public nomeUsuario2: String = "Cleiton Aguiar";
  public lista_Filmes = Array<any>();
  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);

  }

  public likePhoto(qntd_likes){
   qntd_likes.like++;
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body)
        this.lista_Filmes = objeto_retorno.results;
;        console.log(objeto_retorno);
     }, error => {
       console.log(error);
     }
    )
  }

}
