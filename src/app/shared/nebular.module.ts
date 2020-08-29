import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
    NbThemeModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbCardModule,
    NbFormFieldModule,
    NbSelectModule,
} from '@nebular/theme';

@NgModule({
    imports: [
        NbThemeModule.forRoot({ name: 'dark' }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbInputModule,
        NbIconModule,
        NbCardModule,
        NbFormFieldModule,
        NbSelectModule,
    ],
    exports: [
        NbThemeModule,
        NbLayoutModule,
        NbEvaIconsModule,
        NbInputModule,
        NbIconModule,
        NbCardModule,
        NbFormFieldModule,
        NbSelectModule,
    ]
})
export class NebularModule { }
