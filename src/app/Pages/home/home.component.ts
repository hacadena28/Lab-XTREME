import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
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
