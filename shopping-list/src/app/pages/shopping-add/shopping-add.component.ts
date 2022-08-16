import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ListServiceService } from 'src/app/services/list-service.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Categories } from 'src/app/interfaces/category';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  categories: Categories[] = []
  addList:any;
  constructor( private listService: ListServiceService,
    private fb:FormBuilder,
    private routes:Router, private categoryService: CategoryServiceService, private location: Location) {
      this.addList = fb.group ({
        item_name:[''],
        categoryID:[''],
        price:[''],
        quantity:['']

      })

    }

  ngOnInit(): void {
    this.categoryService.getCat().subscribe((data: any) => {
      this.categories = data.data
    })
  }
  onSubmit() {

    console.log(this.addList.value);
    this.listService.create(this.addList.value).subscribe();
    alert("Successful");
    this.location.back()
  }
}
