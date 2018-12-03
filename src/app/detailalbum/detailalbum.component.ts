import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from './../spotify.service';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

  private idalbum:string;
  private details: any[];
  private playlists: any[];

  constructor(private route:ActivatedRoute,private spotService: SpotifyService,private playlistService:PlaylistService) { }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params["id"];
    console.log(this.idalbum)
    this.getalbum(this.idalbum);
    this.getListPlaylist();
    console.log("AAAAAAAAAAAAAAAAAAAAAAA");
  }

  getalbum(id)
  {
    this.spotService.getAlbum(id).subscribe
    (
    resultat =>
     {
        console.log(resultat);
        this.details = resultat;
        //console.log(this.albums);
      }
    )
  }


  getListPlaylist()
  {
    this.spotService.getListPlaylist().subscribe
    (
    resultat =>
     {
        this.playlists = resultat;
        console.log(this.playlists);
      }
    )
  }

  addTrackToPlaylist(idplaylist,idtrack)
  {
    console.log(idtrack);
    console.log(idplaylist);
    this.playlistService.addTrackToPlaylist(idtrack,idplaylist).subscribe
    (
    resultat =>
     {
        console.log(resultat);
        //this.details = resultat;
        //console.log(this.albums);
      }
    )
  }

}
