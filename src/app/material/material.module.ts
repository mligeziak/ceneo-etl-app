import { NgModule } from '@angular/core';

import {
  MatCheckboxModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
