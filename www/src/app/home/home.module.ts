import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainCarouselComponent } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgbModule
  ],
  declarations: [HomeComponent, MainCarouselComponent]
})
export class HomeModule { }
