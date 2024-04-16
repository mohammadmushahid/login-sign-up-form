import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { SignComponent } from './sign/sign.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFormComponent } from './new-form/new-form.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { HttpClientModule } from '@angular/common/http';

import { reducers,  metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignComponent,
    
    ManageEmployeesComponent,
    NewFormComponent,
    ApiIntegrationComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    DragDropModule,
    MatSelectModule,
    CdkTreeModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),

  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
