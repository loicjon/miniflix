import { Component, OnInit } from '@angular/core';
import { Serie } from './../../models/serie.model';
import { SerieService } from './../../services/serie/serie.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-specific-serie-view',
  templateUrl: './specific-serie-view.component.html',
  styleUrls: ['./specific-serie-view.component.css']
})
export class SpecificSerieViewComponent implements OnInit {

  serie: Serie;
  //imgPath: string;

  constructor(private route: ActivatedRoute,
    private serieService: SerieService) { }

  ngOnInit(): void {

   // this.imgPath = 'assets/img/'+ this.serie.picture.toLowerCase().split('').join('_') +'.jpg';

   const id = this.route.snapshot.params.id;
    this.serie = this.serieService.getSerieById(+id);
  }

}
