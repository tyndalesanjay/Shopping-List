import { Component, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Categories } from 'src/app/interfaces/category';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Categories[] = []
  category: any = []
  isShow: boolean = false
  addList:any;
  editList: any


  constructor(private categoryService: CategoryServiceService, private routes: Router,  private fb:FormBuilder) {
    this.addList = fb.group ({
      category:['']

    })
    
   }

  onClick() {
    this.isShow = !this.isShow
  }

  ngOnInit(): void {
    this.categoryService.getCat().subscribe((data: any) => {
      if(!data) {
        console.error();
      }
      this.categories = data.data
      console.log(this.categories)
    })
  }

  deleteItem(id: any){
    this.categoryService.deleteItem(id).subscribe((results) => {
      if(results) {
        alert('Worked')
        window.location.reload()
      } else {
        console.error();
      }
    })
  }

  onSubmit() {

    console.log(this.addList.value);
    this.categoryService.createCate(this.addList.value).subscribe(() => {
      if(!this.addList.value) {
        console.log('Did Not Work')
      } else {
        alert(`Created + ${this.addList.value}`)
        window.location.reload()
      }
    });
    
  }

  onEditSubmit(id:any) {
    console.log(this.editList.value);
    this.categoryService.updateCate(id, this.editList.value).subscribe(() => {
      console.log('Worked');
      
      this.routes.navigate(['/home']);
      
    });
  }

}
