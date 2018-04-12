import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { AlbumComponent } from './album/album.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { ServiceComponent } from './service/service.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Http404Component } from './http404/http404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    EventsComponent,
    GalleryComponent,
    EventComponent,
    AlbumComponent,
    PostsComponent,
    PostComponent,
    ServiceComponent,
    Http404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
