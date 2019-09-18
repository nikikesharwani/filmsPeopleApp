import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmPeopleListComponent } from './components/film-people-list/film-people-list.component';
import { FilmPeopleDetailComponent } from './components/film-people-detail/film-people-detail.component';
import { FilmPeopleComponent } from './components/film-people/film-people.component';
import { Routes, RouterModule } from '@angular/router';
import { RequestInterceptor } from './helpers/request.interceptor';
import {ToastrModule} from 'ngx-toastr';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'add-people', component: FilmPeopleComponent },
  { path: 'edit-people/:id', component: FilmPeopleComponent },
  { path: 'people-list', component: FilmPeopleListComponent },
  { path: 'people-detail', component: FilmPeopleDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FilmPeopleListComponent,
    FilmPeopleDetailComponent,
    FilmPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', newestOnTop: true,
      tapToDismiss: true, enableHtml: true, maxOpened: 5, autoDismiss: true, timeOut: 10000
    }),
  ],
  exports: [RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
