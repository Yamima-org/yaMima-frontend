import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
 import {TableModule} from 'primeng/table';
 import {ButtonModule} from 'primeng/button';
 import { DialogModule } from "primeng/dialog";
 import {InputTextModule} from 'primeng/inputtext';
 import { DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
    imports: [
         TableModule,
         ButtonModule,  
         DialogModule, 
         InputTextModule,
         DynamicDialogModule,
    ],
    exports: [
         TableModule,
         ButtonModule,
         DialogModule,
         InputTextModule,
         DynamicDialogModule,
    ],
    declarations: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PrimeNgModule {
}
