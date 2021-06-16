import { SerieService } from './../../services/serie/serie.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.css']
})
export class CommentsViewComponent implements OnInit {

  comments: Array<Comment>;

  constructor(private SerieService: SerieService,
    private Router: Router) { }

  ngOnInit(): void {

    this.comments = this.SerieService.series;
  }

  onClickDeleteComment(commentId): void  {
    this.Router.navigate(['comment', commentId]);
  }

}
