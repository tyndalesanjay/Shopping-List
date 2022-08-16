import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ListServiceService } from 'src/app/services/list-service.service';
import { Items } from 'src/app/interfaces/items';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Categories } from 'src/app/interfaces/category';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  item: any = [];
  categories: Categories[] = []
  updateInfo: any = {
    categoryID: "",
    item_name: "",
    price: "",
    quantity: ""
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private listService: ListServiceService, private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getById(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCat().subscribe((data: any) => {
      this.categories = data.data
    })
  }

  getById(id: any) {
    this.listService.getItemById(id).subscribe((data: any) => {
      this.item = data.data
      this.updateInfo = {
        categoryID: this.item._id,
        item_name: this.item.item_name,
        price: this.item.price,
        quantity: this.item.quantity
      }
    })
  }

  updateItem(id: any) {
    let data = {
      item_name: this.updateInfo.item_name,
      price: this.updateInfo.price,
      quantity: this.updateInfo.quantity
    }
    this.listService.update(id, data).subscribe(()=> {
      console.log(data)
    })
  }

  

}
