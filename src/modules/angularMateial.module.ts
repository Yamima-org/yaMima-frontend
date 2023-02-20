 import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    FormsModule ,
    BrowserAnimationsModule,
    BrowserModule,
  ],
    exports: [
      BrowserAnimationsModule,
      FormsModule,
      BrowserModule,
    ],
    declarations: [
    
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MaterialModule { }