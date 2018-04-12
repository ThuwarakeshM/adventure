import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'event', component: EventComponent},
  {path: 'events', component: EventsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'post', component: PostComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
