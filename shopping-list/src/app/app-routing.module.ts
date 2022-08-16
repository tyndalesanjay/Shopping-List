import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ShoppingAddComponent } from './pages/shopping-add/shopping-add.component';
import { ShoppingEditComponent } from './pages/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping_list/:id', component: ShoppingListComponent },
  { path: 'add_item', component: ShoppingAddComponent },
  { path: 'edit_item/:id', component: ShoppingEditComponent},
  {path: 'category_edit/:id', component: CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
