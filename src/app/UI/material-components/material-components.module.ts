import {
  MatButtonModule,
  MatDividerModule,
  MatIcon,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  CommonModule,
  MatButtonModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialComponentsModule { }
