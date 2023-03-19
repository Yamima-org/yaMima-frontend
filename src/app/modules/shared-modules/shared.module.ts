import { NgModule } from '@angular/core';
import { PrimeNgModule } from './PrimeNgModule';
import { MaterialModule } from './angularMateial.module';



@NgModule({
  declarations: [],
  imports: [
    PrimeNgModule,
    MaterialModule,
  ],
  exports: [
    PrimeNgModule,
    MaterialModule,
    ]
})
export class SharedModule { }
