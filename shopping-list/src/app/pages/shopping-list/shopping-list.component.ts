import { Component, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/interfaces/items';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Categories } from 'src/app/interfaces/category';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  lists: Items[] = []
  category:any = []

  constructor(private listService: ListServiceService,private categoryService: CategoryServiceService ,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.listService.getAll().subscribe((data: any) => {
    //   if (!data) {
    //     console.error();
    //   }
    //   this.lists = data.data
    //   console.log(this.lists)
    // })

    this.getById(this.route.snapshot.paramMap.get('id'));
  }

  getById(id: any) {
    this.categoryService.getCatList(id).subscribe((data: any) => {
      this.lists = data.data
      this.category = data.data[0].categoryID.category
      
    })
  }





}
