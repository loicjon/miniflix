import { Serie } from './../../models/serie.model';
import { Component, OnInit } from '@angular/core';
import { SerieService } from './../../services/serie/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.css']
})
export class SeriesViewComponent implements OnInit {
  /**
   * allow us to call the fonction that we initialised in the serie view
   */

  series: Array<Serie>;

  constructor(private SerieService: SerieService,
     private router: Router) { }

  ngOnInit(): void {

    this.series = this.SerieService.series;
  }


  onClickShowSerie(serieId): void {
    this.router.navigate(['serie', serieId]);
  }

  onClickEditSerie(serieId): void {
    this.router.navigate(['serie', 'edit', serieId]);
  }

  onClickDeleteSerie(serieId): void {
    this.SerieService.deleteSerie(+serieId);
  }

  onClickShowComment(commentId): void {
    this.router.navigate(['comment', commentId]);
  }

  
  

}
