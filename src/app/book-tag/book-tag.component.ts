import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

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
  maxPages: Number = -1;
  currentPage: number = 1;
  constructor(
    public router: Router,
    private http: HttpClient,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getBookTags();
    this.getPages();
  }

  public getBookTags() {
    return this.http
      .get<any>(
        'https://biblioteca-ranchito.herokuapp.com/books?page=' +
          this.currentPage
      )
      .subscribe((response) => {
        //console.log(response);
        this.tags = response;
        this.tagsSave = this.tags;
        //console.log(this.tags[0]);
      });
  }

  public getPages() {
    return this.http
      .get<any>('https://biblioteca-ranchito.herokuapp.com/all-books')
      .subscribe((response) => {
        //console.log(response);
        this.maxPages = Math.ceil(response / 40);
        // console.log(this.maxPages);
        //console.log(this.tags[0]);
      });
  }

  public nextPage() {
    if (this.currentPage < this.maxPages) {
      this.currentPage = this.currentPage + 1;
      this.goBook();
      this.ngOnInit();
    }
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.goBook();
      this.ngOnInit();
    }
  }

  public getPage() {
    return this.currentPage;
  }

  goBook() {
    this.scroller.scrollToAnchor('book');
  }

  Search(e:Event) {
    e.preventDefault();
    let filterText = (<HTMLInputElement>(
      document.getElementById('searchText')
    )).value.toLowerCase();

    if(filterText != ""){
      return this.http
        .get<any>(
          'http://biblioteca-ranchito.herokuapp.com/books/' + filterText
        )
        .subscribe((response) => {
          this.tags = response;
        });
    }else{
      this.getBookTags();
    }

    
    
  }
}
