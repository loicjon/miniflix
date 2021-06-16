import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuardService } from './services/guards/auth/auth-guard.service';
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { SpecificSerieViewComponent } from './views/specific-serie-view/specific-serie-view.component';
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { CommentsViewComponent } from './views/comments-view/comments-view.component';




const routes: Routes = [
  { path: 'auth', component: AuthViewComponent},
  { path: '', canActivate:[AuthGuardService],component: SeriesViewComponent },
  { path: 'series', canActivate: [AuthGuardService],component: SeriesViewComponent },
  { path: 'comments', canActivate: [AuthGuardService], component: CommentsViewComponent },
  { path: 'serie/new', canActivate: [AuthGuardService], component: NewSerieViewComponent },
  { path: 'serie/edit/:id', canActivate: [AuthGuardService], component: EditSerieViewComponent },
  { path: 'serie/:id', canActivate: [AuthGuardService],component: SpecificSerieViewComponent },
  
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
