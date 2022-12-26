import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    // url = 'http://localhost:4200/api/formulario/'; //Comment for deploy
      url = 'https://final-back-production.up.railway.app/api/productos/'; //Railway link
      // url = environment.URL;

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerProducto(id: string):Observable<any> {
    return this.http.get(this.url + id);
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + id, producto);
  }
}