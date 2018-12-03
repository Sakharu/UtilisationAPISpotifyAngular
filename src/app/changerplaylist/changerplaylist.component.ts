import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changerplaylist',
  templateUrl: './changerplaylist.component.html',
  styleUrls: ['./changerplaylist.component.css']
})
export class ChangerplaylistComponent implements OnInit {

  private playlist;
  private reponse : any[];
  constructor(private route: ActivatedRoute, private playService: PlaylistService, private spotifyService: SpotifyService) { }
  private privee = "privée";
  private publique = "publique";
  private collabo = "Collaborative"
  private nocollabo = "Non collaborative"
  ngOnInit() {
    this.getPlaylist(this.route.snapshot.params["id"]);
  }



  getPlaylist(id:string) {
    this.spotifyService.getPlaylist(id).subscribe
      (
      resultat => {
        this.playlist = resultat;
        console.log(this.playlist);
      }
      )
  }

  modifierPlaylist(nom: string, description: string, publique: string, collaborative: string) {
    if (nom != null && nom != "") {
      if (description == null) {
        description = "";
      }

      var publi=false;
      if (publique == "privée") {
        publi = false;
      }
      else {
        publi = true;
      }


      //les playlists collaborative peuvent seulement être privée
      var colla=false;
      if (collaborative == "Collaborative") {
        colla = true;
        publi=false;
      }
      else {
        colla = false;
      }

    
      console.log(this.route.snapshot.params["id"]+ "    desc: " + description + " collaborative " + collaborative+" privée "+publique)
      this.playService.modifyPlaylist(this.route.snapshot.params["id"],nom, description, publi, colla).subscribe(
        resultat => {
          console.log(resultat);
          this.reponse = resultat;
          console.log(this.reponse)
        }
      )
    }
  }
}
