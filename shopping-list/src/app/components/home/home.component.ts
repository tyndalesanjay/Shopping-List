import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/interfaces/category';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Categories[] = []

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getCat().subscribe((data: any) => {
      if(!data) {
        console.error();
      }
      this.categories = data.data
      console.log(this.categories)
    })
  }

}
