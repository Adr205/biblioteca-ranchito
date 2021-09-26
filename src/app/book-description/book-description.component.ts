import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from '../book-tag/book-tag.component';
@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss'],
})
export class BookDescriptionComponent implements OnInit {
  tags: [] = [];
  titulo : String = "";
  autor : String = "";
  sinopsis : String = "";
  saga : String = "";
  categoria : String = "";
  editorial : String = "";
  fecha : Number = 0;
  volumen : Number = 0;
  imagen : String = "";
  
  constructor(public router: Router) {}

  ngOnInit(): void {
    // console.log(history.state.data.title)
    this.titulo = history.state.data.title;
    this.autor = history.state.data.autor;
    this.sinopsis = history.state.data.sinopsis;
    this.saga = history.state.data.saga;
    this.categoria = history.state.data.categoria;
    this.editorial = history.state.data.editorial;
    this.fecha = history.state.data.fecha;
    this.volumen = history.state.data.volumen;
    this.imagen = history.state.data.imagen;
  }
}
