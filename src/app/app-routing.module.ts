import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';


const routes: Routes=[
{path:'books/:id', component:BookComponent},
{path:'books', component:BooksComponent},
{path:'add', component:AddBookComponent},
{path:'', redirectTo:'books', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
