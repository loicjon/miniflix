import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { HeaderComponent } from './components/header/header.component';
import { SpecificSerieViewComponent } from './views/specific-serie-view/specific-serie-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

import { SerieService } from './services/serie/serie.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { CommentsViewComponent } from './views/comments-view/comments-view.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeriesViewComponent,
    
    SpecificSerieViewComponent,
    ErrorViewComponent,
    AuthViewComponent,
    NewSerieViewComponent,
    EditSerieViewComponent,
    CommentsViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, SerieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
