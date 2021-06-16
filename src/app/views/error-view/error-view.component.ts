import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.css']
})
/**
 * allow us to redict the visitor if he type the wrong path and bring him in a error page
 */
export class ErrorViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
