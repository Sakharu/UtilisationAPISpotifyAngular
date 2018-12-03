import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private token=SpotifyService.token;
  private spotifyUrlPlayLists = 'https://api.spotify.com/v1/me/playlists/'
  private spotifyTracks ='https://api.spotify.com/v1/playlists/';

  private headers={ 'Content-Type':'application/json','Authorization' : 'Bearer '+ this.token}
    
  private httpOpptionsTrack = {headers: new HttpHeaders(this.headers), body:{ "tracks": [] }};

  constructor(private http:HttpClient) { }

  getPlaylists()
  {
    return this.http.get<any[]>(this.spotifyUrlPlayLists,{headers:this.headers})
  }

  getTracks(id:string)
  {
    return this.http.get<any[]>(this.spotifyTracks+id,{headers:this.headers})
  }


  deleteTrack(id:string,idadelete:string)
  {
    this.httpOpptionsTrack.body.tracks=[{ "uri": "spotify:track:"+idadelete }]
    return this.http.delete<any[]>(this.spotifyTracks+id+"/tracks",this.httpOpptionsTrack);
  }

  addPlaylist(nomplaylist:string,description:string,publique:boolean,collaborative:boolean)
  {
    return this.http.post<any[]>(this.spotifyUrlPlayLists,{"name":nomplaylist,"description":description,"public":publique,"collaborative":collaborative},{headers:this.headers})
  }

  addTrackToPlaylist(idplaylist:string,idtrackaajouter:string)
  {
    return this.http.post<any[]>(this.spotifyTracks+idplaylist+"/tracks?uris=spotify%3Atrack%3A"+idtrackaajouter,null,{headers: this.headers});
  }
  
  modifyPlaylist(idplaylist:string,nomplaylist:string,description:string,publique:boolean,collaborative:boolean)
  {
    return this.http.put<any[]>(this.spotifyTracks+idplaylist,{"name":nomplaylist,"description":description,"public":publique,"collaborative":collaborative},{headers:this.headers})
  }
  
  changeOrderTrack(idplaylist:string,oldplace:number,nouvelleplace:number)
  {
    console.log("idplaylist "+idplaylist+"  oldplace "+oldplace+"   nouovelleplace"+nouvelleplace)
    return this.http.put<any[]>(this.spotifyTracks+idplaylist+"/tracks",{"range_start":oldplace,"insert_before": 3},{headers:this.headers})
  }
  
}
