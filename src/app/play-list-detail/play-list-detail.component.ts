import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-play-list-detail',
  templateUrl: './play-list-detail.component.html',
  styleUrls: ['./play-list-detail.component.css']
})
export class PlayListDetailComponent implements OnInit {

  private idalbum:string;
  private details: any[];

  constructor(private route:ActivatedRoute,private playlistService: PlaylistService) { }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params["id"];
    console.log(this.idalbum)
    this.getdetailplaylistdetail(this.idalbum);
  }

  getdetailplaylistdetail(id)
  {
    this.playlistService.getTracks(id).subscribe
    (
    resultat =>
     {
        console.log(resultat);
        this.details = resultat;
        //console.log(this.albums);
      }
    )
  }

  deleteTrack(id, idtrack)
  {
    console.log(id);
    this.playlistService.deleteTrack(id,idtrack).subscribe
    (
    resultat =>
     {
        this.details = resultat;
      }
    )
  }

  changeOrderTrack(idplaylist:string,oldplace:number,newplace:number)
  {
    this.playlistService.changeOrderTrack(idplaylist,oldplace,newplace).subscribe
    (
      resultat =>
      {
        console.log(resultat)
        this.details=resultat;
      }
    )
  }



}
