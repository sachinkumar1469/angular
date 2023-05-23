import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms"
import { HeaderComponent } from './header/header.component';

// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { InputFormComponent } from './input-form/input-form.component';
import { MatInputModule} from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
