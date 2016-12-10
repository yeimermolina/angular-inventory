import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductsList }  from './product-list.component';
import { ProductRow }  from './product-row.component';
import { ProductImage }  from './product-image.component';
import { ProductDepartment }  from './product-department.component';
import { PriceDisplay}  from './price-display.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
  	 AppComponent, ProductsList, ProductRow, 
  	 ProductImage, ProductDepartment, PriceDisplay],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
