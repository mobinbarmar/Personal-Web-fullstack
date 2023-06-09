import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Modal1Component } from './modal1/modal1.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';



@NgModule({
  declarations: [
    Card1Component,
    LogoComponent,
    NavComponent,
    FooterComponent,
    Modal1Component,
    ProgressbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Card1Component,
    LogoComponent,
    NavComponent,
    FooterComponent,
    Modal1Component,
    ProgressbarComponent
  ]
})
export class SharedModule { }
