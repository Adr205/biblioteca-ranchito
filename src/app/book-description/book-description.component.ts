import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Tag } from '../book-tag/book-tag.component';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss'],
})
export class BookDescriptionComponent implements OnInit {
  tags: Tag = {} as Tag;

  id: Number = -1;
  constructor(
    public router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private title: Title,
  ) {
    this.id = this.route.snapshot.params.id;
    // console.log("ID = " + this.id);
  }

  ngOnInit(): void {
    if (history.state.data != null) {
      this.tags = history.state.data;
      this.title.setTitle(this.tags.title);
    } else {
      this.getBook();
    }
    
  }

  public getBook() {
    return this.http
      .get<any>('https://biblioteca-ranchito.herokuapp.com/book/' + this.id)
      .subscribe((response) => {
        console.log(response);
        this.tags = response;
        this.title.setTitle(this.tags.title);
      });
  }
}
