import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BookTagComponent } from './book-tag/book-tag.component';
import { BookDescriptionComponent } from './book-description/book-description.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  {path:'', component:BookTagComponent},
  { path: 'book/:id', component: BookDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
