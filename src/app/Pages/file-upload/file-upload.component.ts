import { Component } from '@angular/core';
import { tiposDeArchivo } from '../model/tipeFile';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileInfo: any;

  onFileSelected(event: any) {
    this.fileInfo = event.target.files[0];
    this.fileInfo.icon = this.getIconForFileType(this.getFileExtension(this.fileInfo.name));
  }

  onFileUpload() {
    if (!this.fileInfo) {
      this.onSubmit()
    }
  }

  onSubmit() {
    // Aquí puedes enviar this.fileInfo al servidor usando un servicio HTTP
    // Por ejemplo, usando Angular's HttpClient:
    // this.http.post('URL_DEL_SERVIDOR', this.fileInfo).subscribe(response => {
    //   console.log('Archivo enviado con éxito', response);
    // });
    alert('Archivo enviado con éxito');
  }
  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  getIconForFileType(extension: string): string {
    const tipoArchivo = tiposDeArchivo.find(tipo => tipo.nombre.toLowerCase() === extension);
    return tipoArchivo ? tipoArchivo.icono : 'fas fa-file';
  }
}
