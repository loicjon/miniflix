import { Router } from '@angular/router';
import { SerieService } from './../../services/serie/serie.service';
import { Serie } from './../../models/serie.model';
import { Component, OnInit } from '@angular/core';

/**
 * Done with template form method
 */
@Component({
  selector: 'app-new-serie-view',
  templateUrl: './new-serie-view.component.html',
  styleUrls: ['./new-serie-view.component.css']
})
export class NewSerieViewComponent implements OnInit {

  serie: Serie;

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.serie = new Serie('', '', '', '', '', '', '');
  }


  /**
   * Method called when the user click on submit button
   */
  onSubmitNewSerie() {  
    this.serieService.addSerie(this.serie);
    this.router.navigate(['series']);

  }

}
