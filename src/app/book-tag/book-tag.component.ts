import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

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
  selector: 'app-book-tag',
  templateUrl: './book-tag.component.html',
  styleUrls: ['./book-tag.component.scss'],
})
export class BookTagComponent implements OnInit {
  tags: Tag[] = [];
  tagsSave: Tag[] = [];
  constructor( public router: Router, private http:HttpClient) {}

  ngOnInit(): void {
    this.getBookTags();
  }

  public getBookTags() {
    return this.http
      .get<any>('https://biblioteca-ranchito.herokuapp.com/books')
      .subscribe((response) => {
        console.log(response);
        this.tags = response;
        this.tagsSave = this.tags;
        //console.log(this.tags[0]);
      });
  }
}
