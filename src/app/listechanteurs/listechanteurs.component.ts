import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  private chanteurs: any[];
  constructor(private spotService: SpotifyService) { }

  chercherChanteur(motcle: string) {
    this.spotService.getChanteurs(motcle).subscribe
      (
      resultat => {
        //this.chanteurs = resultat["albums"]["items"];
        this.chanteurs = resultat["artists"]["items"];
        
        console.log(this.chanteurs);
          }
      )
  }

  ngOnInit() {
    console.log("abvc");
  }

}
