 import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule ,
    ReactiveFormsModule,
  ],
    exports: [
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [

    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MaterialModule { }
