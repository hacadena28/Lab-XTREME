import { Component } from '@angular/core';
import { tiposDeArchivo } from '../model/tipeFile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileInfo: any;

constructor(private http: HttpClient) {}


  onFileSelected(event: any) {
    this.fileInfo = event.target.files[0];
    this.fileInfo.icon = this.getIconForFileType(this.getFileExtension(this.fileInfo.name));
  }



  onSubmit() {
    debugger

    if (this.fileInfo) {
      this.http.post<any>('192.168.10.89/upload_file', this.fileInfo).subscribe(
        map(response => {
          return response;
        })
      );
    }
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
