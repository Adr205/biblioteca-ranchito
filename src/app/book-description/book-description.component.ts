import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Tag {
  public id!: number;
  public title!: string;
  public autor!: string;
  public sinopsis!: string;
  public saga!: string;
  public categoria!: string;
  public editorial!: string;
  public fecha!: number;
  public volumen!: number;
  public imagen!: string;

  constructor(
    id: number,
    title: string,
    autor: string,
    sinopsis: string,
    saga: string,
    categoria: string,
    editorial: string,
    fecha: number,
    volumen: number,
    imagen: string
  ) {}
}

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss'],
})
export class BookDescriptionComponent implements OnInit {
  tags: Tag[] = [];
  titulo : String = "";
  autor : String = "";
  sinopsis : String = "";
  saga : String = "";
  categoria : String = "";
  editorial : String = "";
  fecha : Number = 0;
  volumen : Number = 0;
  imagen : String = "";
  
  constructor(public router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // console.log(history.state.data.title)

    if (history.state.data.title != null) {
      this.titulo = history.state.data.title;
      this.autor = history.state.data.autor;
      this.sinopsis = history.state.data.sinopsis;
      this.saga = history.state.data.saga;
      this.categoria = history.state.data.categoria;
      this.editorial = history.state.data.editorial;
      this.fecha = history.state.data.fecha;
      this.volumen = history.state.data.volumen;
      this.imagen = history.state.data.imagen;
    }else{
      this.getBook();
    }
    
  }

public getBook() {
    return this.http
      .get<any>('https://biblioteca-ranchito.herokuapp.com/books')
      .subscribe((response) => {
        console.log(response);
        this.tags = response;

        // this.titulo = this.tags.title;
        this.autor = history.state.data.autor;
        this.sinopsis = history.state.data.sinopsis;
        this.saga = history.state.data.saga;
        this.categoria = history.state.data.categoria;
        this.editorial = history.state.data.editorial;
        this.fecha = history.state.data.fecha;
        this.volumen = history.state.data.volumen;
        this.imagen = history.state.data.imagen;
        //console.log(this.tags[0]);
      });
    }

}
