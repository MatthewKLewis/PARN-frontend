import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SosService {

  constructor(
    private http: HttpClient,
  ) {}

  getAllSos() {
    return this.http.get('http://localhost:4199/sos/getAll');
  }

  addSos(x: number, y: number, zip: number, description: string) {
    return this.http.post('http://localhost:4199/sos/create', {x: x, y: y, zip: zip, description: description});
  }

  deleteSos(id: number) {
    return this.http.delete(`http://localhost:4199/sos/delete/${id}`,);
  }
}
