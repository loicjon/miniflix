import { Component, OnInit } from '@angular/core';
import { SerieService } from './../../services/serie/serie.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Serie } from './../../models/serie.model';

/**
 * in this file we catch the data that the user put to edit the serie
 */
@Component({
  selector: 'app-edit-serie-view',
  templateUrl: './edit-serie-view.component.html',
  styleUrls: ['./edit-serie-view.component.css']
})
export class EditSerieViewComponent implements OnInit {

  serie: Serie;

  editSerieForm: FormGroup

  constructor(private serieService: SerieService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serie = this.serieService.getSerieById(+id);

    this.editSerieForm = this.formBuilder.group({
      name: [this.serie.name, Validators.required],
      releasedAt: [this.serie.releasedAt, Validators.required],
      seasonNumber: [this.serie.seasonNumber, Validators.required],
      description: [this.serie.description, Validators.required],
      critic: [this.serie.critic, Validators.required],
      picture: [this.serie.picture, Validators.required],
      comment: [this.serie.comment, Validators.required]
    });
  }

  onSubmitEditSerie(): void {
    this.serie.name = this.editSerieForm.value.name;
    this.serie.releasedAt = this.editSerieForm.value.releasedAt;
    this.serie.seasonNumber = this.editSerieForm.value.seasonNumber;
    this.serie.description = this.editSerieForm.value.description;
    this.serie.critic = this.editSerieForm.value.critic;
    this.serie.picture = this.editSerieForm.value.picture;
    this.serie.comment = this.editSerieForm.value.comment;
    this.serieService.editSerie(this.serie);
  }

}
