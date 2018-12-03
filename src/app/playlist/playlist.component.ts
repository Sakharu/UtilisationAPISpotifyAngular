import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']


})
export class PlaylistComponent implements OnInit {

  private playlists: any[];

  constructor(private playService: PlaylistService) { }

  ngOnInit() {
    this.getPlaylists();

  }

  getPlaylists() {
    this.playService.getPlaylists().subscribe
      (
      resultat => {
        console.log(resultat);
        this.playlists = resultat;
        console.log(this.playlists);
      }
      )
  }

  addPlaylist(nom: string, description: string, publique: string, collaborative: string) {
    if (nom != null && nom != "") {
      var publi;
      if (publique == "privée") {
        publi = false;
        
      }
      else {
        publi = true;
      }


      if (description == null) {
        description = "";
      }
      var colla;
      if (collaborative == "Collaborative") {
        colla = true;
        publi=true;
      }
      else {
        colla = false;
      }

      console.log("desc: " + description + " collaborative " + collaborative+" privée "+publique)

      this.playService.addPlaylist(nom, description, publi, colla).subscribe(
        resultat => {
          console.log(resultat);
          this.playlists = resultat;
          console.log(this.playlists);
        }
      )
    }
  }
}
