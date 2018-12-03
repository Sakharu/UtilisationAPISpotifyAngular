import { RouterModule,Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayListDetailComponent } from './play-list-detail/play-list-detail.component';
import { ChangerplaylistComponent } from './changerplaylist/changerplaylist.component';

export const 
appRoutes : Routes = [
    { path: 'accueil',  component: AccueilComponent  },
    { path: 'albums',  component: ListealbumComponent  },
    { path: 'chanteurs',  component: ListechanteursComponent  },
    { path: 'playlist',  component: PlaylistComponent  },
    { path: 'detailplaylist/:id',  component: PlayListDetailComponent  },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'album/:id',   component: DetailalbumComponent },
    { path: 'changerplaylist/:id',component:ChangerplaylistComponent}
]