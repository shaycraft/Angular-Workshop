import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule,
  MatIconModule, MatInputModule, MatSnackBarModule, MatTabsModule,
  MatButtonModule, MatLineModule, MatToolbarModule
} from
  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatLineModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
