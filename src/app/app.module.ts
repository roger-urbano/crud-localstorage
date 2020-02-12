import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListFilmsComponent } from './films/components/list-films/list-films.component';
import { NavsSidebarComponent } from './shared/navs-sidebar/navs-sidebar.component';
import { ModalDefaultComponent } from './films/components/modals/modal-default/modal-default.component';
import { ModalAddFilmComponent } from './films/components/modals/modal-add-film/modal-add-film.component';
import { ModalEditFilmComponent } from './films/components/modals/modal-edit-film/modal-edit-film.component';
import { ViewListFilmComponent } from './films/views/view-list-film/view-list-film.component';
import { FilmsService } from './films/films.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFilmsComponent,
    NavsSidebarComponent,
    ModalDefaultComponent,
    ModalAddFilmComponent,
    ModalEditFilmComponent,
    ViewListFilmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
