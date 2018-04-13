import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  declarations: [AlbumsListComponent]
})
export class GalleryModule { }
