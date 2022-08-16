import { Component, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Categories } from 'src/app/interfaces/category';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  editList: any;
  category:any = []

  constructor(private categoryService: CategoryServiceService, private routes: Router,  private fb:FormBuilder, private router: ActivatedRoute) {
    this.editList = fb.group ({
      category:['']

    })
   }

  ngOnInit(): void {
    this.getCategoryById(this.router.snapshot.paramMap.get('id'));
  }

  getCategoryById(id: any) {
    this.categoryService.getCatId(id).subscribe((data: any) => {
      if(!data) {
        console.error();
        console.log('No Data')
      } else {
        this.category = data.data
        console.log(this.category)
      }
    })
  }

  onEditSubmit(id:any) {
    console.log(this.editList.value);
    this.categoryService.updateCate(id, this.editList.value).subscribe(() => {
      console.log('Worked');
      this.routes.navigate(['/home']);
      
    });
  }

}
