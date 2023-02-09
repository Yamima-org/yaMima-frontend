import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
 import {TableModule} from 'primeng/table';
 import {ButtonModule} from 'primeng/button';



@NgModule({
    imports: [
         TableModule,
         ButtonModule,   
    ],
    exports: [
         TableModule,
         ButtonModule,
    ],
    declarations: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PrimeNgModule {
}
