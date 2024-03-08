import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurmemoryComponent } from './home/ourmemory/ourmemory.component';
import { PreweddingComponent } from './home/prewedding/prewedding.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'ourmemory',
    component: OurmemoryComponent,
  },
  {
    path: 'prewedding',
    component: PreweddingComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
