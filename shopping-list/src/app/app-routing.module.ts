import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppingAddComponent } from './pages/shopping-add/shopping-add.component';
import { ShoppingEditComponent } from './pages/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping_list/:id', component: ShoppingListComponent },
  { path: 'add_item', component: ShoppingAddComponent },
  { path: 'edit_item', component: ShoppingEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
