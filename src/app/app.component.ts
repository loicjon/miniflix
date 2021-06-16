import { Component } from '@angular/core';
import { SerieService } from './services/serie/serie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  series: Array<any>;

  constructor(private serieService: SerieService) {
    this.series = this.serieService.series
  }

}
