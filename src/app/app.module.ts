import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookListItemComponent],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
