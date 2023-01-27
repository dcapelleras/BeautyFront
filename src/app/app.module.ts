import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatesComponent } from './dates/dates.component';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriesComponent } from './categories/categories.component';

import { HeaderComponent } from './components/shared/header/header.component';   
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PoliticaprivacidadComponent } from './components/politicaprivacidad/politicaprivacidad.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { LogRegisterComponent } from './log-register/log-register.component';


//material 
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
>>>>>>> origin


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
<<<<<<< HEAD
    CalendarComponent,
    DatesComponent,
=======
    ContactoComponent,
    PoliticaprivacidadComponent,
    HomeComponent,
    CalendarComponent,
    CategoriesComponent,
    ProfileComponent,
    LogRegisterComponent
>>>>>>> origin

  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
=======
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    //Material 
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatListModule
  ],
  exports: [
    // Material 
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
>>>>>>> origin
  bootstrap: [AppComponent]
})
export class AppModule { }
