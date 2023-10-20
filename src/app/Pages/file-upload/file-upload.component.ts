import { Component } from '@angular/core';
import { tiposDeArchivo } from '../model/tipeFile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileInfo: any;

  constructor(private http: HttpClient) {
    
  }
  onFileSelected(event: any) {
    this.fileInfo = event.target.files[0];
    this.fileInfo.icon = this.getIconForFileType(this.getFileExtension(this.fileInfo.name));
  }

  onFileUpload() {
    if (this.fileInfo) {
      debugger
      if (this.fileInfo) {
        const formData: FormData = new FormData();
        formData.append('file', this.fileInfo, this.fileInfo.name);
        console.log(formData)
        this.http.post('http://api-lb-778518774.us-east-2.elb.amazonaws.com/upload_file', formData).subscribe(p=> console.log(p));
      } else {
        console.log('Por favor selecciona un archivo antes de subirlo.');
      }
    }
  }

  
  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  getIconForFileType(extension: string): string {
    const tipoArchivo = tiposDeArchivo.find(tipo => tipo.nombre.toLowerCase() === extension);
    return tipoArchivo ? tipoArchivo.icono : 'fas fa-file';
  }
}