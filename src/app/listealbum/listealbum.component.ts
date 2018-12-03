import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../spotify.service';

@Component({
  selector: 'app-listealbum',
  templateUrl: './listealbum.component.html',
  styleUrls: ['./listealbum.component.css']
})
export class ListealbumComponent implements OnInit {

  private albums: any[];
  constructor(private spotService: SpotifyService) { }

  chercherAlbums(motcle: string) {
    this.spotService.getAlbums(motcle).subscribe
      (
      resultat => {
        console.log(resultat)
        this.albums = resultat["albums"]["items"];
        console.log(this.albums);
          }
      )
  }

  ngOnInit() {
    console.log("abvc");
  }

}
