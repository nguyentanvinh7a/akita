import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksService } from '../state/books.service';
import { BooksQuery } from '../state/books.query';
import { BooksStore } from '../state/books.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private booksService: BooksService,
    private booksQuery: BooksQuery,
    private booksStore: BooksStore,
    private route: ActivatedRoute,
    private router: Router) { }

  public booksSubcription: Subscription | undefined;
  public currentId: any = this.route.snapshot.paramMap.get("id");

  public currentBook: any = null;

  public editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  })


  ngOnInit(): void {
  }

}
