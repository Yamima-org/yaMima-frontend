 import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule ,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
    exports: [
      BrowserAnimationsModule,
      FormsModule,
      BrowserModule,
      ReactiveFormsModule,
    ],
    declarations: [
    
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MaterialModule { }