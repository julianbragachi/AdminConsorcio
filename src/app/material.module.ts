import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from "angular2-materialize";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule, MatExpansionModule, MatTableModule, MatButtonModule, MatCheckboxModule,
  MatCardModule, MatInputModule, MatIconModule, MatSelectModule, MatRadioModule, MatDialogModule
} from '@angular/material';

const MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  MaterializeModule,
  MatExpansionModule,
  MatTableModule,
  MatSelectModule,
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatRadioModule,
  MatDialogModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class MaterialModule { }
