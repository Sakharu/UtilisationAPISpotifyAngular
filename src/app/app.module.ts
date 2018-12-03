import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpotifyService } from './spotify.service';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { MatListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routing';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist.service';
import { PlayListDetailComponent } from './play-list-detail/play-list-detail.component';
import {MatSelectModule} from '@angular/material';
import { ChangerplaylistComponent } from './changerplaylist/changerplaylist.component'
@NgModule({
  declarations: [
    AppComponent,
    ListealbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    PlaylistComponent,
    PlayListDetailComponent,
    ChangerplaylistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService,PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
