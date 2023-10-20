import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface FileUpload{
  "files": []
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  selectedFile: File | null = null;
  fileUpload: FileUpload = {
    files: []
  };
  

  constructor(private http: HttpClient) {
    
  }
  ngOnInit() {
    this.http.get<FileUpload>('http://api-lb-778518774.us-east-2.elb.amazonaws.com/list_files')
      .subscribe(data => {
        this.fileUpload = data;
        console.log(data);
      });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  downloadFile(fileName: string){
    debugger
    const headers = new HttpHeaders({
      'Accept': 'application/octet-stream'
    });

   this.http.get(`http://api-lb-778518774.us-east-2.elb.amazonaws.com/download/${fileName}`, {
      headers: headers,
      responseType: 'blob'
    }).subscribe(
      (data: Blob) => {
        const downloadUrl = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        link.click();
      },
      error => {
        console.error('Error al descargar el archivo:', error);
      }
    );
  }
  getFileExtension(fileName: string): string {
    const parts = fileName.split('.');
    return parts[parts.length - 1];
  }
}