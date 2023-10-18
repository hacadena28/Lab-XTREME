import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedFile: File | null = null;
files=[];
  constructor(private http: HttpClient) {
    this.getFiles();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  private apiUrl = 'internal-api-lb-1340278212.us-east-2.elb.amazonaws.com';
  getFiles(){
    this.http.get<any>(`${this.apiUrl}/docs#/default/list_files_list_files_get`).subscribe((response : any)=>{
      // this.files = response
      console.log(response);
      

    });
  }

  onFileUpload(event: any) {
    event.preventDefault();

    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      // Aquí puedes enviar formData al servidor usando un servicio HTTP
      // Ejemplo de cómo hacer una solicitud HTTP POST con formData:
      // this.http.post('URL_DEL_SERVIDOR', formData).subscribe(response => {
      //   console.log('Archivo subido con éxito', response);
      // });
    } else {
      console.log('Por favor selecciona un archivo antes de subirlo.');
    }
  }
}
