import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
 import {TableModule} from 'primeng/table';
 import {ButtonModule} from 'primeng/button';
 import { DialogModule } from "primeng/dialog";
 import {InputTextModule} from 'primeng/inputtext';
 import { DynamicDialogModule } from 'primeng/dynamicdialog';
 import {DropdownModule} from 'primeng/dropdown';
 import { InputTextareaModule } from 'primeng/inputtextarea';
 import {ToggleButtonModule} from 'primeng/togglebutton';
 import { MessageModule } from 'primeng/message';
 import { MessagesModule } from 'primeng/messages';
 import {CarouselModule} from 'primeng/carousel';
 import {CardModule} from 'primeng/card';
import { RippleModule } from "primeng/ripple";
import {RatingModule} from 'primeng/rating';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
    imports: [
         TableModule,
         ButtonModule,
         DialogModule,
         InputTextModule,
         DynamicDialogModule,
         DropdownModule,
         InputTextareaModule ,
         ToggleButtonModule,
         MessageModule,
         MessagesModule,
         CarouselModule,
         CardModule,
         RippleModule,
         RatingModule,
         DataViewModule,

    ],
    exports: [
         TableModule,
         ButtonModule,
         DialogModule,
         InputTextModule,
         DynamicDialogModule,
         DropdownModule,
         InputTextareaModule,
         ToggleButtonModule,
         MessageModule,
         MessagesModule,
         CarouselModule,
         CardModule,
         RippleModule,
         RatingModule,
         DataViewModule

    ],
    declarations: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PrimeNgModule {
}
