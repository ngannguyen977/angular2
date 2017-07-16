import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProductsCatologyComponent } from './products-catology/products-catology.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, ProductsCatologyComponent]
})
export class MainModule { }
