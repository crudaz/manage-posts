import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonComponent,
    CardComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GlobalModule { }
