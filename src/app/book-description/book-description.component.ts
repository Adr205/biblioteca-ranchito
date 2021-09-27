import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from '../book-tag/book-tag.component';
// export class Tag {
//   public id!: number;
//   public title!: string;
//   public autor!: string;
//   public sinopsis!: string;
//   public saga!: string;
//   public categoria!: string;
//   public editorial!: string;
//   public fecha!: number;
//   public volumen!: number;
//   public imagen!: string;

//   constructor(
//     id: number,
//     title: string,
//     autor: string,
//     sinopsis: string,
//     saga: string,
//     categoria: string,
//     editorial: string,
//     fecha: number,
//     volumen: number,
//     imagen: string
//   ) {}
// }

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss'],
})
export class BookDescriptionComponent implements OnInit {
  tags!: Tag;
  id : Number = -1;
  constructor(public router: Router, private http: HttpClient, private route : ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    console.log("ID = " + this.id);
  }

  ngOnInit(): void {
    if(history.state.data != null){
      this.tags = history.state.data;
    }else{
      this.getBook();
    }
  }

public getBook() {
    return this.http
      .get<any>('https://biblioteca-ranchito.herokuapp.com/book/' + this.id)
      .subscribe((response) => {
        console.log(response);
        this.tags = response;
      });
    }

}
