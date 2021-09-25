import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss'],
})
export class BookDescriptionComponent implements OnInit {
  constructor(public router:Router) {

  }

  ngOnInit(): void {
  }
}
