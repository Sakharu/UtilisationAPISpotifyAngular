import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyUrlSearchAlbum='https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  public static token='BQDACJL2x8dXc4myv5fyBbTZ4b5kkknxaZnH-G72a3fjgHFhQAwapXJ1qIJShwM03eKUraMjs5ZZubE0g75cLUjeOSZ7ZJBmJk-3qfjqMCD4VoB3dLjYvFlaCRTOgcATqWbVhvSrfvUnixyvWSUmCtJohmhxzTdfEqwsJfzXcB7sFykvn8KFXhb2996w9WPVxOJd7eNeX_0rN5phI5t8GCRgS8sjNadmpH7ZygNefbIAJxxnkRkoeKhcTqtJuS6bbMQ20mFN1AF0KEGdF5mivqhcBf0o9VZAgbU';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q='  
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlayList = 'https://api.spotify.com/v1/me/playlists/'
  private spotifyUrlPlayListById = 'https://api.spotify.com/v1/playlists/'

  private headers=
  { 'Content-Type':'application/json',
    'Authorization' : 'Bearer '+ SpotifyService.token}
  constructor(private http:HttpClient) { }

  getAlbums(mot:string)
  {
    return this.http.get<any[]>(this.spotifyUrlSearchAlbum+mot,{headers:this.headers})
  }

  getChanteurs(mot:string)
  {
    return this.http.get<any[]>(this.spotifyUrlSearchChanteur+mot,{headers:this.headers})
  }

  getAlbum(mot:string)
  {
    return this.http.get<any[]>(this.spotifyUrlAlbum+mot,{headers:this.headers})
  }

  getListPlaylist()
  {
	  return this.http.get<any[]>(this.spotifyUrlPlayList,{headers:this.headers})
  }

  getPlaylist(id:string)
  {
    return this.http.get<any[]>(this.spotifyUrlPlayListById+id,{headers:this.headers})   
  }

  
}
