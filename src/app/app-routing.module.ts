import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { FileUploadComponent } from './Pages/file-upload/file-upload.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'File upload', component: FileUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
