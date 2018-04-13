import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http404Component } from './http404/http404.component';

const routes: Routes = [
  {path: '', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'events', loadChildren: 'app/events/events.module#EventsModule'},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  {path: 'gallery', loadChildren: 'app/gallery/gallery.module#GalleryModule'},
  {path: 'posts', loadChildren: 'app/posts/posts.module#PostsModule'},
  {path: 'products', loadChildren: 'app/products/products.module#ProductsModule'},
  {path: '**', component: Http404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
